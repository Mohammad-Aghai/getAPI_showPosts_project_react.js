import React from 'react'
import PostImage from './PostImage'
import PostTitle from './PostTitle'
import PostContent from './PostContent';
import PostComments from './PostComments';


export default function Post(props) {
  let post = props.postInfo ? props.postInfo : null;
  let postComment = props.comments
  if (postComment && post) {
    let commentPost = [];
    postComment.forEach((comment) => {
      if (comment.postId === post.id) {
        commentPost.push(comment)
      }
    })
    let commentElm = commentPost.map((comment) => {
      return <PostComments comment={comment} key={comment.id} />
    })
    return <div className="post" key={post.id}>
      <PostImage post={post} />
      <PostTitle postTitle={post.title} />
      <PostContent postContent={post.body} />
      <div className='post__comments'>
        <h2>comments:</h2>
        {commentElm}
      </div>
    </div>
  }
}
