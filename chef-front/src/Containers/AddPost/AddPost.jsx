import React from 'react';
import './AddPost.scss';
import { Form, Input, Button, Upload, message } from 'antd';
import { Select } from 'antd';
import { TimePicker } from 'antd';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';





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

    const onFinish = values => {
        console.log(values);
      };

    return (

        <section className="AddPostWrapper">

            <h3 className="PostRecipeTitle">NEW RECIPE</h3>

            <Form className="PostForm" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

                <Form.Item name={['user', 'title']} label="TITLE" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name={['user', 'ingredients']} label="INGREDIENTS">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item name={['user', 'method']} label="METHOD">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item >

                <p>LEVEL</p>
                    
                <Select className="PickerDetails LevelChef" defaultValue="easy" onChange={handleChange}>

                    <Option value="easy">EASY</Option>
                    <Option value="medium">MEDIUM</Option>
                    <Option value="hard">HARD</Option>

                </Select>

                <p>DURATION</p>

                <TimePicker className="PickerDetails Duration"

                     defaultValue={moment('12:08', format)}
                     format={format}
                     
                />

                <p>IMAGE</p>

                <Upload className="PickerDetails PickerImage" {...props}>
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
