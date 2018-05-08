import React, {Component} from 'react';

function Todo( props ) {
    return (
        <ul>{ props.taskList }</ul>
    );
}

export default Todo;