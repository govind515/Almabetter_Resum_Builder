import React from "react";
import { Container } from "@mui/material";
import "../Styles/TemplateKeySkill.css";

const TemplateKeySkill = (props) => {
  return (
    <Container>
      <li className="skill">{props.skill}</li>
    </Container>
  );
};

export default TemplateKeySkill;
