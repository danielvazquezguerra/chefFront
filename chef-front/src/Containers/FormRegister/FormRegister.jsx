import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import './FormRegister.scss';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// import {API_URL} from '../../api-config';



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
}
const FormRegister =()=> {

    const history = useHistory();
    const onFinish = user => {
        axios.post('http://localhost:8000/api/users/register', user)
            .then(() => {
                notification.success({ message: 'Keep on Rollin`, baby!' });
                history.push('/login')
            })
            .catch(console.error)
    }

    return (
        <div>

<h3 className="RegisterHeader">REGISTER</h3>

<Form
    className="FormLogin"
    {...layout}
    onFinish={onFinish}
    onFinishFailed={console.error} >
    <Form.Item
        label="NAME"
        name="name"
    >
        <Input />
    </Form.Item>
    <Form.Item
        label="EMAIL"
        name="email"
        rules={[{ required: true, message: 'El email es requerido' }]}
    >
        <Input />
    </Form.Item>

    <Form.Item

        label="PASSWORD"
        name="password"
        
    >

        <Input.Password />
    </Form.Item>

    <Form.Item {...tailLayout}>
        <Button className="ButtonRegister" type="primary" htmlType="submit">
            REGISTER
        </Button>
    </Form.Item>
</Form>
            
        </div>
    )
}


export default FormRegister;