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
const designSystem = {
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
    fontFamily: designSystem.typeface.sansSerif,
    fontWeight: '600',
    wordBreak: 'keep-all',
  },
  'space',
  'color',
  ...border,
  ...flexbox,
  ...layout,
  ...typography,
  wordBreak,
)

// Box
const Box = system({ is: 'div' }, ...all)

// Default export
export default designSystem

// Component exports
export { Button, Box }
