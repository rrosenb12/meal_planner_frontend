import React, {useState, useCallback} from 'react'
import closedSidebar from "../Images/closed-sidebar.png"

export default function NavBar(){

    const [isClicked, setIsClicked] = useState(false)
    const click = useCallback(() => setIsClicked(!isClicked), [isClicked, setIsClicked])

    return(
        <div className="navbar">
            
            <side-menu>
                <img src={closedSidebar} alt="the sidebar menu is closed" onClick={click}/>
                <p>is clicked? {String(isClicked)}</p>
                <ul className="sidebar-options" >
                    <li>
                        Login
                    </li>
                    <li>
                        Signup
                    </li>
                </ul>
            </side-menu>
            <title-right>mealzy</title-right>
        </div>
    )
}