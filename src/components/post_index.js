import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index'; //action creator
import { Link } from 'react-router'

// export default () => {
//     return <div>List of blog posts</div>
// };

// from this ^
// refactor from function component to class based component
// to this v

class PostIndex extends Component {
    // react will call this function automatically whenever our component is about to be rendered to the DOM for the first time
    // it's called only once - so it's a great place to place our action creator to go and fetch our data
    componentWillMount(){
        // console.log('this would be a good time to call an action creator and fetch posts');
        this.props.fetchPosts();
    }

    // helper function to build list
    renderPosts(){
        return this.props.posts.map((post) => {
            //for each post in post's arr we return li
            return (
                // back end generates id
                <li className='list-group-item' key={post.id}>
                    <Link to={'posts/' + post.id}>
                        <span className='pull-xs-right'>{post.categories}</span>
                        <strong> {post.title}</strong>
                    </Link>
                </li>
            )
        })
    }

    render (){
        return (
            <div>
                <div>
                    <Link to='/post/new'>
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch);
// }

// this gives us access to this.props.fetchPost, so we can call it in componentWillMount function
// export default connect(null, mapDispatchToProps)(PostIndex);


function mapStateToProps(state){
    // list of posts
    console.log(state)
    return { posts: state.posts.all }
}

// shorter syntax (ES6)
export default connect(mapStateToProps, { fetchPosts })(PostIndex);