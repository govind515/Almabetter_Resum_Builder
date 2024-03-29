// Define a function named inputChecks with parameters type and name
export const inputChecks = (type, name) => {
  // Check if the input type is "text"
  if (type === "text") {
    // If input type is "text", return an object with required field
    return { required: "*Please fill this field" };
  }
  // Check if the input type is "email"
  else if (type === "email") {
    // If input type is "email", return an object with required field and email pattern validation
    return {
      required: "*Please fill this field",
      pattern:
        /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
    };
  }
  // Check if the input type is "number"
  else if (type === "number") {
    // Based on the name of the input, return different validation rules
    switch (name) {
      // If name is "mobile", return validation rules for mobile number
      case "mobile":
        return {
          required: "*Please fill this field",
          minLength: { value: 10, message: "*Invalid mobile number " },
          maxLength: { value: 12, message: "*Invalid mobile number" },
        };
      // If name is "postalCode", return validation rules for postal code
      case "postalCode":
        return {
          required: "*Please fill this field",
          minLength: { value: 6, message: "*Invalid postal code" },
          maxLength: { value: 6, message: "*Invalid postal code" },
        };
      // For any other case, return default validation rule
      default:
        return { required: "*Please fill this field" };
    }
  }
};
