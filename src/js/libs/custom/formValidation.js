export function formValidation (object) {
  let isFull = true;
  Object.values(object).map((value) => {
    isFull &= value !== '';
  });
  const emailValidation = object.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

  if (!isFull) {
    document.getElementById('emptyFields').style.display = "block";
    return false;
  } else if (!emailValidation) {
    document.getElementById('emailError').style.display = "block";
    document.getElementById('emptyFields').style.display = "none";
    return false;
  } else {
    document.getElementById('emailError').style.display = "none";
    return true;
  }
};
