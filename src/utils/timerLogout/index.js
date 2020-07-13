const TOKEN_KEY = 'jwt';
var seg;

const timerLogout = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
      document.addEventListener("mousemove", function () {
        seg = 0;
      });

      setInterval(function () {
          seg = seg + 1;
          if (seg === 14400) {
            localStorage.removeItem(TOKEN_KEY);
            window.location.href = "/";
          }
      }, 1000);
  }
}

export default timerLogout;