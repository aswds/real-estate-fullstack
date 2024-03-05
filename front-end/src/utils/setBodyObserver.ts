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
  if (body) observer.observe(body, config);
}
const observerCallback: MutationCallback = async (mutationList) => {
  if (
    mutationList[0].attributeName === "class" &&
    mutationList[0].target instanceof HTMLElement
  ) {
    const targetClassList = mutationList[0].target?.classList;
    const is_scroll_up = targetClassList.contains("scroll-up");
    const is_scroll_down = targetClassList.contains("scroll-down");

    if (is_scroll_down) {
      changeNavClassList("hide");
    } else if (is_scroll_up) {
      changeNavClassList("show");
    } else if (targetClassList.length === 0) {
      changeNavClassList("hide-background");
    }
  }
};

const visibleNavbar = "visible-navbar";
const hiddenNavbar = "hidden-navbar";
const hiddenNavbarBackground = "hidden-navbar-background";
function changeNavClassList(className: "show" | "hide" | "hide-background") {
  const header = document.querySelector("header");
  if (className === "show") {
    header?.classList.add(visibleNavbar);
    header?.classList.remove(hiddenNavbar, hiddenNavbarBackground);
  } else if (className === "hide") {
    header?.classList.add(hiddenNavbar);

    header?.classList.remove(visibleNavbar, hiddenNavbarBackground);
  } else {
    header?.classList.remove(hiddenNavbar);
    header?.classList.add(hiddenNavbarBackground);
  }
}
