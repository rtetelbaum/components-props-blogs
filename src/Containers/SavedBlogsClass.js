import React from 'react'
import BlogCard from '../Components/BlogCard'

class SavedBlogs extends React.Component {

	renderSavedBlogs() {
		return this.props.savedBlogs.map(blogObj => <BlogCard blogObj={blogObj} key={blogObj.id} saveBlog={this.props.saveBlog} />)
	}	

	// blogsArray = this.props.savedBlogs.map(blogObj => <BlogCard blogObj={blogObj} key={blogObj.id} saveBlog={this.props.saveBlog} />)
	
	render() {
		return (
			<>
				<h1>Saved Blogs</h1>
				{this.renderSavedBlogs()}
				{/* {this.blogsArray} */}
			</>
		)
	}

}

export default SavedBlogs