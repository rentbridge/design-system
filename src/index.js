import system from '@rebass/components'
import all, { 
  border, 
  flexbox,
  layout,
  typography 
} from 'system-prop-sets'

// Custom style utilities
import { wordBreak } from './utils/styles'

// styled-components theme
export const designSystem = {
  colors: {
    'white': '#ffffff',
    'stone-grey': '#707070',
    'green': '#39c6bd',
    'orange': '#ef883d',
  },
  fonts: {
    sansSerif: 'brother-1816, sans-serif',
  },
  fontWeights: [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
  radii: { full: 9999 },
}

// Button
export const Button = system({
    is: 'button',
    color: 'white',
    bg: 'orange',
    borderRadius: 'full',
    fontFamily: 'sansSerif',
    fontWeight: 6,
    wordBreak: 'keep-all',
  },
  'space',
  'color',
  'width',
  ...border,
  ...flexbox,
  ...layout,
  ...typography,
  wordBreak,
)

// Box
export const Box = system({ is: 'div' }, ...all)

// Default export
export default designSystem
