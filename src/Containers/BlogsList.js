import React from 'react'
import BlogCard from '../Components/BlogCard'
import blogs from '../fakeAPI'

class BlogsList extends React.Component {

	blogsArray = blogs.map(blogObj => <BlogCard blogObj={blogObj} key={blogObj.id} saveBlog={this.props.saveBlog} />)
	
	render() {
		return (
			<>
				<h1>Blogs List</h1>
				{this.blogsArray}
			</>
		)
	}

}

export default BlogsList