import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export const Blogpage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])
    return (
        <div>
            <h1>This is Posts</h1>
            {
                posts.map((item) => (
                    <Link key={item.id} to={`/posts/${item.id}`}>
                        <li>{item.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}
