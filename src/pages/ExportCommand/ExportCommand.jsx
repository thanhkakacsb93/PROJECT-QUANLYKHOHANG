import Item from 'antd/es/list/Item'
import React from 'react'
import { useContext } from 'react'
import StorContext from '../../contexts/stor'
import "./ExportCommand.scss"
import Listtemplate from './ListTemplate/Listtemplate'

const dataTest = [
    {
        name: "cưa xích",
        SL: 64.5,
        DVT: "cái",
        id: "2"
    },
    {
        name: "máy mài",
        SL: 64.5,
        DVT: "cái",
        id: "3"
    },
    {
        name: "búa",
        SL: 64.5,
        DVT: "cái",
        id: "4"
    },
    {
        DVT: "cái",
        SL: "2",
        id: "5",
        name: "máy mài",
        repoNumber: "1"
    }
]

const ExportCommand = () => {
    const { stateloginUser, stateloginAdm, ArrExprot } = useContext(StorContext)
    let listExport
    // if (ArrExprot === []) {
    //     listExport = ""
    // }
    // else {
    listExport = dataTest.map((item, idx) => {
        return <Listtemplate
            key={item.id}
            name={item.name}
            DVT={item.DVT}
            SL={item.SL}
            idx={idx + 1} />
    })
    // }
    // console.log("listExport", listExport)


    return (
        <>
            <div className='box-tabaleExportCommand'>
                {/* <table className='tabaleExportCommand'>
                    <thead>
                        <tr className='topExportCommand'>
                            <td className='topExportCommand-left'>
                                <span>  BTL VÙNG CẢNH SÁT BIỂN 2
                                    <br /><b>PHÒ<span className='b1'>NG KỸ TH</span>UẬT<br /> </b>
                                    <br />
                                    Số:
                                </span>
                            </td>
                            <td className='topExportCommand-right'>
                                <span> <b>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM <br />
                                    <span className='b1'>Độc lập - Tự do - Hạnh phúc</span></b><br />
                                    <br />
                                    <span className='b2'> Quảng Nam, ngày......tháng.....năm 2023</span>
                                </span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='ExportCommand'> <b>LỆNH XUẤT KHO</b> </tr>
                    </tbody>


                </table>

                <table className='box-listExportCommand'>
                    <thead>
                        <tr className='listExportCommand'>
                            <th className='Column1'>STT</th>
                            <th className='Column2'>Tên vật tư</th>
                            <th className='Column3'>ĐVT</th>
                            <th className='Column4'>Số lượng</th>
                            <th className='Column5'>Thực nhận</th>
                            <th className='Column6'>Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listExport}
                    </tbody>
                </table> */}
                <table>
                    <thead>
                        <th>
                            <td>sdff</td>
                        </th>



                    </thead>
                    <tbody>
                        <tr className='topExportCommand'>
                            <td className='topExportCommand-left'>
                                <span>  BTL VÙNG CẢNH SÁT BIỂN 2
                                    <br /><b>PHÒ<span className='b1'>NG KỸ TH</span>UẬT<br /> </b>
                                    <br />
                                    Số:
                                </span>
                            </td>
                            <td className='topExportCommand-right'>
                                <span> <b>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM <br />
                                    <span className='b1'>Độc lập - Tự do - Hạnh phúc</span></b><br />
                                    <br />
                                    <span className='b2'> Quảng Nam, ngày......tháng.....năm 2023</span>
                                </span>
                            </td>
                        </tr>
                        <tr className='ExportCommand'> <b>LỆNH XUẤT KHO</b> </tr>
                        <tr className='listExportCommand'>
                            <th className='Column1'>STT</th>
                            <th className='Column2'>Tên vật tư</th>
                            <th className='Column3'>ĐVT</th>
                            <th className='Column4'>Số lượng</th>
                            <th className='Column5'>Thực nhận</th>
                            <th className='Column6'>Ghi chú</th>
                        </tr>
                    </tbody>
                </table>


            </div>


        </>

    )
}

export default ExportCommand