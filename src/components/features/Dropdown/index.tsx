import classNames from 'classnames/bind'
import { Dispatch, MouseEvent, SetStateAction, useRef, useState } from 'react'
import useOnClickOutside from 'src/hooks/useOnClickOutside'

import styles from './dropdown.module.scss'

const cx = classNames.bind(styles)

interface DropdownProps {
  title: string
  itemList: string[]
  onClick: Dispatch<SetStateAction<string>>
  value: string
}

const Dropdown = ({ itemList, title, value, onClick }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const listRef = useRef(null)

  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsOpen((prev) => !prev)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSelectItem = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onClick(e.currentTarget.innerText)
    setIsOpen(false)
  }
  useOnClickOutside(listRef, handleClose)

  return (
    <div className={cx('dropdown')} ref={listRef}>
      <label className={cx('label')} htmlFor="title">
        {title}
      </label>
      <button className={cx('menuButton')} id="title" onClick={handleToggle}>
        {value}
      </button>
      {isOpen && (
        <ul className={cx('list')}>
          {itemList.map((item, index) => (
            <button key={`${index + 1}-${item}`} onClick={handleSelectItem}>
              <li className={cx('item')}>{item}</li>
            </button>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
