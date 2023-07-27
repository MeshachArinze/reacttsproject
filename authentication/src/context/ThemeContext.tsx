import { createContext } from "react";

// Define the type of your theme object
interface AuthState {
  isAuthenticated: boolean;
  primaryColor?: string;
  // Other relevant authentication-related properties can be added here
}



// Create the context
const ThemeContext = createContext<AuthState | null>(null);

export default ThemeContext;
