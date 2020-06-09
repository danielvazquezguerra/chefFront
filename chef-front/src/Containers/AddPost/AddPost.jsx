import React from 'react';
import './AddPost.scss';
import {  message, notification } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';




const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  



const AddPost = () => {

    const history = useHistory();
    const onFinish = (event) => {
      event.preventDefault();
      const formData = new FormData();
      if (event.target.images?.files[0]) formData.set('imagen', event.target.images.files[0]);

          formData.set('title', event.target.title.value)
          formData.set('ingredients', event.target.ingredients.value)
          formData.set('method', event.target.method.value)
          formData.set('serves', event.target.serves.value)
          formData.set('duration', event.target.duration.value)
          formData.set('level', event.target.level.value)

        axios.post('http://localhost:8000/api/posts/addrecipe', formData, {

          headers: {
            authorization:'Bearer ' + localStorage.getItem('authToken')
        }

        })

            .then(() => {

                notification.success({ message: 'Bon Apetit' });
                history.push('/postsall')

            })
            .catch(console.error)
    }


    return (

        <section className="AddPostWrapper">

            <h3 className="PostRecipeTitle">NEW RECIPE</h3>



          <form className="PostForm" action="" onSubmit={onFinish}>

              <label htmlFor="title">TITLE</label>
              <input type="text" name="title"/>
              <label htmlFor="ingredients">INGREDIENTES</label>
              <textarea type="textarea" name="ingredients"/>
              <label htmlFor="title">METHOD</label>
              <textarea type="text" name="method"/>

              <div className="ItemDetails">

              <label htmlFor="title">LEVEL</label>

                  <select className="ItemPicker" name="level">

                    <option value="easy">EASY</option>
                    <option value="medium">MEDIUM</option>
                    <option value="hard">HARD</option>

                  </select>

                  <label htmlFor="title">DURATION</label>

                  <input className="DurationPicker" type="number" name="duration" min="1" /><p>MIN</p>

                  <label htmlFor="title">SERVES</label>

                  <input className="DurationPicker" type="number" name="serves" min="1" /><p>SERVINGS</p>

                  

              </div>
              
  
              <label htmlFor="title">PHOTO</label>
              <input type="file" name="images"/>
              <input type="submit"/>


          </form>
          
          {/* src="http://localhost:8000/images/posts/{{recipe.images}}" */}

        </section>
    )
}

export default AddPost;
