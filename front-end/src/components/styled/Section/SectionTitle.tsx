function SectionTitle(props) {
  return (
    <h2 className="text-xl md:text-3xl mb-4 " {...props}>
      {props.children}
    </h2>
  );
}

export default SectionTitle;
