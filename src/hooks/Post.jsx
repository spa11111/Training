import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {

    //params - {id:12}
    let params = useParams()
    const id = params.id

    let[post, setPost] = useState({})
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => setPost(response.data))
        .catch(error => console.log(error))
    }, [])

    //const {id} = useParams()
  return (
    <div>
        <h1 className='font-bold'>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}

export default Post