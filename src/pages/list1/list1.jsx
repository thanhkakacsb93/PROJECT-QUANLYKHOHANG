import { Button, Form, Input } from 'antd';
import React, { useState } from 'react'
import { useContext } from 'react';
import StorContext from '../../contexts/stor';
import './list1.scss'

const ListSupplies = (props) => {
    const { name, SL, DVT, index, id, repoNumber } = props;
    const [valuseInput, setvaluseInput] = useState("")
    const { ArrExprot, setArrExprot } = useContext(StorContext)
    const onFinish = (values) => {
        console.log("values", values);
        let list = repoNumber.filter((item) => item.id === id)
        console.log("list", list);
        const listExport = list.map((item) => ({ ...item }))
        listExport[0].SL = values.export
        console.log("listExport", listExport);
        const UpdateArrExprot = [...ArrExprot, listExport]
        console.log("UpdateArrExprot", UpdateArrExprot);
        setArrExprot(UpdateArrExprot)
    }
    // listExport=[{...list}]
    // setArrExprot([...list])
    // setvaluseInput('');
    console.log("ArrExprot", ArrExprot);
    return (
        <>

            <tr>
                <td>{index}</td>
                <td>{name}</td>
                <td>{SL}</td>
                <td>{DVT}</td>
                {/* <td>
                    <form action="" onSubmit={handleExport}> */}
                {/* <label htmlFor="export"></label> */}
                {/* <input type="number" id='export' onChange={} />
                        <button style={submit}>thêm vào xuất</button>
                    </form>
                </td> */}
                <td>
                    <Form
                        // name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            // label="xuất"
                            name="export"
                        >
                            <Input
                                size="small"
                                value={valuseInput}
                                onChange={(e) => setvaluseInput(e.target.value)} />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                xuất
                            </Button>
                        </Form.Item>
                    </Form>
                </td>


            </tr>
        </>


    );
}

export default ListSupplies