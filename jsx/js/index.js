import React from "react";
import { render } from "react-dom";
import App from "../index.jsx";
render( <App {...window.param}/>, document.getElementById( "root" ) );