import { ComponentRef, RefObject, useLayoutEffect } from "react";

function useSetHeaderHeight(headerRef: RefObject<ComponentRef<"div">>) {
  useLayoutEffect(() => {
    const header = headerRef.current; // Access the header element after render
    if (header) {
      const nav = header.querySelector("nav");
      if (nav) {
        // Set the CSS variable using the nav height
        document.documentElement.style.setProperty(
          "--nav-height",
          `${nav.offsetHeight}px`
        );
      } else {
        console.error("Navbar element not found!");
      }
    }
  }, []);
}
export { useSetHeaderHeight };
