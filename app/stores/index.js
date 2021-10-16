import create from 'zustand'

const useAppStore = create((set, get) => ({
  test: 'Hello Kitty',
}))

export default useAppStore
