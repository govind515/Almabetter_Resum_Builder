// Initial state for selected template reducer
const initialSelectedTemplateState = {
  selectedTemplateId: null, // Initially no template is selected
  selectedResumeId: null, // Initially no resume is selected
};

// Initial state for personal info reducer
const initialPersonalInfoState = {
  personalInfo: {
    profileImg: "", // Initially empty profile image URL
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    objective: "",
  },
};

// Initial state for work experience reducer
const initialWorkExperienceState = {
  experiences: [
    {
      id: 1, // Initially only one empty experience entry
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    },
  ],
};

// Initial state for education details reducer
const initialEducationState = {
  educationInfo: {
    domain: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
};

// Initial state for skills reducer
const initialSkillsState = {
  skills: ["", "", ""], // Initially three empty skills
};

// Reducer function for selected template
export const selectedTemplateReducer = (
  state = initialSelectedTemplateState,
  action
) => {
  switch (action.type) {
    case "SELECTTEMPLATE":
      return { ...state, selectedTemplateId: action.payload };
    case "SELECTRESUME":
      return { ...state, selectedResumeId: action.payload };
    default:
      return state;
  }
};

// Reducer function for personal info
export const personalInfoReducer = (
  state = initialPersonalInfoState,
  action
) => {
  switch (action.type) {
    case "ADDPERSONALINFO":
      return {
        ...state,
        personalInfo: { ...state.personalInfo, ...action.payload },
      };
    default:
      return state;
  }
};

// Reducer function for work experience
export const workExperienceReducer = (
  state = initialWorkExperienceState,
  action
) => {
  switch (action.type) {
    case "ADDEXPERIENCE":
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    case "ADDALLEXPERIENCE":
      return {
        ...state,
        experiences: action.payload,
      };
    default:
      return state;
  }
};

// Reducer function for skills
export const keySkillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case "ADDNEWSKILLS":
      return { ...state, skills: [...state.skills, ""] };
    case "EDITSKILL":
      return {
        ...state,
        skills: action.payload,
      };
    case "DELETESKILL":
      const newSkills = state.skills.filter(
        (skill, id) => id !== action.payload
      );
      return { ...state, skills: newSkills };
    default:
      return state;
  }
};

// Reducer function for education details
export const educationDetailsReducer = (
  state = initialEducationState,
  action
) => {
  switch (action.type) {
    case "ADDEDUCATION":
      return { ...state, educationInfo: action.payload };
    default:
      return state;
  }
};
