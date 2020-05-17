import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'  
import {template} from 'mallureport-common-lib'
import {store} from './store' 
import { Provider } from 'react-redux'

ReactDOM.render(
<Provider store={store}>
    <App />
 </Provider>,
    document.getElementById('container'))
    


    ReactDOM.render(
      <Provider store={store}>
          <template.NavigationPanel />
       </Provider>,
          document.getElementById('menuNavigationID'))


          ReactDOM.render(
            <Provider store={store}>
                <template.HeaderPanel />
             </Provider>,
                document.getElementById('HeaderID'))
          