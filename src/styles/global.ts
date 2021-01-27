import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
    --color-primary: #ff9000;
    --color-secondary: #312E38;
    --color-login: #686868;
    --color-togle: #686868;
    --color-border-icon: rgba(104, 104, 104, 0.4);
    --color-text-menu: #aeb6c1;
    --color-complement3: #a9095e;
    --color-complement4: #2a5a75;
    --color-black: #000;
    --color-white: #fff;
    --color-sucess: #32917b;
    --color-gray: #f2f2f2;
    --color-gray-dark: #ebebeb;
    --color-gray-light: #e3e3e3;
    --color-border: #cccccc;
    --color-gray-complement1: #adadad;
    --color-gray-complement2: #7f7f7f;
}
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: 0;
}

body {
   background: #312E38;
   color: #FFF;
   -webkit-font-smoothing: antialiased;

}

body, input, button {
   font-family: 'Roboto Slab', serif;
   font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
   font-weight: 500;
}

button {
   cursor: pointer;
}
`;
