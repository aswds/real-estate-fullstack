function SectionTitle(props: React.HTMLAttributes<HTMLHeadElement>) {
  return (
    <h2 className="text-2xl md:text-3xl mb-4 " {...props}>
      {props.children}
    </h2>
  );
}

export default SectionTitle;
