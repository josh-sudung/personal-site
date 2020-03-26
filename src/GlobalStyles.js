import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: 'Raleway', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .bg-grey {
    background-color: rgb(17, 18, 22);
    color: white;

  }

  .text-white {
    color:white !important;
  }

  .bg-orange {
    background-color: #FFA489;
    color:black;
  }

  .bg-blue {
    background-color: #9FD4CA;
    color:black;
  }

  .highlight {
    color: #1be3db;
  }

  .underline {
    text-decoration: underline;
    text-decoration-color: #1be3db;
  }

  .underline-white {
    text-decoration: underline;
    text-decoration-color: white;
  }


`;