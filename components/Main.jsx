import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio'
import Promos from './Promos'

const Main = ({thirdWebTokens, sanityTokens, walletAddress}) => {
  return (
    <Wrapper>
        <Portfolio
          walletAddress={walletAddress} 
          sanityTokens={sanityTokens} 
          thirdWebTokens={thirdWebTokens}
        />
        <Promos />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
    display: flex;
    min-height: calc(100vh - 64px);
    overflow-y: scroll;
    overflow: hidden;
    ::-webkit-scrollbar{
      display: none;
    }

    & > div{
        box-sizing: 0.4rem;
    }
`