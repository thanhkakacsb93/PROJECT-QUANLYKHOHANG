import { Button, Input, Form, message } from 'antd';
import axios from 'axios';
import React from 'react'
import { postAPIinformationProduct } from '../../../services/Servies';
import "./formAdd.scss"

const FormAdd = () => {
    const onFinish = (values) => {
        axios.get("https://64c9c30eb2980cec85c264cf.mockapi.io/api/informationProduct")
            .then((rs) => {
                const idx = rs.data.findIndex((item) => item.name === values.name
                    && item.repoNumber === values.repoNumber)
                if (idx === -1) {
                    postAPIinformationProduct(values)
                    alert('đã thêm')
                }
                else {
                    let checkSL = +values.SL - +1
                    console.log(checkSL);
                    if (checkSL) {
                        rs.data[idx].SL = +rs.data[idx].SL + +values.SL
                        const UpdateSL = { ...rs.data[idx], SL: rs.data[idx].SL }
                        let id = rs.data[idx].id
                        console.log(id);
                        axios.put("https://64c9c30eb2980cec85c264cf.mockapi.io/api/informationProduct/" + id, UpdateSL)
                        // form.resetFields()
                        alert("đã cập nhật")
                    }
                    else {
                        alert('số thập phân sử dụng dấu .')
                    }
                }
            })
    };
    return (
        <div className='box-formadd'>
            <Form className='thanh'
                labelCol={{
                    span: 8
                }}
                wrapperCol={{
                    span: 16
                }}
                style={{
                    maxWidth: 600
                }}

                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="repoNumber"
                    name="repoNumber"
                    rules={[
                        {
                            required: true,
                            message: 'Please input repoNumber!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <p>! số thập phân dùng dấu .</p>
                <Form.Item
                    label="SL"
                    name="SL"
                    rules={[
                        {
                            required: true,
                            message: 'Please input SL',
                        },
                    ]}
                >

                    <Input />

                </Form.Item>
                <Form.Item
                    label="DVT"
                    name="DVT"
                    rules={[
                        {
                            required: true,
                            message: 'Please input DVT!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    className='center'
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        thêm
                    </Button>
                </Form.Item>
            </Form>
        </div>


    )
}
export default FormAdd