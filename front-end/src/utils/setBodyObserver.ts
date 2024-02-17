export function setBodyObserver() {
  const config: MutationObserverInit = {
    attributes: true,
    attributeFilter: ["class"],
    childList: false,
    characterData: false,
    subtree: false,
    attributeOldValue: false,
    characterDataOldValue: false,
  };
  const body = document.querySelector("body");

  const observer = new MutationObserver(observerCallback);
  observer.observe(body, config);
}
const observerCallback = async (mutationList: MutationRecord[], observer) => {
  if (mutationList[0].attributeName === "class") {
    if (mutationList[0].target?.classList.contains("scroll-down")) {
      changeNavClassList("hide");
    } else if (mutationList[0].target?.classList.contains("scroll-up")) {
      changeNavClassList("show");
    }
  }
};

const visibleNavbar = "visible-navbar";
const hiddenNavbar = "hidden-navbar";
function changeNavClassList(className: "show" | "hide") {
  const header = document.querySelector("header");
  if (className === "show") {
    header?.classList.add(visibleNavbar);
    header?.classList.remove(hiddenNavbar);
  } else {
    header?.classList.add(hiddenNavbar);
    header?.classList.remove(visibleNavbar);
  }
}
