import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DataFetch = () => {
    let[posts, setPosts] = useState([])
    let[length, setLength] = useState(10)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
            return response.json()
        })
        .then(data => setPosts(data.slice(0,length)))
        .catch((error) => {console.log(error)})
    },[length])

  return (
    <div>
        {
            posts.map((post) => {
                return <div className='p-5 shadow-2xl rounded-2xl' key={post.id}>
                    <Link to = {`/post/${post.id}`}>{post.id} . {post.title}</Link>
                </div>
            })
        }

{
        length < 50 ?
        <button onClick={() => setLength(length + 10)}>SHOW MORE</button>
        :
        <div>All posts are loaded</div>
        }
        {
         length > 10 ?
        <button onClick={() => setLength(length - 10)}>SHOW LESS</button>
        :
        <div>Minimum posts are loaded</div>
}

    </div>
  )
}

export default DataFetch