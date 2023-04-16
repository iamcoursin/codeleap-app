import React from 'react'

export const Button = ({name,label,handleClick, type, isDisable}) => {
  return (
            <button type={type} disabled={isDisable} onClick={handleClick} className={name}>
                {label}
            </button>
  )
}
