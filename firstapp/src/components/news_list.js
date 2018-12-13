import React from 'react';

const NewsList = (props) => {

	/*
	const todoItems = props.newsdata.map((todo) =>
      <li key={todo.id}>
        {todo.title}
      </li>
    );

	console.log(todoItems);
*/
	return (
		<div>
			<h1>News</h1>
			<table>
				<tr>
					<th>ID</th>
					<th>TITLE</th>
					<th>FEED</th>
				</tr>
				{props.newsdata.map((news) =>
				<tr>
					<td>{news.id}</td>
					<td>{news.title}</td>
					<td>{news.feed}</td>
				</tr>
				)}
			</table>
		</div>
	)
}

export default NewsList;