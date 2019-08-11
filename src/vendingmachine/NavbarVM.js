import React from 'react'
import {NavLink,withRouter} from 'react-router-dom'
import "./NavbarVm.css"
function NavbarVM(props) {
  
    return (
        <nav className ="NavbarVM">
            <NavLink activeClassName="NavbarVM-active" exact to={ `${props.path}` }>Home</NavLink>
           <NavLink activeClassName="NavbarVM-active"  exact to={ `${props.path}/chips/${props.name}` }>Chips</NavLink>
          <NavLink activeClassName="NavbarVM-active" exact to={ `${props.path}/sardines` }>Sardines</NavLink>
          <NavLink activeClassName="NavbarVM-active" exact to={ `${props.path}/soda` }>Soda</NavLink>  
        </nav>
    )
}

export default NavbarVM
