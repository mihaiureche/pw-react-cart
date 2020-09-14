
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.renderCart = (containerId, products) => {
  ReactDOM.render(
    <App products={products} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};

window.unmountCart = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Cart-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}
