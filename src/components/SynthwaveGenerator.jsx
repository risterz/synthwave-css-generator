import { useState } from 'react'
import styled from 'styled-components'
import ControlPanel from './ControlPanel'
import PreviewArea from './PreviewArea'
import CodeOutput from './CodeOutput'

const GeneratorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const SynthwaveGenerator = () => {
  const [styles, setStyles] = useState({
    // Neon colors
    primaryColor: '#ff00ff',
    secondaryColor: '#00ffff',
    accentColor: '#ffff00',
    
    // Glow effects
    glowIntensity: 20,
    glowSpread: 10,
    
    // Background
    backgroundType: 'gradient',
    backgroundColor: '#0a0a0a',
    gradientStart: '#1a0a2e',
    gradientEnd: '#16213e',
    
    // Typography
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 1,
    
    // Border and effects
    borderWidth: 2,
    borderRadius: 4,
    animationSpeed: 2,
    
    // Grid/scan lines
    scanLines: true,
    gridPattern: false,
    
    // Element type for preview
    elementType: 'button'
  })

  const updateStyle = (property, value) => {
    setStyles(prev => ({
      ...prev,
      [property]: value
    }))
  }

  return (
    <GeneratorContainer>
      <ControlPanel styles={styles} updateStyle={updateStyle} />
      <PreviewArea styles={styles} />
      <CodeOutput styles={styles} />
    </GeneratorContainer>
  )
}

export default SynthwaveGenerator