import React from 'react'
import { Switch, Route } from 'react-router'

const App = React.lazy(() => import('../modules/App'))

const Routes = () => {
    return (
        <Switch>
            <Route component={props => <App {...props} />} path="/" />
        </Switch>
    )
}

export default Routes
