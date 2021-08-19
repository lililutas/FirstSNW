import React from 'react'
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { RenderForm } from '../Utils/CustomForms'
import { requiredField } from '../Utils/Validators'


const LoginForm = reduxForm({
    form: 'login'
})(
    (props) => {

        return (
            <div>
                <form className='login__window' onSubmit={props.handleSubmit}>
                    <label for='login' >Введите логин:</label>
                    <Field component={RenderForm} type='text' name='login' id='login' className='login-username' placeholder='Логин' validate={[requiredField,]}><input /></Field>
                    <label for='password'>Ведите пароль:</label>
                    <Field component={RenderForm} type='password' name='password' id='password' className='login-password' placeholder='Пароль' validate={[requiredField]}><input /></Field>
                    <Field component='input' type='checkbox' name='rememberMe' id='rememberMe' className='login-remember' />
                    <label for='rememberMe'>Запомнить пользователя</label>
                    <button type='submit' className='login-btn'>Войти</button>
                </form>
            </div>
        )
    }
);


const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe);
    }

    if(props.isLogin) {
        return <Redirect to='/profile' />
    }
    else{
        return (
            <LoginForm  onSubmit={onSubmit}/>
        )
    }
    
}


export default Login;


