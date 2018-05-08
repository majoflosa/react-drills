import React, {Component} from 'react';

function NewTask( props ) {
    return <button onClick={ props.addTask }>Add Task</button>;
}

export default NewTask;