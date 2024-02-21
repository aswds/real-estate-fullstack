import contactUsVideo from "@assets/houses/video/contactUs.mp4";
import Button from "@components/styled/Button";
import SectionText from "@components/styled/Section/SectionText";
import SectionTitle from "@components/styled/Section/SectionTitle";

function ContactUs() {
  return (
    <div className=" relative" data-scroll="out">
      <div className="absolute h-full w-full -z-10 ">
        <video src={contactUsVideo} autoPlay loop className="size-full" />
      </div>

      <div className="py-20 px-10">
        <div className="py-10">
          <SectionTitle>CONNECT WITH US</SectionTitle>
          <SectionText>
            We are dedicated to providing unparalleled service and ensuring your
            experience with us is seamless.{" "}
          </SectionText>
        </div>

        <Button text="Contact Us" className="no-icon" />
      </div>
    </div>
  );
}

export default ContactUs;
