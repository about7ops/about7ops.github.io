import React, { useState } from 'react'
import MovingComponent from 'react-moving-text'

const AnimationsForChaining = ["fadeInFromBottom"]

const AnimationChain = () => {

  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex+1)
    setAnimationType(AnimationsForChaining[animationIndex+1])
  }

  return (
    <MovingComponent
      onAnimationEnd={handleChainAnimation}
      type={animationType}
      duration="1000ms"
      timing="linear"
      fillMode="forwards"
      iteration={1}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mLorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore m
    </MovingComponent>
  )
}

export default AnimationChain