'use client'

import { useState, createContext, useContext, useMemo } from 'react'
import Fuse from 'fuse.js'
import { commands, Command } from '@/lib/commands'

interface SearchContextType {
  search: (query: string) => Command[]
}

const SearchContext = createContext<SearchContextType>({} as SearchContextType)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const fuse = useMemo(() => {
    return new Fuse(commands, {
      keys: ['name', 'description', 'descriptionZh'],
      threshold: 0.3,
    })
  }, [])

  const search = (query: string): Command[] => {
    if (!query.trim()) return commands
    return fuse.search(query).map(result => result.item)
  }

  return (
    <SearchContext.Provider value={{ search }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  return useContext(SearchContext)
}
