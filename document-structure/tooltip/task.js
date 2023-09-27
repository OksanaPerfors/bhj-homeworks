const texts = document.querySelectorAll(".has-tooltip");
function createTooltip(title) {
  const div = document.createElement("div");
  div.classList.add("tooltip", "tooltip_active");
  div.style.position = "absolute";
  div.style.left = "0px";
  div.style.top = "100%";
  div.textContent = title;
  return div;
}
texts.forEach((text) => {
  let isTooltipExist = false;
  text.addEventListener("click", (e) => {
    e.preventDefault();
    if (!isTooltipExist) {
      const title = text.attributes.title.value; // текст всплывающей подсказки
      text.style.position = "relative";
      const tooltip = createTooltip(title);
      text.appendChild(tooltip);
      const textY = text.getBoundingClientRect().y;
      const textHeight = text.getBoundingClientRect().height;
      const tooltipHeight = text.getBoundingClientRect().height;
      const heightWindow = window.innerHeight;
      console.log(textY, tooltipHeight, heightWindow);
      if (textY + tooltipHeight + textHeight > heightWindow) {
        tooltip.style.top = "auto";
        tooltip.style.bottom = "100%";
      }
    } else {
      text.removeChild(text.lastChild);
    }
    isTooltipExist = !isTooltipExist;
  });
});
