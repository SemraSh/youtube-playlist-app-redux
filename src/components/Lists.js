import React from 'react';

class Lists extends React.Component {

  addNewPlaylist = (event) => {
  	event.preventDefault();
  	this.props.addList(event.target.newList.value);
  	event.target.newList.value = '';
  }
  render() {
  	return (
  		<div>
  			<div>
  				<h4>New List</h4>
  				<form
  					onSubmit={this.addNewPlaylist}>
  					<input
  						type="text"
  						name="newList"
  						placeholder='list name...'
  					/>
  					<button
  						type="submit"
  					>ADD</button>
  				</form>
  			</div>
  			<div>
  				<ul>
  					{this.props.lists.map(list => (
  						<li onClick={this.showPlaylist}>{list.name}</li>
  					))}
  				</ul>
  			</div>
  		</div>
  	);
  }
}

export default Lists;
