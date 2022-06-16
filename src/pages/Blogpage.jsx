import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BlogFilter } from '../components/BlogFilter'


export const Blogpage = () => {
    const [posts, setPosts] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()

    const postQuery = searchParams.get('post') || ""
    const latest = searchParams.has("latest")

    const startForm = latest ? 80 : 1;



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])
    return (
        <div>
            <h1>This is Posts</h1>
            <BlogFilter setSearchParams={setSearchParams} postQuery={postQuery} latest={latest} />
            <Link to="/posts/new" style={{ margin: "1rem 0", display: "inline-block" }}>Add new post</Link>
            {
                posts.filter(
                    post => post.title.includes(postQuery) && post.id >= startForm
                ).map((item) => (
                    <Link key={item.id} to={`/posts/${item.id}`}>
                        <li>{item.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}
