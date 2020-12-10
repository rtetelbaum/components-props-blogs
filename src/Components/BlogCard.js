import React from 'react'

class BlogCard extends React.Component {

	state = {
		counter: 0
	}

	clickHandler = () => {
		this.setState( prevSate => ({counter: prevSate.counter + 1}))
	}

	render() {
		return (
			<>
				<h5>{this.props.blogObj.title}</h5>
				<img src={this.props.blogObj.image} alt="blog" style={{ maxWidth: "70vw", maxHeight: "20vh" }} /><br />
				<p>Saved: {this.state.counter} times</p>
				<button onClick={this.clickHandler}>Save</button><br />
				<button>Visit</button>
			</>
		)
	}
}

// function BlogCard(props) {
// 	return (
		// <>
		// 	<h5>{props.blogObj.title}</h5>
		// 	<img src={props.blogObj.image} alt="blog" style={{ maxWidth: "70vw", maxHeight: "20vh" }} /><br />
		// 	<button>Save</button><br />
		// 	<button>Visit</button>
		// </>
// 	)
// }

export default BlogCard