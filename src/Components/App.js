import React, { Component } from 'react';
import Home from './Home';
import BestMovie from './BestMovie';
import Fav from './Fav';
import MyBlog from './MyBlog';
import About from './About'
import { 
           BrowserRouter as Router,
           Route,
           Link 
        } from 'react-router-dom';

import '../App.css';

var post = {
  title: "Dinosuar!",
  authors: [
    "James Reich",
    "hwd JINA",
    "Reny IJu"
  ],
  body: "Check out this body property!",
  comments: [
    'pizza', 'coffee','flower'
  ]
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
              <Link to='/'>Home Page</Link> {' '}
              <Link to='/BestMovie'>Best Movie</Link>{' '}
              <Link to='/Fav'>Favourite Food</Link>{' '}
              <Link to='./MyBlog'>My Blog</Link>{' '}
              <Link to='./About'>About</Link>
          </nav>
          <Route exact path = '/' component={Home} />
          <Route path = '/bestmovie' component={BestMovie} />
          <Route path = '/fav' component={Fav} />
          <Route path = '/myblog' component={
              () => (<MyBlog title={post.title}
                             author={post.authors}
                             body={post.body}
                             comments={post.comments} />
                )
              } />
          <Route path = '/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
