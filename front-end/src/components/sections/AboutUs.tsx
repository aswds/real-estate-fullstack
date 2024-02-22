import Button from "@components/styled/Button";
import SectionText from "@components/styled/Section/SectionText";
import SectionTitle from "@components/styled/Section/SectionTitle";

function AboutUs() {
  return (
    <div
      className="flex flex-col  page  justify-around items-start  bg-white text-black"
      data-scroll="out"
    >
      <SectionTitle>WHO WE ARE?</SectionTitle>

      <SectionText>
        We are PRESTIGE PALACES, a premier real estate company dedicated to
        crafting luxurious and innovative living spaces that redefine the art of
        modern living.
      </SectionText>

      <Button text="About Us" href="" className="mt-10" />
    </div>
  );
}

export default AboutUs;
