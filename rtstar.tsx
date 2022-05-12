import React, { useState } from 'react'

type StarProps = {
  size?: number
  fill?: string
  onClick?: () => void
  onEnter?: () => void
  onLeave?: () => void
}

const Star = ({
  size = 32,
  fill = 'gray',
  onClick,
  onEnter,
  onLeave,
}: StarProps): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 896 831.93799"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    onClick={onClick}
  >
    <path
      style={{ fill }}
      d="M 896,320 582.5,279.219 448,0 313.469,279.219 0,320 230.469,528.875 171,831.938 448,683.126 725.062,831.938 665.5,528.875 Z"
    />
  </svg>
)

type RtStarProps = {
  stars?: number
  size?: number
  activeColor?: string
  inactiveColor?: string
  value?: number
  onChange?: (value: number) => void
}

const RtStar = ({
  stars = 5,
  size,
  activeColor = 'orange',
  inactiveColor = 'gray',
  value = 0,
  onChange,
}: RtStarProps): JSX.Element => {
  const [hovered, setHovered] = useState(-1)

  return (
    <>
      {Array.from(Array(stars).keys()).map((_, idx) => (
        <Star
          key={idx}
          size={size}
          onEnter={() => setHovered(idx)}
          onLeave={() => setHovered(-1)}
          onClick={() => onChange?.(idx + 1)}
          fill={
            hovered >= idx || (hovered === -1 && value - 1 >= idx)
              ? activeColor
              : inactiveColor
          }
        />
      ))}
    </>
  )
}

export default RtStar
