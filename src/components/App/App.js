import React from 'react';
import "./App.css";

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';


class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			searchResults: [{
				name:'name1',
				artist:'artis1',
				album:'album1',
				id:1
			},{
				name:'name2',
				artist:'artis2',
				album:'album2',
				id:2
			},{
				name:'name3',
				artist:'artis3',
				album:'album3',
				id:3
			}]
	}
	// Verify if "this.state" should be "this.state(searchResults{})"

	render() {
		return (
			<div>
	  	<h1>Ja<span className="highlight">mmm</span>ing</h1>
	  		<div className="App">
	    	<SearchBar />
	    		<div className="App-playlist">
	      	<SearchResults searchResults={this.state.searchResults}/>
	      	<PlayList />
	    		</div>
	  		</div>
			</div>
		)};
};

export default App;
