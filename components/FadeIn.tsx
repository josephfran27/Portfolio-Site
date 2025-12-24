'use client'

import { useEffect, useRef, useState } from 'react'

interface FadeInProps {
    children: React.ReactNode
    delay?: number
    className?: string
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false)
    const domRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            })
        }, {
            threshold: 0.1 
        })

        const currentElement = domRef.current
        if(currentElement) {
            observer.observe(currentElement)
        }

        return () => {
            if(currentElement) {
                observer.unobserve(currentElement)
            }
        }
    }, []);

    return (
        <div
            ref={domRef}
            className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}