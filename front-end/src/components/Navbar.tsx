import { useSetHeaderHeight } from "@/hooks/useSetHeaderHeight";
import { NavbarLinks } from "@/links";
import { setBodyObserver } from "@/utils/setBodyObserver";
import {
  ComponentRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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
        <h1
          className={`text-5xl ${
            showMobileMenu ? " text-black z-10" : "text-white"
          } `}
        >
          PP
        </h1>
        <div className="linksContainer">
          {NavbarLinks.map((link) => (
            <Link key={link.title} className="link">
              {link.title}
            </Link>
          ))}
        </div>

        <div className="authLinks">
          <Link className="link">Sign Up</Link>
          <Link className="link">Sign In</Link>
        </div>
        <div
          className={`menu ${
            showMobileMenu ? " text-black z-10" : "text-white"
          } `}
          onClick={openMobileMenu}
        >
          {showMobileMenu ? <MdClose size={50} /> : <IoMdMenu size={30} />}
        </div>
        <div className={`mobile-nav  ${showMobileMenu ? "active" : ""} `}>
          <div className="overflow-auto sm:mt-32 mt-24 mb-5 sm:mb-0 menu-wrapper">
            back to nidgereraf fds fd<div>fdsf</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
