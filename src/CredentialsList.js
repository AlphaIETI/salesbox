import React from 'react';
import {Credentials} from './Credentials';
import ReactDOM from 'react-dom';

export class CredentialsList extends React.Component {
    render() {

      const credentialsList=this.props.todoList;
      const listData= credentialsList.map((dat)=>
       <Credentials email ={dat.email} password ={dat.password}  />
        );
      return <ul>{listData}</ul>
    }



}