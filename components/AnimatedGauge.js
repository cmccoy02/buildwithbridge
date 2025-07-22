import { useEffect, useState } from 'react'

export default function AnimatedGauge({ 
  value, 
  label, 
  size = "large", 
  showNeedle = true,
  className = "" 
}) {
  const [animatedValue, setAnimatedValue] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const radius = size === "large" ? 60 : size === "medium" ? 50 : 40
  const circumference = Math.PI * radius
  const dash = (animatedValue / 100) * circumference
  const angle = (animatedValue / 100) * 180 - 90

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => {
      setAnimatedValue(value)
      setIsAnimating(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [value])

  const getColor = (val) => {
    if (val < 30) return '#a8e6cf' // Green
    if (val < 60) return '#ffd3b6' // Orange
    return '#ff8b94' // Red
  }

  const getSizeClasses = () => {
    switch (size) {
      case "large":
        return "w-80 h-40"
      case "medium":
        return "w-64 h-32"
      case "small":
        return "w-48 h-24"
      default:
        return "w-64 h-32"
    }
  }

  const getTextSize = () => {
    switch (size) {
      case "large":
        return "text-4xl"
      case "medium":
        return "text-3xl"
      case "small":
        return "text-2xl"
      default:
        return "text-3xl"
    }
  }

  const getNeedleHeight = () => {
    switch (size) {
      case "large":
        return "h-24"
      case "medium":
        return "h-20"
      case "small":
        return "h-16"
      default:
        return "h-20"
    }
  }

  return (
    <div className={`relative ${getSizeClasses()} mx-auto mb-6 ${className}`}>
      <svg viewBox={`0 0 ${radius * 2 + 20} ${radius + 20}`} className="w-full h-full">
        {/* Background arc */}
        <path 
          d={`M10 ${radius + 10} A${radius} ${radius} 0 0 1 ${radius * 2 + 10} ${radius + 10}`} 
          fill="none" 
          stroke="#2d3748" 
          strokeWidth="8" 
          strokeLinecap="round"
        />
        {/* Progress arc */}
        <path 
          d={`M10 ${radius + 10} A${radius} ${radius} 0 0 1 ${radius * 2 + 10} ${radius + 10}`} 
          fill="none" 
          stroke={getColor(animatedValue)} 
          strokeWidth="8" 
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          style={{ 
            transition: 'stroke-dasharray 1s ease-in-out',
            filter: isAnimating ? 'drop-shadow(0 0 8px currentColor)' : 'none'
          }}
        />
        {/* Gradient overlay for glow effect */}
        {isAnimating && (
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={getColor(animatedValue)} stopOpacity="0.3" />
              <stop offset="100%" stopColor={getColor(animatedValue)} stopOpacity="0" />
            </radialGradient>
          </defs>
        )}
      </svg>
      
      {/* Needle */}
      {showNeedle && (
        <div 
          className="absolute left-1/2 bottom-0 transform origin-bottom" 
          style={{ 
            transform: `translateX(-50%) rotate(${angle}deg)`,
            transition: 'transform 1s ease-in-out'
          }}
        >
          <div className={`w-1 ${getNeedleHeight()} bg-white shadow-lg`} />
        </div>
      )}
      
      {/* Value display */}
      <div className="absolute left-1/2 bottom-0 transform translate-y-8 -translate-x-1/2 text-center">
        <div 
          className={`${getTextSize()} font-ocr-a font-bold transition-all duration-500`} 
          style={{ 
            color: getColor(animatedValue),
            textShadow: isAnimating ? `0 0 10px ${getColor(animatedValue)}` : 'none'
          }}
        >
          {Math.round(animatedValue)}
        </div>
        {label && (
          <div className="text-sm font-jetbrains-mono text-gray-400 mt-1 animate-fade-in">
            {label}
          </div>
        )}
      </div>
      
      {/* Animated rings for loading effect */}
      {isAnimating && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full border-2 border-transparent border-t-current rounded-full animate-spin" 
               style={{ color: getColor(animatedValue) }} />
        </div>
      )}
    </div>
  )
} 