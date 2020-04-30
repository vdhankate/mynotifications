import {ADD_REMINDER, DELETE_REMINDER} from '../constants';

 const reminder = (action) => {
 	return {
 		text:action.text,
 		id:Math.random()
 	}
 }

const deleteReminder = (state, id) => {
 	const result = state.filter( reminder => reminder.id != id  )	
 	
 	return result;
 }

const reducers = (state=[], action ) => {

	let reminders  = null;

	switch(action.type){

		case ADD_REMINDER: 
			reminders = [...state, reminder(action)]
			return reminders;
		case DELETE_REMINDER: 
			reminders = deleteReminder(state, action.id);
			return reminders;
		default:
			return state;
	}
}

export default reducers;