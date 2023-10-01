import React from 'react'
import './Repo7.scss'
import '../Reposittories.scss'
import { useContext } from 'react'
import StorContext from '../../../../contexts/stor'
const Repo7 = () => {
  const { NumberView } = useContext(StorContext)
  let view = ""
  // console.log(NumberView);
  const checkNumberView = NumberView.includes("" + 7)
  // console.log(checkNumberView);
  if (checkNumberView) {
    view = "ViewColor"
  }
  return (
    <>
      <div className={view}>
        <div className="Repo">Repo7</div>
      </div>

    </>

  )
}

export default Repo7