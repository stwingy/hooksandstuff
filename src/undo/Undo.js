import React from 'react'
import styled from 'styled-components'
import App from './App'
const Wrapper = styled.div`
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
  'Helvetica Neue', sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
`
function Undo() {
    return (
        <Wrapper>
            <App/>
        </Wrapper>
    )
}

export default Undo
