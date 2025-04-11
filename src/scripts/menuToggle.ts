export function setupMenuToggles() {
    const toggleButtons = document.querySelectorAll<HTMLButtonElement>(".toggle-button");
  
    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const menuId = button.id.replace("menu-toggle", "menu");
        const menu = document.getElementById(menuId);
        const isMenuOpen = menu?.style.display === "block";
        if (menu) menu.style.display = isMenuOpen ? "none" : "block";
      });
    });
  
    document.addEventListener("click", (event: MouseEvent) => {
      toggleButtons.forEach((button) => {
        const menuId = button.id.replace("menu-toggle", "menu");
        const menu = document.getElementById(menuId);
        const target = event.target as Node;
        if (
          menu &&
          !menu.contains(target) &&
          !button.contains(target)
        ) {
          menu.style.display = "none";
        }
      });
    });
  
    window.addEventListener("pagehide", () => {
      toggleButtons.forEach((button) => {
        const menuId = button.id.replace("menu-toggle", "menu");
        const menu = document.getElementById(menuId);
        if (menu) menu.style.display = "none";
      });
    });
  
    window.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        setupMenuToggles();
      }
    });
  }
  