function showError(result = {}, toast) {
  if (Object.keys(result).includes("message")) {
    toast.error(result.message);
  } else if (Object.keys(result).includes("non_field_errors")) {
    toast.error(result.non_field_errors[0]);
  } else if (Object.keys(result).includes("field_error")) {
    toast.error(result.field_error[0]);
  } else {
    // Handle any other error fields dynamically
    const errorKeys = Object.keys(result);
    if (errorKeys.length > 0) {
      const firstErrorKey = errorKeys[0];
      const errorValue = result[firstErrorKey];
      
      // Handle both string and array error values
      if (Array.isArray(errorValue)) {
        toast.error(errorValue[0]);
      } else {
        toast.error(errorValue);
      }
    } else {
      toast.error("An error occurred. Please try again.");
    }
  }
}



export { showError };
