// Importing necessary modules from React, Material-UI, and custom styles
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Paper, Divider, Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { connect } from "react-redux";
import { BackNextButton, Input } from "../Pages/index";
import { addNewSkills, deleteSkill, editSkill } from "../Redux/Actions/actions";

// Mapping state to props to access skills from Redux store
const mapStateToProps = (state) => ({
  skills: state.keySkillsReducer.skills,
});

// Mapping dispatch to props to dispatch actions
const mapDispatchToProps = (dispatch) => ({
  onAddNewSkill: () => dispatch(addNewSkills()), // Dispatching action to add new skill
  onEditSkill: (skills) => dispatch(editSkill(skills)), // Dispatching action to edit skill
  onDeleteSkill: (index) => dispatch(deleteSkill(index)), // Dispatching action to delete skill
});

// Defining KeyskillsSection functional component
function KeyskillsSection(props) {
  const [loading, setLoading] = useState(false); // State for loading indicator
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // React Hook Form methods for form handling

  // Function to handle preview button click
  const handlePreview = (data) => {
    setLoading(true); // Setting loading state to true

    // Simulating loading with setTimeout
    setTimeout(() => {
      setLoading(false); // Setting loading state to false
      props.setTab(props.tab + 1); // Moving to the next tab
    }, 1000);
  };

  // Function to handle moving back in the form
  const handleBack = () => {
    props.setTab(props.tab - 1); // Moving back to the previous tab
  };

  // Function to handle editing a skill
  const onEditSkill = (value, id) => {
    // Mapping through skills to update the edited skill
    const newSkills = props.skills.map((skill, index) => {
      if (index === id) {
        return value; // Updating the skill at the specified index
      } else return skill; // Returning other skills as they are
    });

    props.onEditSkill(newSkills); // Dispatching action to update skills
  };

  return (
    // Paper component for the key skills section
    <Paper elevation={3} className="key-skills-paper">
      {/* Heading for the key skills section */}
      <h2 className="key-skills-heading">Key Skills</h2>
      <Divider />
      <form onSubmit={handleSubmit(handlePreview)}>
        {/* Div to contain the key skills form fields */}
        <div className="key-skills-form-fields">
          {/* Mapping through skills to display input fields for each skill */}
          {props.skills.map((skill, index) => {
            return (
              <div key={index} className="key-input-with-delete">
                {/* Input component for editing skill */}
                <Input
                  type="text"
                  name={`skill${index + 1}`}
                  register={register}
                  multiline={false}
                  value={skill}
                  setValue={(skill) => onEditSkill(skill, index)}
                  error={errors[`skill${index + 1}`] ? true : false}
                  errorMessage={
                    errors[`skill${index + 1}`]
                      ? errors[`skill${index + 1}`].message
                      : null
                  }
                />
                {/* Delete icon for removing a skill */}
                {props.skills.length === 1 ? null : (
                  <DeleteOutlineOutlinedIcon
                    sx={{ marginLeft: "10px" }}
                    onClick={() => props.onDeleteSkill(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {/* Button to add a new skill */}
        {props.skills.length >= 6 ? null : (
          <Button
            className="add-new-btn"
            variant="text"
            onClick={props.onAddNewSkill}
          >
            Add new
          </Button>
        )}
        {/* Divider for visual separation */}
        <Divider className="key-skills-divider" />
        {/* BackNextButton component for navigation */}
        <BackNextButton
          onNext={handlePreview}
          loading={loading}
          tab={props.tab}
          onBack={handleBack}
          nextTitle={"Preview"}
          backTitle={"Back"}
        />
      </form>
    </Paper>
  );
}

// Connecting KeyskillsSection component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(KeyskillsSection);
