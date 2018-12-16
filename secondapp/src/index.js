import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/posts';
import Profile from './components/profile';
import PostsDetail from './components/postsDetail';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			news: JSON,
			filteredNews: JSON
		}
	}

	render() {

		return (
    			<div>
    				<h1>Routing</h1>
    			</div>
    			)
	}
}

ReactDOM.render(
	<BrowserRouter>
		<div>
			<header>
            	<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="navbar-header">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">WebSiteName</a>
						</div>
						<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="nav navbar-nav">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/posts">Posts</Link></li>
							<li> <Link to="/profile">Profile</Link></li>
						</ul>
						</div>
					</div>
				</nav>
			</header>
			<Route exact path="/" component={App}/>
			<Route exact path="/posts" component={Posts}/>
			<Route path="/posts/:id" component={PostsDetail}/>
			<Route path="/profile" component={Profile}/>
		</div>
	</BrowserRouter>
, document.getElementById('root'))