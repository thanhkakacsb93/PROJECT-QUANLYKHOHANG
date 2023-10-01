// import { PlusOutlined } from '@ant-design/icons'
// import { Card } from 'antd'
import "./AddProduct.scss"
// import Meta from 'antd/es/card/Meta'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const navigateFormAddProduct = useNavigate()
    const Addproducthandle = () => {
        navigateFormAddProduct("addproduct")
    }
    return (
        <div onClick={Addproducthandle} className="BtnAddSuplies">
            <button>Thêm vật tư</button>
        </div>
    )
}

export default AddProduct