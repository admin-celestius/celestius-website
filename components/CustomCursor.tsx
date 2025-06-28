'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mousedown', onMouseDown)
      document.addEventListener('mouseup', onMouseUp)
      document.addEventListener('mouseover', onMouseOver)
      document.addEventListener('mouseout', onMouseOut)
    }

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A') {
        setLinkHovered(true)
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A') {
        setLinkHovered(false)
      }
    }

    addEventListeners()
    return () => removeEventListeners()
  }, [])

  return (
    <div
      id="custom-cursor"
      className={`fixed pointer-events-none z-[9999] transition-all duration-100 ease-out will-change-[width,height,transform] ${
        clicked ? 'w-30 h-30' : linkHovered ? 'w-30 h-30' : 'w-30 h-30'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(0%, 0%)',
      }}
    >
      <Image
        src={clicked ? '/navigation.png' : linkHovered ? '/navigation.png' : '/navigation.png'}
        alt="Custom Cursor"
        width={clicked ? 40 : linkHovered ? 44 : 40}
        height={clicked ? 40 : linkHovered ? 44 : 40}
      />
    </div>
  )
}

