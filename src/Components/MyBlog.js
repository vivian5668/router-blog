import React, { Component } from 'react';

const MyBlog = (props) => {
	const jsxAuthors = props.author.map((author, index) => {
		return <li key={index}> {author} </li>
	})
	const jsxComments = props.comments.map((comment, index) => {
		return <li key={index}> {comment} </li>
	})
	
	return (
		<div>
			<h1> MyBlog </h1>
			<h2> 
				{props.title}
			</h2>
			<p> authors {jsxAuthors}</p>
			<p> {props.body} </p>
			<p> comments {jsxComments} </p>
		</div>
	)
}


export default MyBlog