import React, { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
  useParams
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../actions/actions';


const regex = {
    userName: /^([a-zA-Z]){2,10}$/,
    userEmail: /^([0-9a-zA-Z\_\.\-]+)@([0-9a-zA-Z\_\.\-]+)\.([a-zA-Z]+)$/,
    userMobileNo: /^([0-9]){10}$/
}

let uniqueId = 3;

const Form = () => {
    
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const [input , changeValues] = useState({ 
        userName : { value : "", status : null},  
        userEmail : { value: "", status : null},  
        userMobileNo : { value: "", status : null}
    });

    const onChangeHandler = (value , field) => {

        const status =  value === "" ? null :  regex[field].test(value) ? ("success") : ("error");

        changeValues((prevState) => ({
            ...prevState,
            [field] : {
                value,
                status
            }
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if ( input.userName.status === 'success' && input.userEmail.status === 'success' && input.userMobileNo.status === 'success' ) {
            dispatch(addUser(input , uniqueId));
            console.log(state);
            uniqueId += 1 ;
            history.push('/');
        }
    }

    useEffect(() => {
        if(history.location.pathname.includes('update')) {

            let user = null;
            state.users.map((element) => {
                if(element.id == params.userid){
                    user = element;
                }
            });

            if(user.length !== null) {
                changeValues({
                    userName : { value : user.name, status : null},  
                    userEmail : { value: user.email, status : null},  
                    userMobileNo : { value: user.mobileNo, status : null}
                })
            } else {
                history.push('/');
            }
        }
    },[])

    return (
        <section className="user-form">
            <div className="wrapper">
                <h3>please fill the form</h3>
                <form>
                    <div className={input.userName.status !== null ? (`form-group ${input.userName.status}`) : ("form-group")}>
                        <label>enter your name :</label>
                        <input type='text' placeholder='FULL NAME' id='name' value={input.userName.value} onChange={(e) => onChangeHandler(e.target.value, 'userName')}/>
                        <span>do not add any numbers and special characters in name and it should contain min 2 characters</span>
                    </div>
                    <div className={input.userEmail.status !== null ? (`form-group ${input.userEmail.status}`) : ("form-group")}>
                        <label>enter your email id :</label>
                        <input type='text' placeholder='EMAIL ID' id='email' value={input.userEmail.value} onChange={(e) => onChangeHandler(e.target.value, 'userEmail')}/>
                        <span>please enter valid email id</span>
                    </div>
                    <div className={input.userMobileNo.status !== null ? (`form-group ${input.userMobileNo.status}`) : ("form-group")}>
                        <label>enter your mobile no :</label>
                        <input type='text' placeholder='MOBILE NO' id='mobile' value={input.userMobileNo.value} onChange={(e) => onChangeHandler(e.target.value, 'userMobileNo')}/>
                        <span>please enter valid mobile no</span>
                    </div>
                    <div className="form-controls">
                        <button onClick={submitHandler}>save</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Form;
