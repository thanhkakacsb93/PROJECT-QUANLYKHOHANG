import React from 'react'
import './Repo2.scss'
import '../Reposittories.scss'
import { useContext } from 'react'
import StorContext from '../../../../contexts/stor'
const Repo2 = () => {
  const { NumberView } = useContext(StorContext)
  let view = ""
  // console.log(NumberView);
  const checkNumberView = NumberView.includes("" + 2)
  // console.log(checkNumberView);
  if (checkNumberView) {
    view = "ViewColor"
  }
  return (
    <>
      <div className={view}>
        <div className="Repo">Repo2</div>
      </div>

    </>

  )
}

export default Repo2