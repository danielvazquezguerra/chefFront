import React from 'react';
import { notification } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './FormAddPost.scss';

const FormAddPost = () => {

    const history = useHistory();
    const onFinish = (event) => {
      event.preventDefault();
      const formData = new FormData();
      if (event.target.images?.files[0]) formData.set('images', event.target.images.files[0]);

          formData.set('title', event.target.title.value)
          formData.set('serves', event.target.serves.value)
          formData.set('time', event.target.time.value)
          formData.set('ingredients', event.target.ingredients.value)
          formData.set('level', event.target.level.value)
          formData.set('method', event.target.method.value)

        axios.post('http://localhost:8000/api/posts/addrecipe', formData, {

          headers: {

            authorization:'Bearer ' + localStorage.getItem('authToken')
        }

        })

            .then(() => {

                notification.success({ message: 'Bon Apetit' });
                history.push('/allpost')

            })
            .catch(console.error)
    }

    return (

        <div className="FormContent">

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

                            <input className="DurationPicker" type="number" name="time" min="1" /><p>MIN</p>

                        <label htmlFor="title">SERVES</label>

                            <input className="DurationPicker" type="number" name="serves" min="1" /><p>SERVINGS</p>

                    </div>
                    
                        <label htmlFor="title">PHOTO</label>

                        <input className="PhotoButton" type="file" name="images"/>

                        <input className="SubmitButton" type="submit" value="POST"/>

                    </form>

            
        </div>
    )
}

export default FormAddPost;
