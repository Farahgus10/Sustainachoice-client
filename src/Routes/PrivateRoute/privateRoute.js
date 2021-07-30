import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../Services/Token-Service'

export default function PrivateRoute({ component, ...props}) {
    const Component = component
    console.log(props.results)
    return (
      <Route
        {...props}
        render={componentProps => (
          TokenService.hasAuthToken()
            ? <Component {...componentProps} />
            : <Redirect
                to={{
                  pathname: '/login',
                  state: { from: componentProps.location }
                }}
              />
        )}
      />
    )
  }
