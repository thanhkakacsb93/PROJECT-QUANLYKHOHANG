import React from 'react'
import "./Listtemplate.scss"

const Listtemplate = (props) => {
    const { idx, name, DVT, SL } = props
    return (
        <>
            <tr>
                <td className='CtrlE'><span>{idx}</span></td>
                <td className='CtrlE'><span>{name}</span></td>
                <td className='CtrlE'><span>{DVT}</span></td>
                <td className='CtrlE'><span>{SL}</span></td>
                <td className='CtrlE'><span></span></td>
                <td className='CtrlE'><span></span></td>
            </tr>
        </>
    )
}

export default Listtemplate