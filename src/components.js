import React from 'react';

// Strike out text if marked as complete
// todo.get('') method call instead of property access for immutable
export function Todo(props) {
	const { todo } = props;

	if(todo.isDone) {
		return <strike>{todo.text}</strike>;
	} else {
		return <span>{todo.text}</span>;
	}
}

// container component for todolist
export function TodoList(props) {
	const { todos, toggleTodo, addTodo } = props;

	const onSubmit = (event) => {
		const input = event.target;
		const text = input.value;               //pass input value as text
		const isEnterKey = (event.which == 13); //if enter is pressed
		const isLongEnough = text.length > 0;   //check if text exists 

		if(isEnterKey && isLongEnough) {
			input.value = '';                   //reset input
			addTodo(text);                      //dispatch add todo action
		}
	}

	const toggleClick = id => event => toggleTodo(id);

	return (
		<div className="todo">
			<input 
				type='text' 
				placeholder='add todo' 
				className='todo__entry'
				onKeyDown={onSubmit} />
			<ul className="todo__list">
				{todos.map(t => (
					<li key={t.get('id')} className='todo__item'>
						<Todo todo={t.toJS()} />
					</li>
				))}
			</ul>
		</div>
	)
}