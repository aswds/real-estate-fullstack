import SectionTitle from "@components/styled/Section/SectionTitle";

function Contact() {
  return (
    <div>
      <section className="bg-white text-black space-y-5 flex flex-col justify-end page">
        <h2>CONTACT</h2>
        <p className="max-w-none md:max-w-[60%] font-normal">
          Get in Touch We'd love to hear from you! Whether you have a question,
          a comment, or just want to chat, please don't hesitate to reach out
          using one of the methods below
        </p>
      </section>
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 page justify-between">
        <div>
          <SectionTitle>FIND US AT</SectionTitle>
          <ul className="text-2xl space-y-3">
            <li>123 Luxe Lane</li>
            <li>Eminent Estates District Metropolis City, PC 54321</li>
            <li>Opulence Country</li>
          </ul>
        </div>
        <div>
          <SectionTitle>EMAIL US</SectionTitle>
          <a href="mailto:sashailnitskiyy@gmail.com">
            <p>sashailnitskiyy@gmail.com</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
