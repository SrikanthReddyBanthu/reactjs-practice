import React from 'react';

const NewsList = (props) => {

	const items = props.newsdata.map((news, index) => {
	  return(
		<tr key={index}>
			<td>{index + 1}</td>
			<td>{news.title}</td>
			<td>{news.feed}</td>
		</tr>
	  )}
    );

	return (
		<div>
			<h1>News</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>TITLE</th>
						<th>FEED</th>
					</tr>
				</thead>
				<tbody>
					{items}
				</tbody>
			</table>
		</div>
	)
}

export default NewsList;