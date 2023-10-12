document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const baseUrl = 'localhost:12345';

    loginButton.addEventListener('click', function () {
      // Ambil nilai dari input
      const email = emailInput.value;
      const kata_sandi = passwordInput.value;
  
      // Lakukan permintaan AJAX ke server
      fetch('($baseUrl)/user/login', {
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
  