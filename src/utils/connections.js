function getConnection() {
  // Access environment variables with process.env
  const env = process.env.REACT_APP_ENVIRONMENT;
  console.log("Environment is ", env);
  if (env==="local"){
    return {
      backendUrl: "http://localhost:8000",
      frontendUrl: "http://localhost:3000"
    };
  }  
 
}

export default getConnection;
