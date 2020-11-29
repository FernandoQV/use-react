import React  from 'react'
import { Route,Link } from 'wouter';
import './App.css';
import ListGifs from './ListGifs';

function App() {
 
  return (
    <div className="App">
      <ul className='App-nav'>
        <Link to='/gif/colombia'>Gifs de Colombia</Link>
        <Link to='/gif/peru'>Gifs de Peru</Link>
        <Link to='/gif/chile'>Gifs de Chile</Link>
        <Link to='/gif/alianza'>Gifs de Alianza</Link>
      </ul>
  <Route 
  component={ListGifs}
  path='/gif/:keyword' 
  />


    </div>
  );
}

export default App;
