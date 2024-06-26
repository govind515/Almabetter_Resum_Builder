import { Container, Paper } from "@mui/material";
import React from "react";
import "./Template.css";
import HeaderSection from "../../Components/HeaderSection";
import TempHeading from "../../Components/HeadingSection";
import { data } from "../Data/data";
import ExperienceSection from "../../Components/ExperienceSection";
import TemplateEducation from "../../Components/TemplateEducation";
import TemplateKeySkill from "../../Components/TemplateKeySkill";

// Define Template2 component
const Template2 = (props) => {
  // Destructure props or fallback to default data
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

  // Return JSX
  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "550px",
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
      elevation={3}
    >
      {/* Header Section */}
      <HeaderSection
        primaryColor={"#C98A55"}
        secondaryColor={"black"}
        bgColor={"white"}
        hrcolor={"none"}
        Hdownheight={"3px"}
        hrsecondcolor={"none"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        {/* Professional Experience Section */}
        <TempHeading
          color={"#C98A55"}
          Hupcolor={"none"}
          Hupheight={"none"}
          Hdowncolor={"#C98A55"}
          Hdownheight={"none"}
          title={"Professional Experience"}
        />
        <ul style={{ paddingBottom: 10 }}>
          {/* Map over work experience data */}
          {workexperience.map((experience, index) => {
            return <ExperienceSection key={index} experience={experience} />;
          })}
        </ul>
        {/* Education Section */}
        <TempHeading
          color={"#C98A55"}
          Hupcolor={"none"}
          Hupheight={"none"}
          Hdowncolor={"#C98A55"}
          Hdownheight={"none"}
          title={"Education"}
        />
        <TemplateEducation education={educationinfo} />
        {/* Key Skills Section */}
        <TempHeading
          color={"#C98A55"}
          Hupcolor={"none"}
          Hupheight={"none"}
          Hdowncolor={"#C98A55"}
          Hdownheight={"none"}
          title={"Key Skills"}
        />
        <ul style={{ marginBottom: 10 }}>
          {/* Map over skills data */}
          {skills.map((skill, index) => {
            return <TemplateKeySkill key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

// Export Template2 component
export default Template2;
