import { Input } from 'antd';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Header.scss"
import { OrderedListOutlined } from "@ant-design/icons"
import { useContext } from 'react';
import StorContext from '../../contexts/stor';
import { useEffect } from 'react';
import axios from 'axios';


const Header = () => {
    const { stateloginUser, setstateloginUser, stateloginAdm, setstateloginAdm, setNumberView, setNavigateExportCommand } = useContext(StorContext)
    const { Search } = Input;
    const navigate = useNavigate()
    const onSearch = (value) => {
        console.log(value)
        axios.get("https://64c9c30eb2980cec85c264cf.mockapi.io/api/informationProduct")
            .then((rs) => {
                const arrvalueSearch = rs.data.filter((item) => item.name.toUpperCase().includes(value.toUpperCase()))
                console.log(arrvalueSearch);
                const arrNumberView = arrvalueSearch.map((itemt) => itemt.repoNumber)
                console.log(arrNumberView);
                setNumberView(arrNumberView)
            })
    };
    const dataSessionStorageUser = JSON.parse(sessionStorage.getItem("account"))
    // console.log("dataSessionStorage", dataSessionStorageUser)
    if (dataSessionStorageUser) {
        const checkUsernameDataSessionStorage = dataSessionStorageUser.Username.includes("adm")
        // console.log('checkUsernameDataSessionStorage', checkUsernameDataSessionStorage)
        if (checkUsernameDataSessionStorage === true) {
            useEffect(() => { setstateloginAdm(true) }, [stateloginAdm])
        }
        else {
            useEffect(() => { setstateloginUser(true) }, [stateloginUser])
        }
    }
    let account
    if (stateloginUser === false && stateloginAdm === false) {
        account = <NavLink to="/login " className="Link">Đăng nhập</NavLink>
    }
    else {
        account = <NavLink to="contact" className="Link">Tài khoản</NavLink>
    }
    const handleExportCommand = () => {
        setNavigateExportCommand(1)
        if (stateloginUser === false && stateloginAdm === false) {
            navigate("/login ")
        }
        else {
            navigate("ExportCommand")
        }
    }
    return (
        <header>
            <div className='box-Header'>
                <NavLink className="Link" to="/"><span>THANHKAKA</span></NavLink>
                <Search style={{ maxWidth: "400px" }} placeholder="input search text" onSearch={onSearch} enterButton />
                {account}
                <div className='Link'>đã nhập</div>
                <div>đã xuất</div>
                {/* <NavLink to="ExportCommand" className="Link"></NavLink> */}
                <div className="Link" onClick={handleExportCommand}>lệnh xuất <OrderedListOutlined /></div>
            </div>
        </header>
    )
}

export default Header