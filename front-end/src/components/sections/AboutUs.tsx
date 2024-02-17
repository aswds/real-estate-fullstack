import Button from "@components/styled/Button";
import Container from "@components/styled/Container";
import { Header } from "@components/styled/Header";
import SectionTitle from "@components/styled/Section/SectionTitle";
import SectionText from "@components/styled/Section/SectionText";
import Text from "@components/styled/Text";

function AboutUs() {
  return (
    <Container
      display="flex"
      className=" flex-col gap-10 page"
      justifyContent="space-around"
      alignItems="flex-start"
      data-scroll="out"
    >
      <div className="flex flex-col">
        <SectionTitle>WHO WE ARE?</SectionTitle>

        <SectionText>
          We are PRESTIGE PALACES, a premier real estate company dedicated to
          crafting luxurious and innovative living spaces that redefine the art
          of modern living.
        </SectionText>
      </div>

      <Button text="About Us" href="" />
    </Container>
  );
}

export default AboutUs;
