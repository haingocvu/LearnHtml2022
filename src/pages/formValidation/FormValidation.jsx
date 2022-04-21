import React, { useEffect } from 'react';

function FormValidation() {
  useEffect(() => {
    const form = document.getElementsByTagName('form')?.[0];
    const email = document.getElementById('mail');
    const emailError = document.querySelector('#mail + span.error');
    function showMessage() {
      if (email.validity.valueMissing) {
        emailError.textContent = 'you need to enter an email address.';
      } else if (email.validity.typeMismatch) {
        emailError.textContent = 'entered email needs to be an email address!';
      } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength}. you entered ${email.value.length}`;
      }
      emailError.className = 'error active';
    }
    email.addEventListener('input', () => {
      if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
      } else {
        showMessage();
      }
    });
    form.addEventListener('submit', (event) => {
      if (!email.validity.valid) {
        showMessage();
        event.preventDefault();
      }
    });
  }, []);
  return (
    <div>
      <form noValidate>
        <p>
          <label htmlFor="mail">
            <span>Please enter an email address:</span>
            <input type="email" id="mail" name="mail" required minLength="8" />
            <span className="error" aria-live="polite"></span>
          </label>
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
