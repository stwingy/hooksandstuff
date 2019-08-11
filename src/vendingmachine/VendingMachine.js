import React from 'react'
import Chips from './Chips'
import Sardines from './Sardines'
import Soda from './Soda'
import NavbarVM from './NavbarVM'
import Home from './Home'
import {Switch,Route,withRouter} from 'react-router-dom'
function VendingMachine(props) {
 
    return (
        <div>
         <NavbarVM {...props} name="john"/>
          <Switch>
          
          <Route exact path ={ `${props.path}/chips/:name`} render={(routeprops)=><Chips {...routeprops} name ="John"/>}/>
          <Route exact path ={ `${props.path}/sardines` } component ={Sardines}/>
          <Route exact path ={ `${props.path}/soda` } component ={Soda}/>
          <Route exact path ={ `${props.path}/`} component ={Home}/>
          <Route  render ={()=><h1>NOT FOUND</h1>}/>
          </Switch>
        </div>
    )
}

export default withRouter(VendingMachine)
