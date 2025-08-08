import { useState } from 'react'
import { ArrowRight } from 'lucide-react';

export default function DashboardCard({ 
  title, 
  children, 
  className = "", 
  color = "default",
  hoverEffect = true,
  onClick = null 
}) {
  const [isHovered, setIsHovered] = useState(false)

  const colorClasses = {
    default: "bg-gradient-to-br from-gray-900/80 to-gray-800/60 border-gray-700/50",
    blue: "bg-gradient-to-br from-blue-900/50 to-blue-800/30 border-blue-500/30",
    green: "bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-500/30",
    orange: "bg-gradient-to-br from-orange-900/50 to-orange-800/30 border-orange-500/30",
    red: "bg-gradient-to-br from-red-900/50 to-red-800/30 border-red-500/30",
    purple: "bg-gradient-to-br from-purple-900/50 to-purple-800/30 border-purple-500/30"
  }

  const hoverClasses = hoverEffect ? "hover:scale-105 hover:shadow-xl transition-all duration-300" : ""

  return (
    <div 
      className={`
        ${colorClasses[color]} 
        border rounded-xl p-6 
        backdrop-blur-sm 
        ${hoverClasses}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        transform: isHovered && hoverEffect ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered && hoverEffect 
          ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
          : '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      {title && (
        <h3 className="text-xl font-ocr-a text-gray-200 mb-4 flex items-center">
          {title}
          {isHovered && hoverEffect && (
            <span className="ml-2 text-sm text-gray-400 animate-pulse"><ArrowRight /></span>
          )}
        </h3>
      )}
      {children}
    </div>
  )
} 