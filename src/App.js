import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/">
					<Home />
				</Route>
			</Router>
		</div>
	);
}

export default App;
