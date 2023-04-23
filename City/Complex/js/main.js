document.addEventListener("DOMContentLoaded", function () {
  const popupLinks = document.querySelectorAll(".popup-link");
  const body = document.querySelector("body");

  if (popupLinks.length > 0) {
    for (const item of popupLinks) {
      item.addEventListener("click", function (e) {
        const popupName = item.dataset.href;
        const currentPopup = document.getElementById(popupName);

        popupOpen(currentPopup);
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll(".close-popup");

  if (popupCloseIcon.length > 0) {
    for (const item of popupCloseIcon) {
      item.addEventListener("click", function (e) {
        popupClose(item.closest(".popup"));
      });
    }
  }

  function popupOpen(currentPopup) {
    if (currentPopup) {
      const popupActive = document.querySelector(".popup.open");

      if (popupActive) {
        popupClose(popupActive);
      }

      currentPopup.classList.add("open");
      currentPopup.addEventListener("click", function (e) {
        if (!e.target.closest(".popup__body")) {
          popupClose(e.target.closest(".popup"));
        }
      });
    }
  }
  function popupClose(popupActive) {
    popupActive.classList.remove("open");
  }
});
