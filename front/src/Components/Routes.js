import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";


function Routes(){
	return (
		<Switch>
			<Route exact path="/Home"><Home/></Route>
			<Route exact path="/dogs/:dog" component={Detail}/>
		</Switch>
	);
}

export default Routes;