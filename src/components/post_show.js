import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router';

class PostShow extends Comment {

    componentWillMount(){
        this.props.fetchPost(this.props.params.id)
;    }

    render(){
        const post = this.props.post;
        // console.log(this.props.post)
        if(!post){
            return <div>Loading...</div>
        }
        return (
            <div> 
                <Link to='/'>Back to home page </Link>
                {/* Show post {this.props.params.id}  */}
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { post: state.posts.post }
}

export default connect(null, { fetchPost })(PostShow);