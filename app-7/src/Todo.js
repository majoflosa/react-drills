import React, {Component} from 'react';
import List from './List';

function Todo( props ) {
    return (
        <li>{ props.task }</li>
    );
}

export default Todo;