import React from 'react';
import './Profile.scss';
import { Form, Input, Button } from 'antd';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
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
  

const Profile = () => {

    const onFinish = values => {
        console.log(values);
      };
  

    return (

        <section className="ProfileWrapper">

            <div className="ProfileMain">

                <h3 className="ProfileHeader">YOUR USER INFO</h3>

                <Form className="ProfileForm" {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item name={['user', 'name']} label="NAME" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'username']} label="USERNAME" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'email']} label="EMAIL" rules={[{ type: 'email' }]}>
                            <Input />
                        </Form.Item>
                       
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                </Form>


            </div>

        </section>
    )
}

    export default Profile;
