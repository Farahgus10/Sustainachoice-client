import React from 'react'
import Login from '../../Components/Login/login'

export default class LoginRoute extends React.Component{
    static defaultProps = {
        location: {},
        history: {
            push: () => { },
        },
    }

    handleLoginSucces = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    render() {
        return(
            <div>
                <Login loginSuccess={this.handleLoginSucces}/>
            </div>
        )
    }
}