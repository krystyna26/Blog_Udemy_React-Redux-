import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/post_index';
import PostNew from'./components/post_new';
import PostShow from './components/post_show';


// const Greeting = () => {
//     return <div>Hi there!</div>
// }

// we export it to let index.js know about this route
export default (
    // App is parent, IndexRoute is child
    <Route path="/" component={App} >
        <IndexRoute  component={PostIndex} />
        <Route path='post/new' component={PostNew} />
        <Route path='posts/:id' component={PostShow} />
    </Route>
)
// this.props.params.id