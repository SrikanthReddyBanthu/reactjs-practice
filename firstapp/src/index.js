import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import NewsList from './components/news_list'
import JSON from './db.json';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			news: JSON,
			filteredNews: JSON
		}
	}

	filterNews(keyword) {
		let filtered = this.state.news.filter((item) => {
			return item.title.indexOf(keyword) > -1;
		})

		this.setState({filteredNews: filtered})
	}

	render() {

		return (
			<div>
				<Header newsSearch={(data) => this.filterNews(data)}/>
				<NewsList newsdata={this.state.filteredNews}/>
			</div>
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))