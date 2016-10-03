import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo, removeTodo } from './actions';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state.get('todos') };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id)),
      removeTodo: id => dispatch(removeTodo(id))
    };
  }
)(components.TodoList);
