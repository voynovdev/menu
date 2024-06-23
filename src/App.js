import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from './components/Menu'
import HomePage from './components/HomePage'
import DriftPage from './components/DriftPage'
import ForzaPage from './components/ForzaPage'
import TimeAttackPage from './components/TimeAttackPage'


export default function App() {
	return (
		<Router>
		  <div>
		    <Menu />
		    <div className="page">
		      <Route path="/" exact component={HomePage} />
		      <Route path="/timeattack" component={TimeAttackPage} />
					<Route path="/drift" component={DriftPage} />
		      <Route path="/forza" component={ForzaPage} />
		    </div>
		  </div>
		</Router>
	);
}