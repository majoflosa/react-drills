import React, {Component} from 'react';
import Todo from './Todo';

function List( props ) {
    return (
        <ul>{props.tasks.map( (item, index) => <Todo key={index} task={item} /> ) }</ul>
    );
}

export default List;