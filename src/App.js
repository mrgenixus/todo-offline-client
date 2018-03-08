import React from 'react';
import { Route, Link } from 'react-router-dom'
import Todos from './pages/todos'
import About from './pages/about'

const App = () => (
  <div>
    <header>
      <Link to="/">Todos</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Todos} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
