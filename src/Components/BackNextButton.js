// Importing necessary components from Material-UI and React
import { Button, CircularProgress } from "@mui/material";
import React from "react";

// Importing CSS styles
import "../Styles/BackNextButton.css";

// Defining a functional component named BackNextButton
const BackNextButton = (props) => {
  return (
    <div className="back-next-button">
      {/* Rendering back button only if tab is not 0 */}
      {props.tab === 0 ? null : (
        <Button
          onClick={props.onBack}
          className="outlined-btn"
          sx={{ marginRight: "20px" }} // Adding custom styles using sx prop
          variant="outlined"
        >
          {props.backTitle} {/* Displaying back button title */}
        </Button>
      )}
      {/* Rendering either CircularProgress or next button based on loading prop */}
      {props.loading ? (
        <CircularProgress size={25} /> // Displaying CircularProgress if loading is true
      ) : (
        <Button type="submit" className="contained-btn" variant="contained">
          {props.nextTitle} {/* Displaying next button title */}
        </Button>
      )}
    </div>
  );
};

// Exporting the BackNextButton component as default
export default BackNextButton;
