import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React element </span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX
  </h1>
);
// React Functionqal Component
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title></Title>
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
