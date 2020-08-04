import React, { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../actions/actions';

const User = ({name, id, mobile, email, serial}) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const deleteHandler = () => {
    dispatch(deleteUser(id));
  }

  const editHandler = () => {
    history.push(`/update/${id}`)
  }

  return (
    <li>
        <span>{serial+1}</span>
        <div>
            <span>{name}</span>
            <span>{email}</span>
            <span>{mobile}</span>
        </div>
        <div>
            <span className="edit" onClick={editHandler}></span>
            <span className="delete" onClick={deleteHandler}></span>
        </div>
    </li>
  );
}

export default User;
