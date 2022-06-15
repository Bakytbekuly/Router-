import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

export const Singlepage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => setData(json))

    }, [id])

    const goBack = () => (navigate(-1))

    return (
        <div>
            {data && (
                <>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                    <button onClick={goBack}>Back</button>
                    <Link to={`/posts/${id}/edit`}>Edit Post</Link>
                </>
            )}
        </div>
    )
}
