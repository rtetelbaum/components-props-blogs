import React from 'react'

class BlogCard extends React.Component {

	handleClick = () => {
		if (this.props.saveBlog) {this.props.saveBlog(this.props.blogObj)}
	}

	render() {
		return (
			<>
				<h5>{this.props.blogObj.title}</h5>
				<img src={this.props.blogObj.image} alt="blog" style={{ maxWidth: "70vw", maxHeight: "20vh" }} /><br />
				<button onClick={this.handleClick}>Save</button><br />
				<button>Visit</button>
			</>
		)
	}
}

export default BlogCard