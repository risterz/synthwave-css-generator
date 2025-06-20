import styled from 'styled-components'

const PreviewContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ffff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
`

const PreviewTitle = styled.h2`
  color: #ffff00;
  margin: 0 0 2rem 0;
  font-size: 1.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 0, 0.5);
  text-align: center;
`

const PreviewStage = styled.div`
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${props => props.styles.backgroundType === 'gradient' 
    ? `linear-gradient(135deg, ${props.styles.gradientStart}, ${props.styles.gradientEnd})`
    : props.styles.backgroundColor
  };
  border-radius: 8px;
  
  ${props => props.styles.scanLines && `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 255, 255, 0.1) 2px,
        rgba(0, 255, 255, 0.1) 4px
      );
      pointer-events: none;
      animation: scanlines ${props.styles.animationSpeed}s linear infinite;
    }
    
    @keyframes scanlines {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }
  `}
  
  ${props => props.styles.gridPattern && `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px);
      background-size: 20px 20px;
      pointer-events: none;
    }
  `}
`

const SynthwaveButton = styled.button`
  background: linear-gradient(45deg, ${props => props.styles.primaryColor}, ${props => props.styles.secondaryColor});
  border: ${props => props.styles.borderWidth}px solid ${props => props.styles.primaryColor};
  border-radius: ${props => props.styles.borderRadius}px;
  color: #fff;
  font-size: ${props => props.styles.fontSize}px;
  font-weight: ${props => props.styles.fontWeight};
  letter-spacing: ${props => props.styles.letterSpacing}px;
  padding: 1rem 2rem;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  
  box-shadow: 
    0 0 ${props => props.styles.glowIntensity}px ${props => props.styles.primaryColor},
    inset 0 0 ${props => props.styles.glowSpread}px rgba(255, 255, 255, 0.1);
  
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 0 ${props => props.styles.glowIntensity * 1.5}px ${props => props.styles.primaryColor},
      0 5px 15px rgba(0, 0, 0, 0.3),
      inset 0 0 ${props => props.styles.glowSpread}px rgba(255, 255, 255, 0.2);
      
    &::before {
      left: 100%;
    }
  }
  
  animation: pulse ${props => props.styles.animationSpeed}s ease-in-out infinite alternate;
  
  @keyframes pulse {
    from {
      box-shadow: 
        0 0 ${props => props.styles.glowIntensity}px ${props => props.styles.primaryColor},
        inset 0 0 ${props => props.styles.glowSpread}px rgba(255, 255, 255, 0.1);
    }
    to {
      box-shadow: 
        0 0 ${props => props.styles.glowIntensity * 1.2}px ${props => props.styles.primaryColor},
        inset 0 0 ${props => props.styles.glowSpread * 1.2}px rgba(255, 255, 255, 0.2);
    }
  }
`

const SynthwaveText = styled.div`
  font-size: ${props => props.styles.fontSize}px;
  font-weight: ${props => props.styles.fontWeight};
  letter-spacing: ${props => props.styles.letterSpacing}px;
  color: ${props => props.styles.primaryColor};
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  text-align: center;
  
  text-shadow: 
    0 0 ${props => props.styles.glowIntensity}px ${props => props.styles.primaryColor},
    0 0 ${props => props.styles.glowSpread}px ${props => props.styles.secondaryColor};
  
  animation: textGlow ${props => props.styles.animationSpeed}s ease-in-out infinite alternate;
  
  @keyframes textGlow {
    from {
      text-shadow: 
        0 0 ${props => props.styles.glowIntensity}px ${props => props.styles.primaryColor},
        0 0 ${props => props.styles.glowSpread}px ${props => props.styles.secondaryColor};
    }
    to {
      text-shadow: 
        0 0 ${props => props.styles.glowIntensity * 1.5}px ${props => props.styles.primaryColor},
        0 0 ${props => props.styles.glowSpread * 1.5}px ${props => props.styles.secondaryColor};
    }
  }
`

const SynthwaveCard = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border: ${props => props.styles.borderWidth}px solid ${props => props.styles.primaryColor};
  border-radius: ${props => props.styles.borderRadius}px;
  padding: 2rem;
  color: #fff;
  font-family: 'Courier New', monospace;
  
  box-shadow: 
    0 0 ${props => props.styles.glowIntensity}px ${props => props.styles.primaryColor},
    inset 0 0 ${props => props.styles.glowSpread}px rgba(255, 255, 255, 0.05);
  
  backdrop-filter: blur(10px);
  
  h3 {
    color: ${props => props.styles.secondaryColor};
    margin: 0 0 1rem 0;
    font-size: ${props => props.styles.fontSize}px;
    text-shadow: 0 0 10px ${props => props.styles.secondaryColor};
  }
  
  p {
    margin: 0;
    font-size: ${props => props.styles.fontSize * 0.8}px;
    line-height: 1.6;
  }
`

const SynthwaveInput = styled.input`
  background: rgba(0, 0, 0, 0.8);
  border: ${props => props.styles.borderWidth}px solid ${props => props.styles.primaryColor};
  border-radius: ${props => props.styles.borderRadius}px;
  color: ${props => props.styles.secondaryColor};
  font-size: ${props => props.styles.fontSize}px;
  font-family: 'Courier New', monospace;
  padding: 1rem;
  width: 250px;
  
  box-shadow: 
    0 0 ${props => props.styles.glowIntensity}px ${props => props.styles.primaryColor},
    inset 0 0 ${props => props.styles.glowSpread}px rgba(255, 255, 255, 0.05);
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    box-shadow: 
      0 0 ${props => props.styles.glowIntensity * 1.5}px ${props => props.styles.primaryColor},
      inset 0 0 ${props => props.styles.glowSpread}px rgba(255, 255, 255, 0.1);
  }
`

const PreviewArea = ({ styles }) => {
  const renderPreviewElement = () => {
    switch (styles.elementType) {
      case 'button':
        return <SynthwaveButton styles={styles}>Synthwave Button</SynthwaveButton>
      case 'text':
        return <SynthwaveText styles={styles}>Synthwave Text</SynthwaveText>
      case 'card':
        return (
          <SynthwaveCard styles={styles}>
            <h3>Synthwave Card</h3>
            <p>This is a retro-futuristic card component with neon styling.</p>
          </SynthwaveCard>
        )
      case 'input':
        return <SynthwaveInput styles={styles} placeholder="Enter synthwave text..." />
      default:
        return <SynthwaveButton styles={styles}>Synthwave Button</SynthwaveButton>
    }
  }

  return (
    <PreviewContainer>
      <PreviewTitle>Live Preview</PreviewTitle>
      <PreviewStage styles={styles}>
        {renderPreviewElement()}
      </PreviewStage>
    </PreviewContainer>
  )
}

export default PreviewArea
