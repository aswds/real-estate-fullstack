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
  async function openMobileMenu() {
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
      <nav className={`navbar ${showMobileMenu ? " is-menu-open" : ""} `}>
        <h1 className={`text-5xl `}>PP</h1>
        <div className="linksContainer">
          {NavbarLinks.map((link) => (
            <Link key={link.title} className="link" to={""}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className="authLinks">
          <Link className="link" to={""}>
            Sign Up
          </Link>
          <Link className="link" to={""}>
            Sign In
          </Link>
        </div>
        <div className={`menu`} onClick={openMobileMenu}>
          <IoMdMenu size={30} />
        </div>
        <div className={`mobile-nav  ${showMobileMenu ? "active" : ""} `}>
          <div className="flex-center justify-between p-10 ">
            <h1 className="text-6xl ">PP</h1>
            <MdClose size={60} onClick={openMobileMenu} />
          </div>
          <div className="container">
            <Link className="" to={""}>
              Sign Up
            </Link>
            <Link className="" to={""}>
              Sign In
            </Link>
            {NavbarLinks.map((link) => (
              <Link key={link.title} className="" to={link.path}>
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
