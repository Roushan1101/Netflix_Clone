import React, { useState,useEffect } from 'react';
import './Navbar.css'


function Nav(){

    return(
<div calssName="nav"

>
<img
className="nav_logo"
src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
alt="Netflix Logo"

></img>

<img src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png"
className="nav_avatar"></img>
        </div>
    )
}

export default Nav;