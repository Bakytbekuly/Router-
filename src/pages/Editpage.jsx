import React from 'react'
import { useParams } from 'react-router-dom'


export const Editpage = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Edit page {id}</h1>
        </div>
    )
}
