import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #000000;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    // font-size: 16px (Desktop)
    html{
        @media screen and (max-width: 1080px) {
            font-size: 93.75%; //15px
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width:720px){
            font-size: 87.5%; //14px
        }
    }

    body, input, button, textarea {
        font-family: 'Montserrat', serif;
        font-size: 16px;
    
}

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
}


button {
    cursor: pointer;
}
`;
