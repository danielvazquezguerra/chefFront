import React from 'react';
import './AddPost.scss';
import { Form, Input, Button, Upload, message, InputNumber, notification } from 'antd';
import { Select } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



function onChange(value) {
    console.log('changed', value);
  }

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
  
  const validateMessages = {
         // eslint-disable-next-line
    required: '${label} is required!',
    types: {
        // eslint-disable-next-line
      email: '${label} is not validate email!',
        // eslint-disable-next-line
      number: '${label} is not a validate number!',
    },
    number: {
        // eslint-disable-next-line
      range: '${label} must be between ${min} and ${max}',
    },
  };    

  const { Option } = Select;

  const format = 'HH:mm';

function handleChange(value) {
  console.log(`selected ${value}`);
}



const AddPost = () => {

    const history = useHistory();
    const onFinish = (post, recipe) => {
        axios.post('http://localhost:8000/api/posts/insert', post)
        axios.post('http://localhost:8000/api/posts/addrecipe', recipe)
            .then(() => {
                notification.success({ message: 'Bon Apetit' });
                history.push('/postsall')
            })
            .catch(console.error)
    }


    return (

        <section className="AddPostWrapper">

            <h3 className="PostRecipeTitle">NEW RECIPE</h3>

            <Form className="PostForm" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

                <Form.Item name={['post', 'title']} label="TITLE" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name={['recipe', 'ingredients']} label="INGREDIENTS">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item name={['recipe', 'method']} label="METHOD">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item >

                    <section className="PickerDetails">

                        <p>LEVEL</p>
                            
                        <Select className="ItemPicker LevelChef" name={['recipe', 'level']} defaultValue="easy" onChange={handleChange}>

                            <Option value="easy">EASY</Option>
                            <Option value="medium">MEDIUM</Option>
                            <Option value="hard">HARD</Option>

                        </Select>

                        <p>DURATION</p>

                        <TimePicker name={['recipe', 'duration']} className="ItemPicker Duration"

                            defaultValue={moment('12:08', format)}
                            format={format}
                            
                        />

                        <p>SERVES</p>

                        <InputNumber className="ItemPicker Serves" name={['recipe', 'serves']} min={1} max={10} defaultValue={3} onChange={onChange} />

                    </section>


                <p>IMAGE</p>

                <Upload className="PickerDetails PickerImage" name={['post', 'images']} {...props}>
                    <Button>
                    <UploadOutlined /> Click to Upload
                    </Button>
                </Upload>

                <hr/>

                    <Button type="primary" htmlType="submit">
                    ADD POST
                    </Button>

                </Form.Item>



                    

            </Form>

        </section>
    )
}

export default AddPost;
