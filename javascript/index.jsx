const Provider = ReactRedux.Provider;
const createStore = Redux.createStore;

import App from './components/App';
import reducers from './reducers/index';

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.querySelector('#root')
);