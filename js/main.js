document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu__link");

  for (const i of menuItems) {
    i.addEventListener("click", function (e) {
      e.preventDefault();

      elemScroll = document.getElementById(e.target.dataset.link)

      elemScroll.scrollIntoView()
    });
  }

  const linkCity = document.querySelectorAll('.country')

  for (const i of linkCity) {
    i.addEventListener('click', function(){
      window.location.replace('../City/index.html')
    })
  }

  const linkComplex = document.querySelectorAll('.city')

  for (const i of linkComplex) {
    i.addEventListener('click', function(){
      window.location.replace('../City/Complex/index.html')
    })
  }
});
