import { formValidation } from "./formValidation";

export function sendFormInit() {
  return {
    sendForm() {
      const formBody = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      }
      const isValid = formValidation(formBody);
      if (!isValid) {
        return;
      };
      Email.send({
        SecureToken : "df9c61cc-ff64-4683-9f6c-fdc1d3e8b2dd",
        To : "annarybalko34@gmail.com",
        From : "hanna.syniavska@qpard.com",
        Subject : "New mail from 'GEMMA' landing",
        Body : formBody
      }).then(
        () => {
          document.getElementById('formSuccess').style.display = "block";
          document.getElementById('form').style.display = "none";
        }
      );
    }
  };
}
