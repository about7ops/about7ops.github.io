import React from 'react'
import MovingText from 'react-moving-text'

const MovingHeader = () => {
  return (
  <MovingText
  type="fadeInFromBottom"
  duration="1500ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
  Lorem ipsum dolor sit amet
</MovingText>
)}

export default MovingHeader