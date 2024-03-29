// Importing necessary modules from React and Material-UI, and CSS styles
import React from "react";
import "../Styles/HeaderSection.css";
import { Container } from "@mui/material";

// Defining the HeaderSection functional component
const HeaderSection = (props) => {
  return (
    // Div to wrap the header section with background color provided via props
    <div style={{ backgroundColor: props.bgColor }}>
      <div className="template-header">
        <div className="template-header-first">
          {/* Conditional rendering for profile image */}
          {props.personalInfo.profileImg.length > 0 ? (
            // Displaying profile image if available
            <div className="template-img-cont">
              <img
                className="template-profile-img"
                src={props.personalInfo.profileImg}
                alt="profile-img"
              />
            </div>
          ) : (
            // Displaying initials if profile image is not available
            <div
              style={{ backgroundColor: props.primaryColor }}
              className="template-img-cont"
            >
              <p style={{ color: props.bgColor }} className="template-img-text">
                AM
              </p>
            </div>
          )}
          {/* Container for user details */}
          <div className="template-user-details-cont">
            {/* Displaying user's name */}
            <h2
              style={{ color: props.primaryColor }}
              className="template-user-name"
            >
              {props.personalInfo.firstName + " " + props.personalInfo.lastName}
            </h2>
            {/* Displaying user's job title */}
            <p
              style={{ color: props.secondaryColor }}
              className="template-user-designation"
            >
              {props.workExperience[0].jobTitle}
            </p>
          </div>
        </div>
        {/* Displaying user's address and contact information */}
        <p
          style={{ color: props.primaryColor }}
          className="template-header-second"
        >
          {props.personalInfo.address}
          <br />
          {props.personalInfo.city} &nbsp;
          {props.personalInfo.country} &nbsp;
          {props.personalInfo.postalCode}
          <br />
          {props.personalInfo.mobile}
          <br />
        </p>
      </div>

      {/* Container to wrap about section */}
      <Container>
        {/* Horizontal line with custom styling */}
        <hr
          style={{ backgroundColor: props.hrcolor, height: props.Hdownheight }}
          className="vertical-line"
        />
        {/* Displaying user's objective */}
        <p
          style={{ color: props.secondaryColor }}
          className="template-user-about"
        >
          {props.personalInfo.objective}
        </p>
        {/* Horizontal line with custom styling */}
        <hr
          style={{
            backgroundColor: props.hrsecondcolor,
            height: props.Hdownheight,
          }}
          className="vertical-line"
        />
      </Container>
    </div>
  );
};

// Exporting the HeaderSection component as default
export default HeaderSection;
