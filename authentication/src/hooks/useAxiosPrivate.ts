/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { axiosPrivate } from '../api/axios'; // Assuming you have the Axios instance exported in an axios.ts file
import useAuth from './useAuth';
import useRefresh from './useRefreshToken';
import axios from 'axios';

interface AxiosPrivateOptions {
  refreshEndpoint: string; // Endpoint to refresh the access token
  customHeaders?: Record<string, string>; // Optional custom headers for the request
}

const useAxiosPrivate = (options: AxiosPrivateOptions) => {
  const [authState] = useAuth();
  const manualRefresh = useRefresh();

  const [axiosInstance, setAxiosInstance] = useState(axiosPrivate);

  useEffect(() => {
    // Create a new Axios instance with the initial headers from the default instance
    const newInstance = axios.create({
      baseURL: "http://localhost:3500",
      timeout: 1000,
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    // Add an interceptor to the new Axios instance for handling 401 (Unauthorized) responses
    newInstance.interceptors.response.use(
      (response: any) => response, // Request successful, pass response through
      async (error: { config: any; response: { status: number; }; }) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          // Token refresh required, make a refresh request
          originalRequest._retry = true;

          try {
            await manualRefresh(); // Call the manualRefresh function from useRefresh
            return newInstance(originalRequest); // Retry the original request with the updated token
          } catch (refreshError) {
            // If token refresh fails, handle the error or redirect to login
            console.error('Error refreshing access token:', refreshError);
            // You can handle the error or redirect the user to the login page
            // For example, you might want to log the user out and redirect to login
            // handleLogout();
          }
        }

        return Promise.reject(error);
      }
    );

    // Set the new Axios instance in state
    setAxiosInstance(newInstance);
  }, [axiosInstance, manualRefresh]);

  // Function to make a private API request using the custom Axios instance
  const makePrivateRequest = async <T>(method: string, url: string, data?: any): Promise<T> => {
    try {
      const response = await axiosInstance({
        method,
        url,
        data,
        headers: {
          // Include any custom headers provided in the options
          ...(options.customHeaders || {}),
          // Include the access token in the Authorization header
          Authorization: `Bearer ${authState.accessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      // Handle any error that might occur during the request
      console.error('Error making private request:', error);
      throw error;
    }
  };

  return makePrivateRequest;
};

export default useAxiosPrivate;


