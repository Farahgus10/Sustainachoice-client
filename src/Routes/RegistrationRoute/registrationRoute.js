import React from 'react'
import Registration from '../../Components/Registration/registration'

export default class RegistrationRoute extends React.Component{
    static defaultProps = {
        history: {
            push: () => {},
        }
    }

    handleRegistrationSuccess = () => {
        const { history } = this.props
        history.push('/login')
    }

    render() {
        return(
            <div>
                <Registration registrationSuccess={this.handleRegistrationSuccess}/>
            </div>
        )
    }
}