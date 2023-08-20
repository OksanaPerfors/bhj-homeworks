const tabs = document.querySelectorAll(".tab");

const contents = document.querySelectorAll(".tab__content");
//const content = pageContent.textContent;
//console.log(navigation);

function tabChange() {
  pageContent.forEach((text) => {
    text.classList.add("tab__content_active");
  });
}

function resetTabsContent() {
  contents.forEach((content) => {
    content.classList.remove("tab__content_active");
  });
}

function resetTabs() {
  tabs.forEach((tab) => {
    tab.classList.remove("tab_active");
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    resetTabs();
    tab.classList.add("tab_active");
    resetTabsContent();
    contents[index].classList.add("tab__content_active");
  });
});
