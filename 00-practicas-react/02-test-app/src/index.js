import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/store';
import TestApp from './TestApp';
import { Provider } from 'react-redux';
import '../src/css/estilos.css';

ReactDOM.render( 
     <Provider store={store}>
        <TestApp />
     </Provider>,
 document.getElementById('root')
);
