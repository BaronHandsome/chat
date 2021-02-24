import React from 'react';
import styles from './App.module.css';
import { socket } from './components/socket'
import { Enter } from './components/Enter';

function App() {
	return (
		<div className={styles.mainBlock}>
			<Enter />
		</div>
	);
}

export default App;
