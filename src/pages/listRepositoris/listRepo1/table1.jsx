
import axios from 'axios'
import React from 'react'
import "./table1.scss"
import ListSupplies from "../../list1/list1"
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import StorContext from '../../../contexts/stor'
import { useNavigate } from 'react-router-dom'
export const Product = () => {
    const navigate = useNavigate()
    const { localrepositor } = useContext(StorContext)
    const [supplies, setsupplies] = useState([])
    useEffect(() => {
        axios.get("https://64c9c30eb2980cec85c264cf.mockapi.io/api/informationProduct")
            .then((rs) => {
                console.log("rs.data", rs.data);
                const repoNumber = rs.data.filter((item) => item.repoNumber === localrepositor + "")
                const listrepo = repoNumber.map((item, idx) => {
                    return <ListSupplies
                        key={idx}
                        index={idx + 1}
                        name={item.name}
                        SL={item.SL}
                        DVT={item.DVT}
                        id={item.id}
                        repoNumber={repoNumber} />
                })
                setsupplies(listrepo)
            })
    }, [])
    const HandleBackHomePage = () => {
        navigate("/")
    }
    return (
        <>
            <div className='HomePage' onClick={HandleBackHomePage}>Về trang chủ</div>
            <p className='NameRepo'>
                <strong>DANH SÁT VẬT TƯ CÓ TRONG KHO {localrepositor}</strong>
            </p>
            <div className='box-product'>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>tên vật tư</th>
                            <th>SL</th>
                            <th>DVT</th>
                            <th>XUẤT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supplies}
                    </tbody>
                </table>
            </div>

        </>
    )
}
