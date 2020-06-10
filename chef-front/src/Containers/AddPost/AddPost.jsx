import React from 'react';
import './AddPost.scss';
import FormAddPost from './FormAddPost/FormAddPost';




const AddPost = () => {

    return (

        <section className="AddPostWrapper">

          <div className="AddMain AddPostLeft">

              <h3 className="PostRecipeTitle">NEW RECIPE</h3>

          </div>

          <div className="AddMain AddPostRight">


              <FormAddPost />
            
          </div>



        </section>
    )
}

export default AddPost;
