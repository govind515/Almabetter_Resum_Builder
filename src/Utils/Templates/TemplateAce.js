// Importing necessary components and styles
import { Container, Paper } from "@mui/material";
import React from "react";
import "./Template.css"; // Importing CSS styles for the template
import HeaderSection from "../../Components/HeaderSection"; // Importing HeaderSection component
import TempHeading from "../../Components/HeadingSection"; // Importing HeadingSection component
import { data } from "../Data/data"; // Importing dummy data
import ExperienceSection from "../../Components/ExperienceSection"; // Importing ExperienceSection component
import TemplateEducation from "../../Components/TemplateEducation"; // Importing TemplateEducation component
import TemplateKeySkill from "../../Components/TemplateKeySkill"; // Importing TemplateKeySkill component

// Template4 component representing a specific template
const Template4 = (props) => {
  // Destructuring props to retrieve data or using default dummy data if props are not provided
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;

  // Rendering the Template4 component
  return (
    <Paper
      sx={{
        // Styling for Paper component
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "600px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3} // Elevation level for Paper component
    >
      {/* HeaderSection component */}
      <HeaderSection
        primaryColor={"#9B536F"}
        secondaryColor={"black"}
        bgColor={"white"}
        hrcolor={"#9B536F"}
        hrsecondcolor={"none"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        {/* Heading for professional experience section */}
        <TempHeading
          color={"#9B536F"}
          Hupcolor={"none"}
          Hupheight={"none"}
          Hdowncolor={"#9B536F"}
          Hdownheight={"none"}
          title={"Professional Experience"}
        />
        <ul style={{ marginBottom: 10 }}>
          {/* Mapping through work experience data and rendering ExperienceSection component for each */}
          {workexperience.map((experience, index) => {
            return <ExperienceSection key={index} experience={experience} />;
          })}
        </ul>
        {/* Heading for education section */}
        <TempHeading
          color={"#9B536F"}
          Hupcolor={"none"}
          Hupheight={"none"}
          Hdowncolor={"#9B536F"}
          Hdownheight={"none"}
          title={"Education"}
        />
        {/* Rendering TemplateEducation component for education information */}
        <TemplateEducation education={educationinfo} />
        {/* Heading for key skills section */}
        <TempHeading
          color={"#9B536F"}
          Hupcolor={"none"}
          Hupheight={"none"}
          Hdowncolor={"#9B536F"}
          Hdownheight={"none"}
          title={"Key Skills"}
        />
        <ul style={{ marginBottom: 10 }}>
          {/* Mapping through key skills data and rendering TemplateKeySkill component for each */}
          {skills.map((skill, index) => {
            return <TemplateKeySkill key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

// Exporting the Template4 component as default
export default Template4;
