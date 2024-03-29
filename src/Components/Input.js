// Importing necessary modules from Material-UI, React, and custom styles
import { TextField } from "@mui/material";
import React from "react";
import "../Styles/Input.css";
import { inputChecks } from "../Utils/inputChecks"; // Importing utility function for input validation

// Defining Input functional component
const Input = (props) => {
  return (
    <div className="input-component">
      {/* Displaying input title */}
      <p className="input-title">{props.title}</p>
      {/* Text field component from Material-UI */}
      <TextField
        variant="outlined" // Setting input variant
        type={props.type} // Setting input type
        name={props.name} // Setting input name
        {...props.register(props.name, inputChecks(props.type, props.name))} // Registering input with validation rules
        multiline={props.multiline} // Allowing multiline input if specified
        rows={5} // Setting number of rows for multiline input
        value={props.value} // Setting input value
        onChange={(e) => props.setValue(e.target.value.toString())} // Handling input value change
        error={props.error} // Setting error state
        helperText={props.errorMessage ? props.errorMessage : null} // Displaying error message if exists
      />
    </div>
  );
};

// Exporting the Input component as default
export default Input;
