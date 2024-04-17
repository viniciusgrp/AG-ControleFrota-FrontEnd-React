import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: transparent;
        font-family: "Inter", sans-serif;
    }

    button {
        cursor: pointer;
    }

    :root {
        --primary: #07c7e9;
        --secundary: #f0f2ff;
    }
`;