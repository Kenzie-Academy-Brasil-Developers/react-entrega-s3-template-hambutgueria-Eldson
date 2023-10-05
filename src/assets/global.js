import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;

        border: none;
        outline: none;

        list-style: none;
        text-decoration: none;
    }

    :root {
        --color-primary: #27AE60;
        --color-secundary: #EB5757;

        --grey-600: #333;
        --grey-400: #BDBDBD;
        --grey-300: #828282;
        --grey-100: #E0E0E0;
        --grey-0: #F5F5F5;

        --font-bold: 700;
        --font-semibold: 600;
        --font-regular: 400;

        --font-size-h1: 26px;
        --font-size-h2: 22px;
        --font-size-h3: 18px;

        --font-size-headline: 16px;
        --font-size-body: 14px;
        --font-size-caption: 12px;
    }

    .heading1 {
        font-size: var(--font-size-h1);
        font-weight: var(--font-bold);
    }

    .heading2 {
        font-size: var(--font-size-h2);
        font-weight: var(--font-bold);
    }

    .heading3 {
        font-size: var(--font-size-h3);
        font-weight: var(--font-bold);
    }
    
    .headline {
        font-size: var(--font-size-headline);
        font-weight: var(--font-regular);
    }

    .body {
        font-size: var(--font-size-body);
        font-weight: var(--font-semibold);
    }

    .body-600 {
        font-size: var(--font-size-body);
        font-weight: var(--font-semibold);
    }

    .caption {
        font-size: var(--font-size-caption);
        font-weight: var(--font-regular);
    }

    body {
        font-family: "Inter", sans-serif;
    }
`;