// Importing CSS styles and necessary modules from React and Material-UI
import "../Styles/ExperienceSection.css";
import React from "react";
import { Container } from "@mui/material";

// Defining the ExperienceSection functional component
const ExperienceSection = (props) => {
  return (
    // Container component from Material-UI to wrap the experience section
    <Container className="template-one-experience-comp">
      {/* List item to display each experience */}
      <li className="template-one-experience-comp">
        {/* Experience details including job title, organization name, start and end year */}
        <h3 className="experience-heading">
          {props.experience.jobTitle}{" "}
          <span className="experience-org-name">
            {props.experience.organizationName}
          </span>
          <span className="experience-start-end">
            ({props.experience.startYear} - {props.experience.endYear})
          </span>
        </h3>
      </li>
    </Container>
  );
};

// Exporting the ExperienceSection component as default
export default ExperienceSection;
