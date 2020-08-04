import React, { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import User from './User'


const Users = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <section className="users">
            <div className="wrapper">
                <h2>welcome to the users list</h2>
                <Link to="/register" id="add-user">add new user</Link>

                {state.users.length > 0 && (
                    <ul className= "users-list active">
                        <li className="headings">
                            <span>sr. no.</span>
                            <span>user</span>
                            <span>controls</span>
                        </li>
                        {state.users.map(({name, id, email, mobileNo} , index) => {
                            return <User 
                                    name = {name}
                                    id = {id}
                                    email = {email}
                                    mobile = {mobileNo}
                                    key = {id}
                                    serial = {index}
                                    />
                        })}
                    </ul>
                    )
                }
            </div>
        </section>
    );
}

export default Users;
