import React from 'react';
import uuid from 'uuid';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
	return (
		<div className='App'>
			<h1>Hello</h1>
			<div className='container'>
				<div className='row'>
					<TodoInput />
					<TodoList />
				</div>
			</div>
		</div>
	);
}

export default App;
