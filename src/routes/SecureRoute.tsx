import React, { Fragment } from 'react'
import { Route, RouteProps } from 'react-router'

export interface SecureRouteProps {
    should: () => Promise<Boolean>
    loading: React.ComponentType<any>
    failed: React.ComponentType<any>
}
export const SecureRoute: React.FC<RouteProps & SecureRouteProps> = ({
    should,
    loading,
    failed,
    ...route
}) => {
    const [state, setState] = React.useState<Boolean | null>(null)
    React.useEffect(() => {
        should().then(result => setState(result))
    }, [])
    return (
        <Fragment>
            {state === null && loading}
            {state === true ? <Route {...route} /> : failed}
        </Fragment>
    )
}
