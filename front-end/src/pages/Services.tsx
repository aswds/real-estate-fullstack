import ContactUs from "@components/sections/ContactUs";
import SectionTitle from "@components/styled/Section/SectionTitle";
import Service from "@components/styled/Services/Service";

function Services() {
  const services: { title: string; description: string }[] = [
    {
      title: "OUR EXPERTISE",
      description:
        "OUR TEAM BRINGS EXPERT UNDERSTANDING OF LUXURY PROPERTY MARKET NUANCES, WHETHER IT'S A HISTORIC CASTLE, A MANSION, OR A SECLUDED ESTATE.",
    },
    {
      title: "BUILD",
      description:
        "FROM CREATING BESPOKE DESIGNS TO EXECUTING EXCEPTIONAL BUILD PROJECTS, WE TRANSFORM VISIONS INTO PALATIAL REALITIES.",
    },
    {
      title: "RENT",
      description:
        "HANDPICKED FOR ARCHITECTURAL GRANDEUR, CRAFTSMANSHIP, AND BREATHTAKING SURROUNDINGS, OUR HOMES OFFER A LIFESTYLE OF UNPARALLELED SOPHISTICATION.",
    },
    {
      title: "LEASE",
      description:
        "AT PRESTIGE PALACES, WE OFFER HASSLE-FREE LEASE SERVICES TAILORED FOR PROPERTY OWNERS AND TENANTS",
    },
  ];
  return (
    <>
      <section className="page">
        <div className="space-y-10">
          <h1>WHAT WE DO</h1>
        </div>

        <p className="page-subtitle mt-24 max-w-[75%]">
          Welcome to Prestige Palaces, where opulence meets sophistication. As
          specialists in prestige palaces, we redefine luxury living by curating
          an exclusive portfolio of the most exquisite residences.
        </p>
      </section>
      <section className="page bg-white ">
        <SectionTitle>Services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-36">
          {services.map((service) => (
            <Service {...service} />
          ))}
        </div>
      </section>
      <section>
        <ContactUs />
      </section>
    </>
  );
}

export default Services;
