"use client"

import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CountdownPopupProps {
  onClose: () => void
  targetDate: Date
}

export default function CountdownPopup({ onClose, targetDate }: CountdownPopupProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        zIndex: 1000
      })
    }

    const timer = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
      } else {
        setTimeLeft('Event has started!')
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen, targetDate])

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleClose}></div>
      <Card className="w-full max-w-md z-50">
        <CardHeader className="relative">
          <CardTitle>Welcome to Club Celestius!</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <p>Thank you for visiting our website. We're excited to have you here!</p>
          <p className="mt-2">Our next event starts in:</p>
          <p className="text-2xl font-bold mt-2">{timeLeft}</p>
        </CardContent>
      </Card>
    </div>
  )
}
