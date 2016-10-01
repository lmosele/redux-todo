// crappy UID hack
const uniqueID = () => Math.random().toString(34).slice(2);

export function	addTodo(text) {
	return {
		type: 'ADD_TODO',
		payload: {
			id: uniqueID(),
			isDone: false,
			text: text
		}
	};
}

export function toggleTodo(id) {
	return {
		type: 'TOGGLE_TODO',
		payload: id
	};
}