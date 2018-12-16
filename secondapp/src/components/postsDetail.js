import React, {Component} from 'react';

class PostsDetail extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="container">
				<div className="panel panel-warning">
				   <div className="panel-heading">Post Detail Heading</div>
				   <div className="panel-body">Post Detail Content:{this.props.match.params.id}</div>
				</div>
			</div>

		)
	}
}

export default PostsDetail;