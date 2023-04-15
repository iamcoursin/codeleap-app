import React from 'react'

export const Button = ({name,label,handleClick, type, isDisable}) => {
  return (
            <button type={type} onClick={handleClick} className={name}>
                {label}
            </button>
  )
}
