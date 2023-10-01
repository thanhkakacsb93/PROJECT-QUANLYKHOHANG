import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import StorContext from '../../contexts/stor'
import AddProduct from './addProduct/AddProduct'
import "./Home.scss"
import Repo1 from './reposittories/repo1/Repo1'
import Repo2 from './reposittories/repo2/Repo2'
import Repo3 from './reposittories/repo3/Repo3'
import Repo4 from './reposittories/repo4/Repo4'
import Repo5 from './reposittories/repo5/Repo5'
import Repo6 from './reposittories/repo6/Repo6'
import Repo7 from './reposittories/repo7/Repo7'
import Repo8 from './reposittories/repo8/Repo8'

const Home = () => {
    const { stateloginUser, stateloginAdm, setlocalrepositor, setNavigateListRepo } = useContext(StorContext)
    const navigate = useNavigate()
    const ProductHandle = (reponumber) => {
        setNavigateListRepo(1)
        if (stateloginUser === false && stateloginAdm === false) {
            setlocalrepositor(reponumber)
            navigate("/login ")
        }
        else {
            setlocalrepositor(reponumber)
            navigate("/list1")

        }

    }
    let AddSupplies
    if (stateloginAdm === true) {
        AddSupplies = <AddProduct />
    }
    return (
        <>
            {AddSupplies}
            <div className='boxHome'>
                <div onClick={() => ProductHandle(1)}>
                    <Repo1 />
                </div>
                <div onClick={() => ProductHandle(2)}>
                    <Repo2 />
                </div>
                <div onClick={() => ProductHandle(3)}>
                    <Repo3 />
                </div>
                <div onClick={() => ProductHandle(4)}>
                    <Repo4 />
                </div>
                <div onClick={() => ProductHandle(5)}>
                    <Repo5 />
                </div>
                <div onClick={() => ProductHandle(6)}>
                    <Repo6 />
                </div>
                <div onClick={() => ProductHandle(7)} >
                    <Repo7 />
                </div>
                <div onClick={() => ProductHandle(8)}>
                    <Repo8 />
                </div>
            </div>


        </>

    )
}

export default Home