document.addEventListener("DOMContentLoaded", function () {
  const light_theme = document.getElementById("light");
    const dark_theme = document.getElementById("dark");
    
    const menuIcon = document.querySelector('.menu-icon');
  const navList = document.querySelector('.nav-list');

  menuIcon.addEventListener('click', function () {
    navList.classList.toggle('show');
  });
    
  const get_theme = document
    .getElementsByTagName("html")[0]
    .getAttribute("theme");

    const theme = document.getElementsByTagName("html")[0];
    console.log(theme)

  console.log(get_theme);

  light_theme.addEventListener("click", (e) => {
    e.preventDefault();

    light_theme.setAttribute("data-status", "active");
    theme.setAttribute("theme", "light");
    dark_theme.setAttribute("data-status", "inactive");
  });

  dark_theme.addEventListener("click", (e) => {
    e.preventDefault();

    dark_theme.setAttribute("data-status", "active");
    light_theme.setAttribute("data-status", "deactive");
    theme.setAttribute("theme", "dark");
  });
});
