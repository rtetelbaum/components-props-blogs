import React from 'react'
import BlogCard from '../Components/BlogCard'
import blogs from '../fakeAPI'

function BlogsList(props) {

	const blogsArray = blogs.map(blogObj => <BlogCard blogObj={blogObj} key={blogObj.id} saveBlog={props.saveBlog} />)
	
		return (
			<>
				<h1>Blogs List</h1>
				{blogsArray}
			</>
		)

}

export default BlogsList