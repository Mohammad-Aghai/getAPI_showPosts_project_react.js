import React from 'react'
import SideBarItem from './SideBarItem';
export default function SideBar(props) {
   let sidBArItems = null;
   const postArray = props.postInfo ? props.postInfo : null
   if (postArray != null) {
      sidBArItems = postArray.map((post, index) => {
         return <SideBarItem post={post} index={index} key={post.id} handleClick={props.handleClick} />
      });
   }
   return (
      <ul className="sideBar">
         {sidBArItems}

      </ul>
   )
}
