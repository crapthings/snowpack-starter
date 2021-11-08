import create from 'zustand'

const useAppStore = create((set, get) => ({
  text: 'Hello Kitty',
}))

export default useAppStore
