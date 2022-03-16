import * as React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import "./index.css";
import "./App.css";
import InputForm from "../src/components/InputForm.js";

ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <InputForm />
    </StyledEngineProvider>,
    document.querySelector("#root")
);
