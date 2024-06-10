import { createGlobalStyle } from 'styled-components';
import { hexToRGB } from '@/styles/utils';
import { colors, constants } from './constants';

const GlobalStyles = createGlobalStyle`
${constants};

html, body {
    font-size: 100%;
    line-height: 1;
}

body {
    background-color: ${hexToRGB(colors.muted, 0.4)};
}

* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}

ol, ul {
    list-style: none;
}

blockquote, q {
    quotes: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: inherit;
}
`;

export default GlobalStyles;
