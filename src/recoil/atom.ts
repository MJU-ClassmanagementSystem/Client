import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const authState = atom({
  key: 'auth',
  default: '',
  effects_UNSTABLE: [persistAtom],
})

export const modalState = atom({
  key: 'modal',
  default: {
    isOpened: false,
    name: '',
  },
})

export const userTypeState = atom({
  key: 'type',
  default: '',
  effects_UNSTABLE: [persistAtom],
})
