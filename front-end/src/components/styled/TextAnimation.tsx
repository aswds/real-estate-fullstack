function TextAnimation(props) {
  if (typeof props.children !== "string") {
    throw new Error("Cannot animate a Node it has to be a string!");
  }
  return (
    <div className="fadeInUp">
      <p className={props.className ?? "hero-text"}>{props.children}</p>
    </div>
  );
}

export default TextAnimation;
