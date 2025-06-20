import { useState } from 'react'
import styled from 'styled-components'
import SynthwaveGenerator from './components/SynthwaveGenerator'
import './App.css'

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #16213e 100%);
  color: #fff;
  font-family: 'Courier New', monospace;
`

const Header = styled.header`
  text-align: center;
  padding: 2rem 0;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid #ff00ff;
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
`

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
  animation: glow 2s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      text-shadow: 0 0 20px rgba(255, 0, 255, 0.5), 0 0 30px rgba(255, 0, 255, 0.5);
    }
    to {
      text-shadow: 0 0 30px rgba(255, 0, 255, 0.8), 0 0 40px rgba(255, 0, 255, 0.8);
    }
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0 0 0;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`

function App() {
  return (
    <AppContainer>
      <Header>
        <Title>SYNTHWAVE CSS GENERATOR</Title>
        <Subtitle>Create retro-futuristic neon styles</Subtitle>
      </Header>
      <SynthwaveGenerator />
    </AppContainer>
  )
}

export default App
