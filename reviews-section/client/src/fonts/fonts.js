import { createGlobalStyle } from 'styled-components';

import robotoRegularWoff from './Roboto-Regular.woff';
import robotoRegularWoff2 from './Roboto-Regular.woff2';

const GlotbalStyle =  createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${robotoRegularWoff2}) format('woff2'),
        url(${robotoRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;

export default GlotbalStyle;