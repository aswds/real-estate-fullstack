import { useSetHeaderHeight } from "@/hooks/useSetHeaderHeight";
import { NavbarLinks } from "@/links";
import { ComponentRef, useLayoutEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const headerRef = useRef<ComponentRef<"div">>(null); // Create a ref to store the header element

  useSetHeaderHeight(headerRef);
  async function handleMobileMenu() {
    setShowMobileMenu((showMenu) => !showMenu);

    const body = document.querySelector("body");
    if (!showMobileMenu) {
      body?.classList.add("is-menu-open");
    } else {
      body?.classList.remove("is-menu-open");
    }
  }
  useLayoutEffect(() => {}, []);
  return (
    <header className={`navbar-container`} ref={headerRef}>
      <nav className={`navbar ${showMobileMenu ? "is-menu-open" : ""} `}>
        <a href="/">
          <h1 className={`text-5xl `}>PP</h1>
        </a>
        <div className="linksContainer">
          {NavbarLinks.map((link) => (
            <Link key={link.title} className="link" to={""}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className={`menu`} onClick={handleMobileMenu}>
          <IoMdMenu size={30} />
        </div>
        <div className={`mobile-nav  ${showMobileMenu ? "active" : ""} `}>
          <div className="flex-center justify-between p-10 ">
            <h1 className="text-6xl ">PP</h1>
            <MdClose size={60} onClick={handleMobileMenu} />
          </div>
          <div className="container">
            {NavbarLinks.map((link) => (
              <Link
                key={link.title}
                className=""
                onClick={handleMobileMenu}
                to={link.path}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
