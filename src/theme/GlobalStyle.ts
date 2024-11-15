'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-smooth: always;
		margin: 0;
		padding: 0;
	}
  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  body {
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    flex-shrink: 0;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

	input[type=search]::-ms-clear { display: none; width : 0; height: 0; }
	input[type=search]::-ms-reveal { display: none; width : 0; height: 0; }
	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration { display: none; }
`

export default GlobalStyle
