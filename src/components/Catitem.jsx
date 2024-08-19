import React from 'react'
import { Link } from 'react-router-dom'
import { removecat } from './Dashboard'

export default function Catitem({ cat }) {
    return (
        <tr>
            <td className='main-color' style={{ fontFamily: "cursive" }}>{cat.name}</td>
            <td className='main-color' style={{ fontFamily: "cursive" }}>{cat.key}</td>
            <td><Link to={`/Editcat/${cat.id}`} className="btn btn-info">Update</Link></td>
            <td><button className='btn bg-danger' onClick={e => removecat(cat.id)}>Remove</button></td>
        </tr>
    )

}
