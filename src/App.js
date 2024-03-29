// Import necessary modules from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components and pages
import Home from "./Pages/Home";
import DetailsFilling from "./Pages/DetailsFilling";
import CheckSelectedId from "./Components/CheckSelectedId";
import AboutUs from "./Pages/AboutUs";
import MyResumes from "./Pages/MyResumes";

// Define the main App component
const App = () => {
  // Render JSX
  return (
    <Router>
      {/* Define routes */}
      <Routes>
        {/* Route for the home page */}
        <Route exact path="/" element={<Home />} />

        {/* Route for filling details with CheckSelectedId component */}
        <Route
          exact
          path="/template/fill-details"
          element={
            <CheckSelectedId>
              <DetailsFilling />
            </CheckSelectedId>
          }
        />

        {/* Route for My Resumes page */}
        <Route exact path="/my/resumes" element={<MyResumes />} />

        {/* Route for the About Us page */}
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

// Export the App component
export default App;
