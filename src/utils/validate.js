export const checkValidateData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /^[a-zA-Z\\s]*$/.test(name);

  if (!isEmailValid)
    return "Please enter a valid email address or phone number.";
  if (!isPasswordValid) return "Please check your password.";
  if (!isNameValid) return "Please make sure you use your correct name.";

  return null;
};
