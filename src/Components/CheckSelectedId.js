// Importing necessary modules from React and React Router
import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

// Mapping state to props to access selectedTemplateId from Redux store
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

// No dispatch actions are needed, so defining an empty mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {};
};

// Defining a functional component named CheckSelectedId
const CheckSelectedId = (props) => {
  // Destructuring selectedTemplateId from props
  const { selectedTemplateId } = props;

  // Rendering children components if selectedId is truthy, else navigating to "/"
  return selectedTemplateId ? props.children : <Navigate to={"/"} />;
};

// Connecting the CheckSelectedId component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(CheckSelectedId);
