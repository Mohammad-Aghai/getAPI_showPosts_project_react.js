import React from 'react';
export default function PostComments(props) {
  return (
    <div className="comment__item">{props.comment.body}</div>
  )
}
