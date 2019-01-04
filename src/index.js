import system from '@rebass/components'
import { themeGet } from 'styled-system'

// styled-components theme
const theme = {
  breakpoints: [
    '32em', '48em', '64em',
  ],
  typeface: {
    sansSerif: 'brother-1816, sans-serif',
  },
  colors: {
    'white': '#ffffff',
    'stone-grey': '#707070',
    'green': '#39c6bd',
    'orange': '#ef883d',
  }
}

// Button
const Button = system({
    is: 'button',
    color: 'white',
    bg: 'orange',
    borderRadius: '9999px',
    fontFamily: themeGet('typeface.sansSerif'),
  },
  // core
  'space',
  'width',
  'color',
  'fontSize',
  // fonts
  'fontFamily',
  // borders
  'borders',
  'borderColor',
  'borderRadius',
  // layout
  'display',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  // flexbox
  'alignItems',
  'alignContent',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex',
  'flexBasis',
  'justifySelf',
  'alignSelf',
  'order',
  // position
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
)

// Box
const Box = system(
  'space',
  'width',
  'fontSize',
  'textColor',
  'bgColor',
  'color',
  'fontFamily',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'fontStyle',
  'letterSpacing',
  'display',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  'sizeWidth',
  'sizeHeight',
  'size',
  'ratioPadding',
  'ratio',
  'verticalAlign',
  'alignItems',
  'alignContent',
  'justifyItems',
  'justifyContent',
  'flexWrap',
  'flexBasis',
  'flexDirection',
  'flex',
  'justifySelf',
  'alignSelf',
  'order',
  'gridGap',
  'gridColumnGap',
  'gridRowGap',
  'gridColumn',
  'gridRow',
  'gridAutoFlow',
  'gridAutoColumns',
  'gridAutoRows',
  'gridTemplateColumns',
  'gridTemplateRows',
  'gridTemplateAreas',
  'gridArea',
  'border',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'borders',
  'borderColor',
  'borderRadius',
  'boxShadow',
  'opacity',
  'overflow',
  'background',
  'backgroundImage',
  'backgroundPosition',
  'backgroundRepeat',
  'backgroundSize',
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
  'textStyle',
  'colorStyle',
  'buttonStyle',
)

// Default export
export default theme

// Component exports
export {
  Button, 
  Box,
}
