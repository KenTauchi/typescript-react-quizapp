import styled, { createGlobalStyle } from "styled-components";
import summer from "./images/summerbcg.jpg";
import fall from "./images/fallbcg.jpg";
import winter from "./images/winterbcg.jpg";
import spring from "./images/springbcg.jpg";

const d = new Date();
const n = d.getMonth();
let img =
  n <= 2 ? winter : n <= 5 ? spring : n <= 8 ? summer : n <= 10 ? fall : winter;

export const GlobalStyle = createGlobalStyle`

html{
    height: 100%;
}

body{
    background-image: url(${img});
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
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    form {
      font-size: 1.5rem;
    }
    select {
      font-size: 1.5rem;
    }
    input {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.5rem;
    }

    button {
      font-size: 1.2rem;
    }
  }

  .score {
    color: black;
    font-size: 2rem;
    margin: 0;
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, "Arial Narrow Bold",
      sans-serif, Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    /* background-image: linear-gradient(180deg, #fff, #87f1ff); */
    background-size: 100%;
    background-clip: text;
    --webkit-background-clip: text-align;
    --webkit--webkit-text-fill-color: transparent;
    --moz-background-clip: text;
    --moz-background-clip: transparent;

    filter: drop-shadow(2px, 2px, #0085a3);
    text-align: center;
    margin: 20px;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
`;
