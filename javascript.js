
function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}
function formValidation() {
  let pipelineName = document.getElementById("pipelineName");
  if (pipelineName.value.length < 5 && pipelineName.value.length != 0) {
    pipelineName.setCustomValidity("Minimum Length should be 5.");
  } else {
      if(containsSpecialChars(pipelineName.value)){
          pipelineName.setCustomValidity("String should not contain special characters.");
      }
  }
  let projectName = document.getElementById("projectName");
  if (projectName.value.length < 5 && projectName.value.length != 0) {
    projectName.setCustomValidity("Minimum Length should be 5.");
  } else {
      if(containsSpecialChars(projectName.value)){
          projectName.setCustomValidity("String should not contain special characters.");
      }
  }
  let bucketName = document.getElementById("bucketName");
  if (bucketName.value.length < 5 && bucketName.value.length != 0) {
    bucketName.setCustomValidity("Minimum Length should be 5.");
  } else {
      if(containsSpecialChars(bucketName.value)){
          bucketName.setCustomValidity("String should not contain special characters.");
      }
  }
  let fileLocation = document.getElementById("fileLocation");
  if (fileLocation.value.length < 5 && fileLocation.value.length != 0) {
    fileLocation.setCustomValidity("Minimum Length should be 5.");
  } else {
      if(containsSpecialChars(fileLocation.value)){
          fileLocation.setCustomValidity("String should not contain special characters.");
      }
  }
  let credentials = document.getElementById("credentials");
  if (credentials.value.length < 5 && credentials.value.length != 0) {
    credentials.setCustomValidity("Minimum Length should be 5.");
  } else {
      if(containsSpecialChars(credentials.value)){
          credentials.setCustomValidity("String should not contain special characters.");
      }
  }
  let runTime = document.getElementById("runTime");
      if(containsSpecialChars(runTime.value)){
          runTime .setCustomValidity("String should not contain special characters.");
      }
  }
