// Importing React and CSS styles
import React from "react";
import "../Styles/HeadingSection.css";

// Defining TempHeading functional component
const TempHeading = (props) => {
  return (
    <div>
      {/* Horizontal line for the top section */}
      <hr
        style={{ backgroundColor: props.Hupcolor, height: props.Hupheight }}
        className="vertical-line"
      />
      {/* Heading with custom color */}
      <h2
        style={{ color: props.color }} // Applying custom color style
        className="professional-experience-heading"
      >
        {props.title} {/* Displaying the title */}
      </h2>
      {/* Horizontal line for the bottom section */}
      <hr
        style={{ backgroundColor: props.Hdowncolor, height: props.Hdownheight }}
        className="vertical-line"
      />
    </div>
  );
};

// Exporting the TempHeading component as default
export default TempHeading;
