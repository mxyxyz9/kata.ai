'use client'

import { useState, useEffect } from 'react'

export default function useSweets() {
  const [sweets, setSweets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSweets = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sweets/`)
        if (!response.ok) {
          throw new Error('Failed to fetch sweets')
        }
        const data = await response.json()
        setSweets(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSweets()
  }, [])

  return { sweets, loading, error }
}