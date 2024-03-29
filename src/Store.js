// Import the createStore function from Redux to create the Redux store
import { createStore } from "redux";

// Import the combinedReducers which combines all the reducers into one
import rootReducer from "./Redux/Reducers/combinedReducers";

// Create the Redux store using the createStore function
// The rootReducer specifies how the application's state should be updated in response to actions dispatched to the store
export const Store = createStore(rootReducer);
