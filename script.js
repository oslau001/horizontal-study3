function resizeTextPanels() {
  const textPanels = document.querySelectorAll(".text-panel");

  const styles = getComputedStyle(document.documentElement);
  const columnWidth = parseFloat(styles.getPropertyValue("--column-width"));
  const columnGap = parseFloat(styles.getPropertyValue("--column-gap"));

  textPanels.forEach((textPanel) => {
    const essay = textPanel.querySelector(".essay");
    if (!essay) return;

    if (window.innerWidth <= 768) {
      textPanel.style.width = "";
      return;
    }

    let width = columnWidth;
    textPanel.style.width = width + "px";

    while (essay.scrollWidth > essay.clientWidth && width < 20000) {
      width += columnWidth + columnGap;
      textPanel.style.width = width + "px";
    }
  });
}

window.addEventListener("load", resizeTextPanels);
window.addEventListener("resize", resizeTextPanels);