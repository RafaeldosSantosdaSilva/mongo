import React from 'react'
import { useSelector } from 'react-redux'
import '../style/main.css'

const Alert = () => {
  const isShow = useSelector((state) => state.layout.showMessage)

  return (
    <>
    {isShow && (
         <div className="alertMessage">
            <h4>Produto adicionado ao carrinho!</h4>
         </div>
    )}
    </>
  )
}

export default Alert
