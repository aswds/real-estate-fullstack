import Button from "@components/styled/Button";
import Container from "@components/styled/Container";
import { Header } from "@components/styled/Header";
import SectionTitle from "@components/styled/Section/SectionTitle";
import SectionText from "@components/styled/Section/SectionText";
import Text from "@components/styled/Text";

function AboutUs() {
  return (
    <div
      className="flex flex-col  page gap-10 justify-around items-start  bg-white text-black"
      data-scroll="out"
    >
      <SectionTitle>WHO WE ARE?</SectionTitle>

      <SectionText>
        We are PRESTIGE PALACES, a premier real estate company dedicated to
        crafting luxurious and innovative living spaces that redefine the art of
        modern living.
      </SectionText>

      <Button text="About Us" href="" />
    </div>
  );
}

export default AboutUs;
