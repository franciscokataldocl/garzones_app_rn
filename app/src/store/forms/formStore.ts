import { create } from 'zustand'

interface FormState{
  bears: number
  increase: (by: number) => void
}

const useFormStore = create<FormState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))