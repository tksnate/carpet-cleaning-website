export const validateContactForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  const reg = /^\d+$/;
  if (!reg.test(values.phoneNum)) {
    errors.phoneNum = "The phone number should only contain numbers.";
  }

  if (!values.email) {
    errors.email = "Required";
  }

  if (!values.email.includes("@")) {
    errors.email = "The email address is not valid.";
  }

  if (!values.quote) {
    errors.email = "Required";
  }

  if (!values.where) {
    errors.where = "Required";
  }

  return errors;
};
