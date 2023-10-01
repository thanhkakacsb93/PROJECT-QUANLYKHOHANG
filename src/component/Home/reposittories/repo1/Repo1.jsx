import React from 'react'
import './Repo1.scss'
import '../Reposittories.scss'
import { useContext } from 'react'
import StorContext from '../../../../contexts/stor'

const Repo1 = () => {
  const { NumberView } = useContext(StorContext)
  let view = ""
  const checkNumberView = NumberView.includes("" + 1)
  // console.log(checkNumberView);
  if (checkNumberView) {
    view = "ViewColor"
  }
  return (
    <>
      <div className={view}>
        <div className="Repo">Repo1</div>
      </div>
    </>
  )
}

export default Repo1