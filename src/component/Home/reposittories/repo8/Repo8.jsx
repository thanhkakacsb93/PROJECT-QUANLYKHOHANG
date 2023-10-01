import React from 'react'
import './Repo8.scss'
import '../Reposittories.scss'
import { useContext } from 'react'
import StorContext from '../../../../contexts/stor'

const Repo8 = () => {
  const { NumberView } = useContext(StorContext)
  let view = ""
  // console.log(NumberView);
  const checkNumberView = NumberView.includes("" + 8)
  // console.log(checkNumberView);
  if (checkNumberView) {
    view = "ViewColor"
  }
  return (
    <>
      <div className={view}>
        <div className="Repo">Repo8</div>
      </div>
    </>

  )
}

export default Repo8