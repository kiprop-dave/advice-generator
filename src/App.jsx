import { useState, useEffect } from 'react'
import styled from 'styled-components';

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: hsl(218, 23%, 16%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const AdviceWrapper = styled.div`
  width: 40%;
  min-height: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.2rem;

  @media screen and (max-width: 600px) {
   width: 90%;
   min-height: 10rem;
  }
`
const AdviceContainer = styled.div`
  width: 90%;
  min-height: 15rem;
  border-radius: 10px;
  background-color: hsl(217, 19%, 24%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5% 0 5%;
  position: relative;
  z-index: 1;
`
const Title = styled.h3`
  color: hsl(150, 100%, 66%);
  letter-spacing: 2px;
  font-size: 16px;
  margin-top: 1rem;
`
const AdvicePar = styled.div`
  color: hsl(193, 38%, 86%);
  margin-top: 1rem;
  text-align: center;
`
const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2rem;
  height: 0.6rem;
  width: 90%;
  background-image: url(/pattern-divider-desktop.svg);

  @media screen and (max-width: 600px) {
    background-image: url(/pattern-divider-mobile.svg);
  }
`
const IconDice = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  bottom: 0;
  left: 40%;
  background-color: hsl(150, 100%, 66%);
  cursor: pointer;

  &:hover{
    box-shadow:0px 0px 30px hsl(150, 100%, 66%);
    transition: all 0.2s ease-in;
  }

  @media screen and (max-width: 600px) {
    left: 38%;
  }
`

function App() {
  const [advice, setAdvice] = useState({});
  const [adviceCount, setAdviceCount] = useState(0);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => setAdvice(data.slip))
  }, [adviceCount])

  return (
    <>
      <Page>
        <AdviceWrapper>
          <AdviceContainer>
            <Title>
              ADVICE #{advice && advice.id}
            </Title>
            <AdvicePar>
              &ldquo;
              {
                advice &&
                advice.advice
              }
              &rdquo;
            </AdvicePar>
            <LineContainer />
          </AdviceContainer>
          <IconDice onClick={() => setAdviceCount(prev => prev + 1)}>
            <img src="/icon-dice.svg" alt="" style={{ width: '20px' }} />
          </IconDice>
        </AdviceWrapper>
      </Page>
    </>
  )

}

export default App
