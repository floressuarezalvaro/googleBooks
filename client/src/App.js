import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import NavBar from "./components/NavBar";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Error from "./pages/Error"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
	return (
		<div className="App">
			<ToastContainer />
			<Router>
      		<NavBar />
					<Switch>
						<Route path="/saved" component={Saved} />
						<Route path="/" component={Search} />
						<Route>
							<Error />
						</Route>
					</Switch>
			</Router>
		</div>
	);
}

export default App;