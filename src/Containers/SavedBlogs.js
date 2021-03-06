import React from 'react'
import BlogCard from '../Components/BlogCard'

function SavedBlogs(props) {

	const blogsArray = props.savedBlogs.map(blogObj => <BlogCard blogObj={blogObj} key={blogObj.id} deleteBlog={props.deleteBlog} />)
	
	return (
		<>
			<h1>Saved Blogs</h1>
			{blogsArray}
		</>
	)

}

export default SavedBlogs