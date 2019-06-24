import React from 'react'
import './Posts.css'
const Posts = ({posts, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }



    return (
        <ul>
            {posts.map((post) => {
                return <li key={post.id} loading={loading}>
                {post.title}
                </li>
            })}
        </ul>
    )
}

export default Posts