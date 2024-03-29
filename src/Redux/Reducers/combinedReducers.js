// Importing individual reducers
import {
  selectedTemplateReducer,
  personalInfoReducer,
  workExperienceReducer,
  keySkillsReducer,
  educationDetailsReducer,
} from "./reducers";

// Importing combineReducers function from Redux
import { combineReducers } from "redux";

// Combining individual reducers into a root reducer using combineReducers
const rootReducer = combineReducers({
  // Each key in the object represents a slice of state managed by the corresponding reducer
  selectedTemplateReducer, // Reducer for selected template
  personalInfoReducer, // Reducer for personal information
  workExperienceReducer, // Reducer for work experience
  keySkillsReducer, // Reducer for key skills
  educationDetailsReducer, // Reducer for education details
});

// Exporting the root reducer
export default rootReducer;
