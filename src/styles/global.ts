import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import 'node_modules/react-modal-video/scss/modal-video.scss';

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
     --divider: #343434;

// project specific variables

--color-theme-color--default: #f0542d;
--color-theme-color--default--light: darken(--color-theme-color--default, 10%);
--color-theme-color--red1: #DE2021;
--color-theme-color--red2: #D0021B;
--color-theme-color--orange1: #F6732E;
--color-theme-color--orange2: #FC844B;
--color-theme-color--orange3: #FF732F;
--color-theme-color--blue: #0C95EC;
--color-theme-color--blue-dark: rgb(6, 121, 192);
--color-theme-color--violet: #7F60D1;
--color-theme-color--black: #222;
--color-theme-color--black2: #11202D;
--color-theme-color--black3: #05103B;
--color-theme-color--black4: #313131;


// Colors ---------------

--color-white: #ffffff;
--color-black: #000000;

// Body Text
--color-body-text-color: #1d1d25;
--color-body-font-weight: 400;
--color-body-line-height: 1.66;
--color-body-font-size: 15px;

// Heading Text
--color-heading-text-color: #1d1d25;
--color-heading-font-weight: 700;



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


@keyframes modal-video{from{opacity:0}to{opacity:1}}@keyframes modal-video-inner{from{transform:translate(0, 100px)}to{transform:translate(0, 0)}}.modal-video{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.5);z-index:1000000;cursor:pointer;opacity:1;animation-timing-function:ease-out;animation-duration:.3s;animation-name:modal-video;-webkit-transition:opacity .3s ease-out;-moz-transition:opacity .3s ease-out;-ms-transition:opacity .3s ease-out;-o-transition:opacity .3s ease-out;transition:opacity .3s ease-out}.modal-video-effect-exit{opacity:0}.modal-video-effect-exit .modal-video-movie-wrap{-webkit-transform:translate(0, 100px);-moz-transform:translate(0, 100px);-ms-transform:translate(0, 100px);-o-transform:translate(0, 100px);transform:translate(0, 100px)}.modal-video-body{max-width:940px;width:100%;height:100%;margin:0 auto;display:table}.modal-video-inner{display:table-cell;vertical-align:middle;width:100%;height:100%}.modal-video-movie-wrap{width:100%;height:0;position:relative;padding-bottom:56.25%;background-color:#333;animation-timing-function:ease-out;animation-duration:.3s;animation-name:modal-video-inner;-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-ms-transform:translate(0, 0);-o-transform:translate(0, 0);transform:translate(0, 0);-webkit-transition:-webkit-transform .3s ease-out;-moz-transition:-moz-transform .3s ease-out;-ms-transition:-ms-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out}.modal-video-movie-wrap iframe{position:absolute;top:0;left:0;width:100%;height:100%}.modal-video-close-btn{position:absolute;z-index:2;top:-35px;right:-35px;display:inline-block;width:35px;height:35px;overflow:hidden;border:none;background:transparent}.modal-video-close-btn:before{transform:rotate(45deg)}.modal-video-close-btn:after{transform:rotate(-45deg)}.modal-video-close-btn:before,.modal-video-close-btn:after{content:'';position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:#fff;border-radius:5px;margin-top:-6px}


`;
