import React from 'react';

// Strike out text if marked as complete
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
	const { todos, toggleTodo, addTodo, removeTodo } = props;

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

	const deleteTodo = id => event => removeTodo(id);
  const toggleClick = id => event => toggleTodo(id);

  console.log(todos)

  return (
    <div className='todo'>
      <input type='text'
             className='todo-entry'
             placeholder='Add todo'
             onKeyDown={onSubmit} />
      
      <ul className='todo-list'>
        {todos.map((t, k) => (
          
          <li key={t.get('id')}
              className='todo-item'
              onClick={toggleClick(t.get('id'))}>
            
            <Todo todo={t.toJS()} />
            
            <button onClick={deleteTodo(t.get('id'))}>remove mee</button>
          </li>
        )).toArray()}
      </ul>
    </div>
  );
}

// {todos.keys().size && todos.keys().map(key => (<li key={key}>{key}</li>))}

// {
//   {todos.keys().map(([key, value]) => {
//     console.log(value)
//     return (<li key={key}>{value.get('text')}</li>)
//   })}  
// }

// {
//   {todos.map((t, k) => (
//     <li key={k}
//         className='todo-item'
//         onClick={toggleClick(t.get('id'))}>
//       <Todo todo={t.toJS()} />
//       <button key={t.get('id')} onClick={deleteTodo(t.get('id'))}>remove mee</button>
//     </li>
//   )).toArray()}
// }