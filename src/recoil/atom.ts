import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { UserType } from 'src/types'

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

export const userTypeState = atom<UserType>({
  key: 'type',
  default: 'teacher',
  effects_UNSTABLE: [persistAtom],
})
