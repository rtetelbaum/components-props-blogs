import './App.css';
import React from 'react'
import BlogsList from './Containers/BlogsList'
import SavedBlogs from './Containers/SavedBlogs'

class App extends React.Component {

	state = {
		savedBlogs: []
	}

	saveBlog = (blogObj) => {
		const blogAlreadySaved = this.state.savedBlogs.find(savedBlog => savedBlog.id === blogObj.id)
		if (!blogAlreadySaved) {this.setState(prevState => ( {savedBlogs: [...prevState.savedBlogs, blogObj]} ))}
	}

	deleteBlog = (id) => {
		this.setState(prevState => ( {savedBlogs: prevState.savedBlogs.filter( blogObj => blogObj.id !== id )} ))
	}

	render() {
		return (
			<div className="App">
				<BlogsList saveBlog={this.saveBlog}/>
				<SavedBlogs savedBlogs={this.state.savedBlogs} deleteBlog={this.deleteBlog} />
			</div>
		);
	}
}

export default App;
