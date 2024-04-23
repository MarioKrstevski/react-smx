function processData(data) {
  const { age, gender, color, firstname, lastname, birthdate } = data;

  // Validation conditions
  const isFirstNameValid = firstname.length >= 5;
  const isLastNameValid = lastname.length >= 3;
  const isAgeValid = parseInt(age) >= 18;
  const isBirthdateValid = calculateAge(birthdate) >= 18;
  const isGenderValid =
    gender.toLowerCase() === "male" ||
    gender.toLowerCase() === "female";

  // Check if all conditions are met
  if (
    isFirstNameValid &&
    isLastNameValid &&
    isAgeValid &&
    isBirthdateValid &&
    isGenderValid
  ) {
    return {
      success: true,
      error: false,
      message: "Success! Form submitted successfully.",
    };
  } else {
    return {
      success: false,
      error: true,
      message: "Fail! Please check your form input and try again.",
    };
  }
}

// Function to calculate age based on birthdate
function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}
