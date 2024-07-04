function emailValidation() {
  const form = document.getElementById('form');
  const email = form.email;
  const emailConfirm = form.email_confirm;
  const emailError = document.getElementById('email_error');

  function validateEmails() {
    if (email.value !== emailConfirm.value) {
      emailError.style.display = 'block';
      emailConfirm.classList.add('email_error_bg');
    } else {
      emailError.style.display = 'none';
      emailConfirm.classList.remove('email_error_bg');
      emailConfirm.style.backgroundColor = ''; // Reset background color
    }
  }

  emailConfirm.addEventListener('input', validateEmails);

  form.addEventListener('submit', e => {
    if (email.value !== emailConfirm.value) {
      e.preventDefault();
      validateEmails();
    }
  });

  // Reset the background color when emails match
  email.addEventListener('input', () => {
    if (email.value === emailConfirm.value) {
      emailConfirm.classList.remove('email_error_bg');
      emailConfirm.style.backgroundColor = ''; // Reset background color
    }
  });

  emailConfirm.addEventListener('input', () => {
    if (email.value === emailConfirm.value) {
      emailConfirm.classList.remove('email_error_bg');
      emailConfirm.style.backgroundColor = ''; // Reset background color
    }
  });
}

window.onload = emailValidation;