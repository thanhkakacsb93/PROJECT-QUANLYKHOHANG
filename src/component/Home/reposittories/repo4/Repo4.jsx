import React from 'react'
import './Repo4.scss'
import '../Reposittories.scss'
import { useContext } from 'react'
import StorContext from '../../../../contexts/stor'
const Repo4 = () => {
  const { NumberView } = useContext(StorContext)
  let view = ""
  // console.log(NumberView);
  const checkNumberView = NumberView.includes("" + 4)
  // console.log(checkNumberView);
  if (checkNumberView) {
    view = "ViewColor"
  }
  return (
    <>
      <div className={view}>
        <div className="Repo">Repo4</div>
      </div>

    </>

  )
}

export default Repo4