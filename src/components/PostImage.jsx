import React from 'react'
export default function PostImage(props) {
  return (
    <img src={props.post.image} alt={props.post.title} className='post__image' />
  )
}
