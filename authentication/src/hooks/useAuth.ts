import { useState, useDebugValue } from "react";

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  // Other relevant authentication-related properties can be added here
}

const useAuth = (
  initialState: AuthState
): [AuthState, (auth: AuthState) => void] => {
  const [auth, setAuth] = useState<AuthState>(initialState);

  // Use the useDebugValue hook to display a custom label for this custom hook in React DevTools
  useDebugValue(auth.isAuthenticated ? "Authenticated" : "Not Authenticated");

  return [auth, setAuth];
};

export default useAuth;
