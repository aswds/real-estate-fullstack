function Footer() {
  return (
    <footer className="flex  flex-col justify-around gap-10 mx-14 my-10">
      <div className="w-full ">
        <h1>PP</h1>
      </div>
      <div className="flex flex-row flex-wrap gap-10">
        <a className="text-2xl text-nowrap animataion-link-left-to-right">
          Privacy Policy
        </a>
        <a className="text-2xl text-nowrap animataion-link-left-to-right">
          Contact Us{" "}
        </a>
        <a className="text-2xl text-nowrap animataion-link-left-to-right">
          About Us
        </a>
      </div>
      <div>@2024 Prestige Palaces. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
