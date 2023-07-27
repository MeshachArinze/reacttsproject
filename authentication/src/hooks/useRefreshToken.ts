import { useEffect } from "react";
import axios from "axios";
import useAuth from "./useAuth";// Adjust the import path based on the actual location of the useAuth file

interface AdditionalData {
  // Define any properties you need for additional data
  customHeader: string;
  // Add more properties as needed
}

const useRefresh = (additionalData?: AdditionalData): (() => void) => {
  const [, setAuth] = useAuth(); // Destructure setAuth from the useAuth hook

  useEffect(() => {
    const RefreshAccessToken = async () => {
      try {
        const config = additionalData
          ? {
              headers: {
                Authorization: additionalData.customHeader,
                // Add more custom headers as needed
              },
            }
          : undefined;
        // Replace 'YOUR_REFRESH_TOKEN_ENDPOINT' with your actual API endpoint for refreshing the token
        const response = await axios.post("/refresh", {
          withCredentials: true, config
        });

        // Assuming the API response contains an 'accessToken' property
        const { accessToken } = response.data;

        // After refreshing, update the authentication status to indicate the user is still authenticated
        setAuth({
          isAuthenticated: true,
          // You can store the access token in the auth state or use it as needed
          accessToken,
        });
      } catch (error) {
        // Handle any error that might occur during token refresh
        console.error("Error refreshing access token:", error);
      }
    };

    // Call the function to refresh the access token when this hook is triggered
    RefreshAccessToken();
  }, [additionalData, setAuth]);

  const manualRefresh = async () => {
    try {
      // You can add any additional logic here before calling the refresh API
      // For example, you might want to check the current authentication status
      // and only proceed with the refresh if the user is already authenticated

      // const [authState] = useAuth();
      // if (!authState.isAuthenticated) {
      //   console.log('User is not authenticated. Cannot refresh token.');
      //   return;
      // }

      // For example, you can include custom headers for the refresh request
      const config = {
        headers: {
          Authorization: "Bearer " + "YOUR_CUSTOM_REFRESH_TOKEN",
        },
      };

      // Make the refresh API call with custom headers
      const response = await axios.post(
        "YOUR_REFRESH_TOKEN_ENDPOINT",
        {},
        config
      );

      // Assuming the API response contains an 'accessToken' property
      const { accessToken } = response.data;

      // After refreshing, update the authentication status to indicate the user is still authenticated
      setAuth({
        isAuthenticated: true,
        accessToken, // Include the accessToken property in the object
      });
    } catch (error) {
      // Handle any error that might occur during token refresh
      console.error("Error refreshing access token:", error);
    }
  };

  return manualRefresh;
};

export default useRefresh;



