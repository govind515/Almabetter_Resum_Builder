// Import necessary modules from React
import React from "react";
import ReactDOM from "react-dom/client";

// Import the main App component and its CSS file
import App from "./App";
import "./index.css";

// Import Provider from react-redux to provide Redux store to the components
import { Provider } from "react-redux";

// Import the Redux store
import { Store } from "./Store";


// Create a root for ReactDOM to render the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app inside the root
root.render(
  // Use StrictMode to enable additional React checks and warnings
  <React.StrictMode>
    {/* Provide the Redux store to the entire app */}
    <Provider store={Store}>
      {/* Render the main App component */}
      <App />
    </Provider>
  </React.StrictMode>
  
);
