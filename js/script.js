// const, let dan var untuk mendeklarasi Variabel
// document.querySelectorAll untuk memilih selector CSS pada dokumen HTML
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('form login');
  const loginButton = document.getElementById('login');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  loginButton.addEventListener('click', function () {
    const email = emailInput.value;
    const kata_sandi = passwordInput.value;
    const endpointUrl = baseUrl + '/profil/login';
    // Lakukan permintaan AJAX ke server
    fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, kata_sandi }),
    })
      .then((response) => response.json())
      .then((data) => {

        console.log(data);
      })
      .catch((error) => {
        console.error('Gagal melakukan permintaan:', error);
      });
  });
});

const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

// foreach untuk pengulangan, jadi bisa di klik ulang ulang
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      // jika eye icon diklik akan terlihat password
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      // jika eye icon tidak diklik maka password tidak terlihat
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});

// ketika klik link sign up langsung muncul tampilan signup
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.toggle("show-signup");
  });
});
