import React from 'react'
export default function SideBarItem(props) {
    return (
       <li className='sideBar' ><button className='sideBar__item' onClick={(e)=>props.handleClick(props.index)}>{props.post.title}</button></li>
    )
}
