import Button from "@components/styled/Button";

function ContactUs() {
  return (
    <div className=" relative" data-scroll="out">
      <div className="py-20 px-10">
        <div className="py-10 max-w-[80%]">
          <h1>
            We are dedicated to providing unparalleled service and ensuring your
            experience with us is seamless.{" "}
          </h1>
        </div>

        <Button text="Contact Us" className="no-icon" href={"/contact"} />
      </div>
    </div>
  );
}

export default ContactUs;
