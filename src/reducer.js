import { List, Map } from 'immutable';

// Reducer - takes existing state and action then computes new immutable state

const init = List([]);

export default function reducer(todos=init, action) {
	switch(action.type) {
		case 'ADD_TODO':
			//returns new list with todo appended
			//make sure to convert todo object to immutable map before pushing to list
			return todos.push(Map(action.payload));
		case 'TOGGLE_TODO':
			return todos.map(t => {
				// find id that matches action, then toggle done status
				if(t.get('id') === action.payload) {
					return t.update('isDone', isDone => !isDone );
				}
				else {
					return t;
				}
			});
		default: 
			return todos;
	}
}



