import React, {Component} from 'react';

class PostsDetail extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="container">
				<div class="panel panel-warning">
				   <div class="panel-heading">Post Detail Heading</div>
				   <div class="panel-body">Post Detail Content:{this.props.match.params.id}</div>
				</div>
			</div>

		)
	}
}

export default PostsDetail;