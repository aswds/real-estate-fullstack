window.onload = dataScrollInHandle;
export function dataScrollInHandle() {
  const queriedElements = document.querySelectorAll('[data-scroll="out"]');
  queriedElements.forEach((elementsDataScroll) => {
    if (elementsDataScroll) {
      const observer = new IntersectionObserver(
        (entries) => {
          observerCallback(entries);
        },
        { threshold: 0.5 }
      );
      observer.observe(elementsDataScroll);
    }
  });
}

const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("data-scroll", "in");
    }
  });
};
