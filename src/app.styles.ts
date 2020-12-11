import styled, { createGlobalStyle } from "styled-components";
import BGimage from "./images/bcg.jpg";

export const GlobalStyle = createGlobalStyle`

html{
    height: 100%;
}

body{
    background-image: url(${BGimage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;

}

* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif, Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    --webkit-background-clip: text-align;
    --webkit--webkit-text-fill-color: transparent;
    --moz-background-clip: text;
    --moz-background-clip: transparent;

    filter: drop-shadow(2px, 2px, #0085a3);
    text-align: center;
    margin: 20px;
  }
`;
