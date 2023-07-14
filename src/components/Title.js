import "./Title.css";
const Title = (props) => {
  return (
    <div className="title-component">
      <h1 className="title">{props.title}</h1>
      <h2 className="subtitle">{props.subtitle}</h2>
    </div>
  );
};

export default Title;
