import React from 'react'
import { Link } from 'react-router-dom'
import { removecat } from './Dashboard'

export default function Catitem({ cat }) {
    return (
        <tr>
            <td className='main-color' >{cat.name}</td>
            <td className='main-color' >{cat.key}</td>
            <td><Link to={`/Editcat/${cat.id}`}><i class="fa-solid fa-pen-to-square fa-xl" style={{color:'#a19d78'}}></i></Link></td>
            <td><i class="fa-solid fa-trash fa-xl" style={{color:" #c14e5f"}} onClick={e => removecat(cat.id)}></i></td>
        </tr>
    )

}
