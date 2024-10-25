// src/app/page.tsx
'use client'
import './style.scss'
import { FaUserCircle } from "react-icons/fa";


export default function User() {
  return(
    <div className="user">
        <div className='user-image'>
          <FaUserCircle />
        </div>
        <div className='user-name'>
            <h2>User name</h2>
        </div>
    </div>
  ); 
}
