import React from 'react'

class BlogCard extends React.Component {

	state = {
		detailClicked: false
	}

	handleSaveDelete = () => {
		if (this.props.saveBlog) {
			this.props.saveBlog(this.props.blogObj)
		} else if (this.props.deleteBlog) {
			this.props.deleteBlog(this.props.blogObj.id)
		}
	}

	handleDetail = () => {
		this.setState(prevState => ({detailClicked: !prevState.detailClicked}))
	}

	renderMoreDetails = () => {
		if (this.state.detailClicked) {
			return <h4>By: {this.props.blogObj.author} </h4>
		}
	}

	render() {
		return (
			<>
				<h5>{this.props.blogObj.title}</h5>
				<img src={this.props.blogObj.image} alt="blog" style={{ maxWidth: "70vw", maxHeight: "20vh" }} /><br />
				{this.renderMoreDetails()}
				<button onClick={this.handleDetail}>{this.state.detailClicked ? "Less Details" : "More Details"}</button><br />
				<button onClick={this.handleSaveDelete}>{this.props.saveBlog ? "Save" : "Delete"}</button><br />
			</>
		)
	}
}

export default BlogCard