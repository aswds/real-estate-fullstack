import Container from "@components/styled/Container";
import SectionTitle from "@components/styled/Section/SectionTitle";
import Services from "@components/styled/Services";
function ServiceOffers() {
  return (
    <Container
      display="flex"
      alignItems="flex-start"
      className="flex-col w-full relative  mt-10 "
      margin="36"
    >
      <div className="flex-col gap-10" data-scroll="out">
        <SectionTitle>WHAT SERVICES PP OFERS?</SectionTitle>
        <h3 className="max-w-[80%]">
          Our comprehensive range of real estate services is designed to meet
          the diverse needs of our clients. From property acquisition and sales
          to leasing and investment consultation, our dedicated team ensures a
          seamless experience throughout the entire real estate journey.
        </h3>
      </div>

      <Services />
    </Container>
  );
}

export default ServiceOffers;
