import create from 'zustand'

export const dataStore = create((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
}))
