import system from '@rebass/components'

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
  },
  // core
  'space',
  'width',
  'color',
  'fontSize',
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
const Box = system({
    is: 'div',
  },
  // core
  'space',
  'width',
  'color',
  'fontSize',
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
  // grid
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
  // position
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
)

// Default export
export default theme

// Component exports
export {
  Button, 
  Box,
}
