//import { styles } from "../scss/app.module.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "../components/Hello";
import { Login } from "../components/Login";
import "../scss/app.module";

ReactDOM.render(
  <React.Fragment>
    <Hello compiler="Typescript" framework="React" bundler="Webpack" />
    <Login />
  </React.Fragment>,
  document.getElementById("root")
);
