import React from 'react'
import TokenService from '../../Services/Token-Service'
import AuthApiService from '../../Services/Auth-api-service'
import { Link } from 'react-router-dom'

export default class Login extends React.Component{
    state = {
        error: null
    }

    handleSubmit = e => {
        e.preventDefault();
        const { user_name, password } = e.target;

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.loginSuccess();
        }) 
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render() {
        return(
            <div className="login_page">
                <div className="login_form">
                    <h1>Login</h1>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <ul className="form_wrapper">
                            <li className="form_row">
                                <input type="text" name="user_name" id="user_name" placeholder="User Name"/>
                            </li>
                            <li className="form_row">
                                <input type="password" name="password" id="password"   placeholder="password"/>
                            </li>

                            {/* <div role='alert' className='form_alert'>
                                {error && <p>{error}</p>}
                            </div> */}

                            <li className="form_row">
                                <button type='submit' className="sign-up-button btn">Login</button>
                            </li>
                        </ul>
                        <Link to="/register" className="signup_link">Don't have an account? Sign up!</Link>
                    </form>
                </div>
            </div>
        )
    }
}