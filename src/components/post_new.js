import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router'

// import { Route, withRouter } from 'react-router';

class PostNew extends Component {
    // access to router from parent component
    static contextType = {
        // this will search all routes. 
        //so it goes to reducers/routes.js to provide the context from <Router>
        router: PropTypes.object
    }

    
    onSubmit(props){
        // props above are properties from the form (title, content and categories)
        // action creator - create post
        this.props.createPost(props)

        // this function is called nly when post is successfully created
        .then(() => {
            // blog post has been created, navigate the user to the index 
            // we navigate by calling this.context.router.push
            // with the new path to navigate to
            this.context.router.push('/');
        })
    }

    render(){
        // whenever button 'submit' is clicked we want to call this function
        // const handleSubmit = this.props.handleSubmit IS THE SAME AS { handleSubmit }
        // const title = this.props.fields.title IS THE SAME AS line below with ES6
        const { fields: {title, categories, content}, handleSubmit } = this.props;
        // console.log(title); -> inspect what function belong to this object

        return (
            <div>Create form
                {/* handleSubmit takes the values form fields and passes to createPost in action/index */}
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <h3>Create a new post</h3>

                    <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                        <label>Title</label>
                        {/* {...title} -> destructuring of the object */}
                        <input type="text" className='form-control' {...title}/>
                        <div className="text-help">
                            {title.touched ? title.error : ''}
                        </div>
                    </div>

                    <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                        <label>Categories</label>
                        <input type="text" className='form-control' {...categories} />
                        <div className="text-help">
                            {categories.touched ? categories.error : ''}
                        </div>
                    </div>

                    <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                        <label>Content</label>
                        <textarea className='form-control'{...content} />
                        <div className="text-help">
                            {content.touched ? content.error : ''}
                        </div>
                    </div>

                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <Link to='/' className='btn btn-danger'>Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = "Enter a title";
    }
    if(!values.categories){
        errors.categories = 'Enter a categories';
    }
    if(!values.content){
        errors.content = "Enter some content"
    }

    return errors;
}

// redux form works the same as connect but with extra argument
// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st config, 2nd mapStateToProps, 3rd mapDispatchToProps
export default reduxForm({
    //configuration
    form: 'PostNew',
    fields: ['title', 'categories','content'],
    validate
}, null, { createPost }) (PostNew);

// export default withRouter (PostNew);