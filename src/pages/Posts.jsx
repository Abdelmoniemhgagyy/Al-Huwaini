import React from 'react'
import "./posts.css"
import Post from "../components/Post"
import posts from "../data/posts"
function Posts({}) {
  return (
    <div className="container">
      {posts.map((post) => (
        <Post key={post.id} content={post.content}  />
      ))}
    </div>
  )
}

export default Posts