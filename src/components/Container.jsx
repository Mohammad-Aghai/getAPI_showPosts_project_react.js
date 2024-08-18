import React, { Component } from 'react'
import Post from './Post';
import SideBar from './SideBar';
import "../css/main.css"
export class Container extends Component {
   constructor(props) {
      super(props)
      this.state = {
         posts: null,
         comments: null,
         currentPage: 0
      }

      this.handleItemClick = (index) => {
         this.setState({ currentPage: index })
      }
   }
   async postInfo() {
      const posts = await fetch('http://localhost:3001/posts')
      return (await posts.json())
   }
   async commentsInfo() {
      const comments = await fetch('http://localhost:3001/comments')
      return (await comments.json())
   }
   componentDidMount() {
      this.postInfo().then((result) => {
         this.setState({
            posts: result,

         })
      }).catch((err) => {
         console.log('you have error in postInfo promise', err);
      });
      this.commentsInfo().then(((res) => {
         this.setState({

            comments: res
         })
      })).catch((err) => console.log('you have error in commentInfo promise', err))
   }
   render() {
      return (
         <div className='container'>
            {null != this.state.currentPage && <Post comments={null != this.state.comments && this.state.comments} postInfo={null != this.state.posts && this.state.posts[this.state.currentPage]} />}
            <SideBar postInfo={this.state.posts} handleClick={this.handleItemClick} />
         </div>
      )
   }
}
export default Container