import styled from 'styled-components'

const Panel = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #ff00ff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
  backdrop-filter: blur(10px);
`

const PanelTitle = styled.h2`
  color: #00ffff;
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`

const ControlGroup = styled.div`
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  color: #fff;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Slider = styled.input`
  width: 100%;
  height: 4px;
  background: #333;
  outline: none;
  border-radius: 2px;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
  }
  
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    border-radius: 50%;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
  }
`

const ColorInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ff00ff;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  
  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #ff00ff;
  border-radius: 4px;
  color: #fff;
  font-family: inherit;
  
  option {
    background: #000;
    color: #fff;
  }
`

const Checkbox = styled.input`
  margin-right: 0.5rem;
  accent-color: #ff00ff;
`

const ValueDisplay = styled.span`
  color: #00ffff;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`

const ResetButton = styled.button`
  width: 100%;
  background: linear-gradient(45deg, #ff0066, #ff6600);
  border: 2px solid #ff0066;
  border-radius: 6px;
  color: #fff;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  box-shadow:
    0 0 15px rgba(255, 0, 102, 0.4),
    inset 0 0 10px rgba(255, 255, 255, 0.1);

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
      0 0 25px rgba(255, 0, 102, 0.6),
      0 5px 15px rgba(0, 0, 0, 0.3),
      inset 0 0 15px rgba(255, 255, 255, 0.2);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`

const ControlPanel = ({ styles, updateStyle }) => {
  // Default values - same as initial state in SynthwaveGenerator
  const defaultStyles = {
    primaryColor: '#ff00ff',
    secondaryColor: '#00ffff',
    accentColor: '#ffff00',
    glowIntensity: 20,
    glowSpread: 10,
    backgroundType: 'gradient',
    backgroundColor: '#0a0a0a',
    gradientStart: '#1a0a2e',
    gradientEnd: '#16213e',
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 1,
    borderWidth: 2,
    borderRadius: 4,
    animationSpeed: 2,
    scanLines: true,
    gridPattern: false,
    elementType: 'button'
  }

  const handleReset = () => {
    // Reset all styles to default values
    Object.keys(defaultStyles).forEach(key => {
      updateStyle(key, defaultStyles[key])
    })
  }
  return (
    <Panel>
      <PanelTitle>Controls</PanelTitle>
      
      <ControlGroup>
        <Label>Element Type</Label>
        <Select 
          value={styles.elementType} 
          onChange={(e) => updateStyle('elementType', e.target.value)}
        >
          <option value="button">Button</option>
          <option value="text">Text</option>
          <option value="card">Card</option>
          <option value="input">Input</option>
        </Select>
      </ControlGroup>

      <ControlGroup>
        <Label>Primary Color</Label>
        <ColorInput 
          type="color" 
          value={styles.primaryColor}
          onChange={(e) => updateStyle('primaryColor', e.target.value)}
        />
      </ControlGroup>

      <ControlGroup>
        <Label>Secondary Color</Label>
        <ColorInput 
          type="color" 
          value={styles.secondaryColor}
          onChange={(e) => updateStyle('secondaryColor', e.target.value)}
        />
      </ControlGroup>

      <ControlGroup>
        <Label>Accent Color</Label>
        <ColorInput 
          type="color" 
          value={styles.accentColor}
          onChange={(e) => updateStyle('accentColor', e.target.value)}
        />
      </ControlGroup>

      <ControlGroup>
        <Label>
          Glow Intensity
          <ValueDisplay>{styles.glowIntensity}px</ValueDisplay>
        </Label>
        <Slider 
          type="range" 
          min="0" 
          max="50" 
          value={styles.glowIntensity}
          onChange={(e) => updateStyle('glowIntensity', parseInt(e.target.value))}
        />
      </ControlGroup>

      <ControlGroup>
        <Label>
          Glow Spread
          <ValueDisplay>{styles.glowSpread}px</ValueDisplay>
        </Label>
        <Slider 
          type="range" 
          min="0" 
          max="30" 
          value={styles.glowSpread}
          onChange={(e) => updateStyle('glowSpread', parseInt(e.target.value))}
        />
      </ControlGroup>

      <ControlGroup>
        <Label>
          Font Size
          <ValueDisplay>{styles.fontSize}px</ValueDisplay>
        </Label>
        <Slider 
          type="range" 
          min="12" 
          max="48" 
          value={styles.fontSize}
          onChange={(e) => updateStyle('fontSize', parseInt(e.target.value))}
        />
      </ControlGroup>

      <ControlGroup>
        <Label>
          Border Width
          <ValueDisplay>{styles.borderWidth}px</ValueDisplay>
        </Label>
        <Slider 
          type="range" 
          min="0" 
          max="10" 
          value={styles.borderWidth}
          onChange={(e) => updateStyle('borderWidth', parseInt(e.target.value))}
        />
      </ControlGroup>

      <ControlGroup>
        <Label>
          Border Radius
          <ValueDisplay>{styles.borderRadius}px</ValueDisplay>
        </Label>
        <Slider 
          type="range" 
          min="0" 
          max="20" 
          value={styles.borderRadius}
          onChange={(e) => updateStyle('borderRadius', parseInt(e.target.value))}
        />
      </ControlGroup>

      <ControlGroup>
        <Label>
          Animation Speed
          <ValueDisplay>{styles.animationSpeed}s</ValueDisplay>
        </Label>
        <Slider 
          type="range" 
          min="0.5" 
          max="5" 
          step="0.1"
          value={styles.animationSpeed}
          onChange={(e) => updateStyle('animationSpeed', parseFloat(e.target.value))}
        />
      </ControlGroup>

      <ControlGroup>
        <Label>
          <Checkbox 
            type="checkbox" 
            checked={styles.scanLines}
            onChange={(e) => updateStyle('scanLines', e.target.checked)}
          />
          Scan Lines Effect
        </Label>
      </ControlGroup>

      <ControlGroup>
        <Label>
          <Checkbox
            type="checkbox"
            checked={styles.gridPattern}
            onChange={(e) => updateStyle('gridPattern', e.target.checked)}
          />
          Grid Pattern
        </Label>
      </ControlGroup>

      <ResetButton onClick={handleReset}>
        🔄 Reset to Default
      </ResetButton>
    </Panel>
  )
}

export default ControlPanel
