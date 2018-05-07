import React, {Component} from 'react';

function Login( props ) {
    return (
        <div>
            <input onChange={ props.updateUser } type="text"/>
            <input onChange={ props.updatePassword } type="text"/>
            <button onClick={ props.submitLogin }>Submit</button>
        </div>
    );
}

export default Login;