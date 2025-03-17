// import "./style.css";
// import App from "../dist/App.js";
import App from "./App.jsx";

// window.createElement = createElement;
const appElement = App();

console.log(JSON.stringify(appElement, null, 2));
