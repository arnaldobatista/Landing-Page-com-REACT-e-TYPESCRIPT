import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box.sizing: 0;
    }
    html, body, #root {
        height: 100%;
    }
    button {
        backgroung-color: none;
        border: none;
        outline: none;
    }
    a {
        text-decoration: none;
        outline: none;
    }


`

export default globalStyle