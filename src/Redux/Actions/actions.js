// Action creator for selecting a template
export const selectTemplate = (id) => ({
  type: "SELECTTEMPLATE", // Action type
  payload: id, // Data associated with the action
});

// Action creator for selecting a resume
export const selectResume = (id) => ({
  type: "SELECTRESUME", // Action type
  payload: id, // Data associated with the action
});

// Action creator for adding personal information
export const addPersonalInfo = (details) => ({
  type: "ADDPERSONALINFO", // Action type
  payload: details, // Data associated with the action
});

// Action creator for adding a single experience
export const addExperience = (experience) => ({
  type: "ADDEXPERIENCE", // Action type
  payload: experience, // Data associated with the action
});

// Action creator for adding multiple experiences
export const addAllExperience = (experiences) => ({
  type: "ADDALLEXPERIENCE", // Action type
  payload: experiences, // Data associated with the action
});

// Action creator for adding new skills
export const addNewSkills = () => ({
  type: "ADDNEWSKILLS", // Action type
  payload: null, // No specific payload associated
});

// Action creator for editing skills
export const editSkill = (skills) => ({
  type: "EDITSKILL", // Action type
  payload: skills, // Data associated with the action
});

// Action creator for deleting a skill
export const deleteSkill = (id) => ({
  type: "DELETESKILL", // Action type
  payload: id, // Data associated with the action
});

// Action creator for adding education details
export const addEducation = (details) => ({
  type: "ADDEDUCATION", // Action type
  payload: details, // Data associated with the action
});
