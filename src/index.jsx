/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import App, { HomePage } from './App';
import ProductDetail from './components/ProductDetail';
import './styles/app.css';

const root = document.getElementById('root');
render(
  () => (
    <Router root={App}>
      <Route path="/" component={HomePage} />
      <Route path="/product/:slug" component={ProductDetail} />
    </Router>
  ),
  root
);
