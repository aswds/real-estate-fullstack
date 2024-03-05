function TextAnimation(props: {
  className?: string;
  children: React.ReactNode;
}) {
  if (typeof props.children !== "string") {
    throw new Error("Cannot animate a Node it has to be a string!");
  }
  return (
    <div className="fadeInUp">
      <h1 className={props.className ?? "hero-text"}>{props.children}</h1>
    </div>
  );
}

export default TextAnimation;
