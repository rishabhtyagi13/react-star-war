import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from  './routers/AppRouter'
import './styles/styles.scss';
import ErrorBoundary from './components/ErrorBoundary';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import getUserInfo from './store/reducers/getUserInfo';
import getPlanetInfo from './store/reducers/getPlanetInfo';

const rootReducer = combineReducers({
    getUserInfo:getUserInfo,
    getPlanetInfo:getPlanetInfo
});


const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
    <div>
    {/* Error Boundary is used to catch the errors */}
        <ErrorBoundary>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </ErrorBoundary>
    </div>
    , document.getElementById('app'));

