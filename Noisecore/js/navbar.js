document.addEventListener("DOMContentLoaded", function () {
  const openDrawer = document.getElementById("openDrawer");
  const closeDrawer = document.getElementById("closeDrawer");
  const drawerMenu = document.getElementById("drawerMenu");

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function updateDrawerUI() {
    if (isMobile()) {
      openDrawer.style.display = drawerMenu.classList.contains("open") ? "none" : "block";
    } else {
      openDrawer.style.display = "none";
      drawerMenu.classList.remove("open");
    }
  }

  openDrawer.addEventListener("click", function () {
    drawerMenu.classList.add("open");
    updateDrawerUI();
  });

  closeDrawer.addEventListener("click", function () {
    drawerMenu.classList.remove("open");
    updateDrawerUI();
  });

  window.addEventListener("resize", updateDrawerUI);
  updateDrawerUI(); 
});