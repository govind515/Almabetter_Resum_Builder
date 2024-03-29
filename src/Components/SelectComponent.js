import React from "react";
import { FormControl, FormHelperText } from "@mui/material";
import "../Styles/SelectComponent.css";

// SelectComponent functional component
const SelectComponent = (props) => {
  // Render a div with class name "select-component"
  return (
    <div className="select-component">
      {/* Render a paragraph with the title */}
      <p className="select-title">{props.title}</p>
      {/* Render a FormControl with fullWidth and error props */}
      <FormControl fullWidth error={props.error}>
        {/* Render child components */}
        {props.children}
        {/* Render FormHelperText with error message */}
        <FormHelperText>{props.errorMessage}</FormHelperText>
      </FormControl>
    </div>
  );
};

// Export the SelectComponent
export default SelectComponent;
