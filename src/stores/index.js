import create from 'zustand'

const stores = create((set, get) => ({
  text: 'Hello Kitty',
  data: null,
  async loadData () {
    const resp = await fetch('./static/data.json')
    const data = await resp.json()
    set({ data })
  }
}))

export default stores
