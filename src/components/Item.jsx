import React from 'react'
import { Link } from 'react-router-dom'
import { removeproduct } from './Dashboard'

export default function Item({ prod }) {
    return (
        <tr>
            <td className='main-color'>{prod.name}</td>
            <td>{prod.price}<span>.00</span><span className=' text-success'>$</span></td>
            <td><Link to={`/edit/${prod.id}`}><i class="fa-solid fa-pen-to-square fa-xl" style={{color:'#a19d78'}}></i></Link></td>
            <td><i class="fa-solid fa-trash fa-xl" style={{color:" #c14e5f"}} onClick={e => removeproduct(prod.id)}></i></td>
        </tr>
    )

}