import React from 'react'
import './Repo5.scss'
import '../Reposittories.scss'
import { useContext } from 'react'
import StorContext from '../../../../contexts/stor'
const Repo5 = () => {
  const { NumberView } = useContext(StorContext)
  let view = ""
  // console.log(NumberView);
  const checkNumberView = NumberView.includes("" + 5)
  // console.log(checkNumberView);
  if (checkNumberView) {
    view = "ViewColor"
  }
  return (
    <>
      <div className={view}>
        <div className="Repo">Repo5</div>
      </div>

    </>

  )
}

export default Repo5