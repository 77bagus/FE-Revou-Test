function periksaOtentikasi() {
    const jwtCookie = getCookie("jwt");
      if (jwtCookie) {
      return true;
    } else {
      return false;
    }
  }
  
  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null; 
  }
  