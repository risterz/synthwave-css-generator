import { useState } from 'react'
import styled from 'styled-components'

const OutputContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #ffff00;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 0 20px rgba(255, 255, 0, 0.3);
  backdrop-filter: blur(10px);
`

const OutputTitle = styled.h2`
  color: #ff00ff;
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
`

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid #333;
`

const Tab = styled.button`
  background: ${props => props.active ? 'rgba(255, 0, 255, 0.2)' : 'transparent'};
  border: none;
  color: ${props => props.active ? '#ff00ff' : '#fff'};
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  border-bottom: 2px solid ${props => props.active ? '#ff00ff' : 'transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff00ff;
    background: rgba(255, 0, 255, 0.1);
  }
`

const CodeBlock = styled.pre`
  background: #000;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 1rem;
  color: #00ff00;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  line-height: 1.4;
  overflow-x: auto;
  max-height: 400px;
  overflow-y: auto;
  margin: 0;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #111;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #ff00ff;
    border-radius: 4px;
  }
`

const CopyButton = styled.button`
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  border: 1px solid #ff00ff;
  border-radius: 4px;
  color: #fff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
  }
`

const CodeOutput = ({ styles }) => {
  const [activeTab, setActiveTab] = useState('css')
  const [copied, setCopied] = useState(false)

  const generateCSS = () => {
    const elementClass = `.synthwave-${styles.elementType}`
    
    let css = `${elementClass} {
  font-family: 'Courier New', monospace;
  font-size: ${styles.fontSize}px;
  font-weight: ${styles.fontWeight};
  letter-spacing: ${styles.letterSpacing}px;
  border: ${styles.borderWidth}px solid ${styles.primaryColor};
  border-radius: ${styles.borderRadius}px;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
`

    if (styles.elementType === 'button') {
      css += `  background: linear-gradient(45deg, ${styles.primaryColor}, ${styles.secondaryColor});
  padding: 1rem 2rem;
  cursor: pointer;
`
    } else if (styles.elementType === 'input') {
      css += `  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  color: ${styles.secondaryColor};
`
    } else if (styles.elementType === 'card') {
      css += `  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  backdrop-filter: blur(10px);
`
    }

    css += `  
  box-shadow: 
    0 0 ${styles.glowIntensity}px ${styles.primaryColor},
    inset 0 0 ${styles.glowSpread}px rgba(255, 255, 255, 0.1);
  
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

${elementClass}:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 0 ${styles.glowIntensity * 1.5}px ${styles.primaryColor},
    0 5px 15px rgba(0, 0, 0, 0.3),
    inset 0 0 ${styles.glowSpread}px rgba(255, 255, 255, 0.2);
}

${elementClass}::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

${elementClass}:hover::before {
  left: 100%;
}

@keyframes synthwave-pulse {
  from {
    box-shadow: 
      0 0 ${styles.glowIntensity}px ${styles.primaryColor},
      inset 0 0 ${styles.glowSpread}px rgba(255, 255, 255, 0.1);
  }
  to {
    box-shadow: 
      0 0 ${styles.glowIntensity * 1.2}px ${styles.primaryColor},
      inset 0 0 ${styles.glowSpread * 1.2}px rgba(255, 255, 255, 0.2);
  }
}

${elementClass} {
  animation: synthwave-pulse ${styles.animationSpeed}s ease-in-out infinite alternate;
}`

    if (styles.scanLines) {
      css += `

.synthwave-container::before {
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
  animation: scanlines ${styles.animationSpeed}s linear infinite;
}

@keyframes scanlines {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}`
    }

    if (styles.gridPattern) {
      css += `

.synthwave-container::after {
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
}`
    }

    return css
  }

  const generateStyledComponents = () => {
    return `import styled from 'styled-components'

const SynthwaveElement = styled.${styles.elementType === 'input' ? 'input' : styles.elementType === 'card' ? 'div' : 'button'}\`
  font-family: 'Courier New', monospace;
  font-size: ${styles.fontSize}px;
  font-weight: ${styles.fontWeight};
  letter-spacing: ${styles.letterSpacing}px;
  border: ${styles.borderWidth}px solid ${styles.primaryColor};
  border-radius: ${styles.borderRadius}px;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  ${styles.elementType === 'button' ? `
  background: linear-gradient(45deg, ${styles.primaryColor}, ${styles.secondaryColor});
  padding: 1rem 2rem;
  cursor: pointer;` : ''}
  ${styles.elementType === 'input' ? `
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  color: ${styles.secondaryColor};` : ''}
  ${styles.elementType === 'card' ? `
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  backdrop-filter: blur(10px);` : ''}
  
  box-shadow: 
    0 0 ${styles.glowIntensity}px ${styles.primaryColor},
    inset 0 0 ${styles.glowSpread}px rgba(255, 255, 255, 0.1);
  
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  
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
      0 0 ${styles.glowIntensity * 1.5}px ${styles.primaryColor},
      0 5px 15px rgba(0, 0, 0, 0.3),
      inset 0 0 ${styles.glowSpread}px rgba(255, 255, 255, 0.2);
      
    &::before {
      left: 100%;
    }
  }
  
  animation: pulse ${styles.animationSpeed}s ease-in-out infinite alternate;
  
  @keyframes pulse {
    from {
      box-shadow: 
        0 0 ${styles.glowIntensity}px ${styles.primaryColor},
        inset 0 0 ${styles.glowSpread}px rgba(255, 255, 255, 0.1);
    }
    to {
      box-shadow: 
        0 0 ${styles.glowIntensity * 1.2}px ${styles.primaryColor},
        inset 0 0 ${styles.glowSpread * 1.2}px rgba(255, 255, 255, 0.2);
    }
  }
\`

export default SynthwaveElement`
  }

  const copyToClipboard = () => {
    const code = activeTab === 'css' ? generateCSS() : generateStyledComponents()
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <OutputContainer>
      <OutputTitle>Generated Code</OutputTitle>
      
      <TabContainer>
        <Tab 
          active={activeTab === 'css'} 
          onClick={() => setActiveTab('css')}
        >
          CSS
        </Tab>
        <Tab 
          active={activeTab === 'styled-components'} 
          onClick={() => setActiveTab('styled-components')}
        >
          Styled Components
        </Tab>
      </TabContainer>

      <CodeBlock>
        {activeTab === 'css' ? generateCSS() : generateStyledComponents()}
      </CodeBlock>
      
      <CopyButton onClick={copyToClipboard}>
        {copied ? 'Copied!' : 'Copy Code'}
      </CopyButton>
    </OutputContainer>
  )
}

export default CodeOutput
