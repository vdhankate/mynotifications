import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addReminder, deleteReminder} from '../actions';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			text:''
		}
	}

	addReminder1 = () => {
		//console.log('State',this);
		this.props.addReminder(this.state.text);
	}

	inputHandle = (e) => {
		this.setState({text:e.target.value})
	}

	deleteReminder = (id) => {
		//console.log('deleting id', id);
		//console.log('this.props ', this.props);
		this.props.deleteReminder(id);
	}

	renderReminders() {
		const {reminders} = this.props;
		if(0 < reminders.length) {
		return (
				<ul className='list-group col-sm-4'>
				{
					reminders.map( reminder  => {
							return (
								<li key={reminder.id} className='list-group-item'> 
									<div>{reminder.text}</div> 
									<div className="list-item delete-button" onClick={() => this.deleteReminder(reminder.id) }>
										&#x2715;
									</div>
								</li>
								)
						})

				}
				</ul>
			)
		} else{
			return (<ul><li>No Data</li></ul>);
		}
	}

	render() {
		//console.log('this.props', this.props);
		return (
			<div className="App">
				<div className="title">
					Notification
				</div>
				<div className="form-inline reminder-form">
					<div className="form-group">
						<input className="form-control" onChange={this.inputHandle}/>
					</div>
					
					<button type="button" className="btn btn-success" onClick={this.addReminder1}>
						Add reminder 
					</button>
				</div>

				
				{this.renderReminders()}
				
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	console.log('Lala REE')
	console.log(state);
	return {
		reminders: state
	}
}	

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({addReminder,deleteReminder},dispatch )
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);