import React from 'react'
import BlogCard from '../Components/BlogCard'
import blogs from '../fakeAPI'



function BlogsList() {

	let blogsArray = blogs.map(blogObj => <BlogCard blogObj={blogObj} key={blogObj.id} />)
	
	return (
		<>
			{blogsArray}
		</>
	)
}

export default BlogsList