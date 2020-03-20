import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url('/Roboto-Regular.ttf');
    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    p, h1, h2, h3, h4 {
        margin: 0;
        padding: 0;
    }
`;
