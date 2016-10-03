// Reducer - takes existing state and action then computes new immutable state

import { fromJS, List, Map } from 'immutable';

const INITIAL_STATE = fromJS({
  todos: []
});

export default function reducer(state = INITIAL_STATE, action) {

  let existing = state.get('todos');

  switch(action.type) {
    case 'ADD_TODO':      
      //returns new list with todo appended
  		//make sure to convert todo object to immutable map before pushing to list
      return state.set('todos', existing.push(fromJS(action.payload))); 

    case 'REMOVE_TODO':

      let key = existing.findKey(v => {
        return (v.get('id') === action.payload)
      }); 

      return state.set('todos', existing.delete(key));

      // map(t => {
      //   if(t.get('id') === action.payload) {
      //     // return t.deleteIn('text');
      //     return t.deleteIn(Map(action.payload));
      //   } else {
      //     return t;
      //   }
      // });
    case 'TOGGLE_TODO':
      // return todos.map(t => {
      // 	// find id that matches action, then toggle done status
      //   if(t.get('id') === action.payload) {
      //     return t.update('isDone', isDone => !isDone);
      //   } else {
      //     return t;
      //   }
      // });
    default:
      return state;
  }
}
