import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { TodoList } from './containers';
import reducer from './reducer';

// import { List, Map } from 'immutable';
// immutable dummy data for now
// List ( Map() )
// const dummyData = List([
// 	Map({ id: 0, isDone: true, text: 'blablabla' }),
// 	Map({ id: 1, isDone: false, text: 'kkkkk' }),
// 	Map({ id: 2, isDone: false, text: 'hehehe' }),
// 	Map({ id: 3, isDone: false, text: 'do the thing!' })
// ])

const store = createStore(reducer);

// renders main page
render(
	<Provider store={store}>
		<TodoList />
	</Provider>,

	// render into app
	document.getElementById('app')
);