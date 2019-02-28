import DevTools from 'mobx-react-devtools'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Loading from './common/Loading'
const Routes = React.lazy(() => import('./routes'))
ReactDOM.render(
    <BrowserRouter>
        <Suspense fallback={<Loading />}>
            <Routes />
            <DevTools />
        </Suspense>
    </BrowserRouter>,

    document.getElementById('root')
)
