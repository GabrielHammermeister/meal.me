import * as React from 'react'

const SvgProfile = (props: any) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={31} height={24} fill='none' {...props}>
    <path
      fill='#576684'
      d='M28 12c0 6.627-6.044 12-13.5 12S1 18.627 1 12 7.044 0 14.5 0 28 5.373 28 12Z'
    />
    <path
      // fill='#ACB4C9'
      fill='inherit'

      d='M17.903 18.375c3-1.158 5.097-3.8 5.097-6.875a6.776 6.776 0 0 0-.978-3.496A6.176 6.176 0 0 0 23 4.682c0-.377-.346-.682-.773-.682H14.5C9.806 4 6 7.358 6 11.5c0 3.075 2.097 5.717 5.098 6.875-1.869.721-3.387 2.018-4.267 3.637C9.041 23.27 11.675 24 14.501 24c2.825 0 5.458-.73 7.669-1.988-.88-1.619-2.398-2.916-4.267-3.637Z'
    />
    <path
      fill='#576684'
      fillRule='evenodd'
      d='M12.571 14.083c.356 0 .643.261.643.584 0 .644.576 1.166 1.286 1.166.71 0 1.286-.522 1.286-1.166 0-.322.287-.584.643-.584.355 0 .642.261.642.584 0 1.288-1.15 2.333-2.571 2.333-1.42 0-2.571-1.045-2.571-2.333 0-.322.287-.584.642-.584Z'
      clipRule='evenodd'
    />
    <path
      fill='#576684'
      d='M11.929 10.875c0 .483-.432.875-.965.875-.532 0-.964-.392-.964-.875s.432-.875.964-.875c.533 0 .965.392.965.875ZM19 10.875c0 .483-.432.875-.964.875-.533 0-.965-.392-.965-.875s.432-.875.965-.875c.532 0 .964.392.964.875Z'
    />
  </svg>
)
export default SvgProfile
