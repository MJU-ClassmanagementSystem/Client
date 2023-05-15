import classNames from 'classnames/bind'
import { useSetRecoilState } from 'recoil'
import { AlertIcon } from 'src/assets/svgs'
import Portal from 'src/components/shared/Portal'
import { modalState } from 'src/recoil/atom'

import styles from './modal.module.scss'

type ModalProps = {
  name: string
}

const cx = classNames.bind(styles)

const Modal = ({ name }: ModalProps) => {
  const setModalState = useSetRecoilState(modalState)

  const handleClose = () => {
    setModalState({ isOpened: false, name: '' })
  }

  return (
    <Portal>
      <div className={cx('backdrop')}>
        <div className={cx('modal')}>
          <AlertIcon />
          <p className={cx('alertMessage')}>
            {name} 학생이 장시간 자리에서 이탈했습니다.
          </p>
          <button className={cx('button')} type="button" onClick={handleClose}>
            확인
          </button>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
