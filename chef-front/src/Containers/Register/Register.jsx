import React from 'react';
import './Register.scss';
import { Form, Input, Button, notification } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
}

const Register =() =>{

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

        <div className="RegisterWrapper">

            <div className="RegisterBackground" />

            <div className="LeftMainRegister">

                <img className="LogoMainLeft" src="/images/chilihot-logo-register.png" alt=""/>

            </div>
            
            <div className="RightMainRegister">

                
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
        <Input.Password className="PasswordInput"/>
    </Form.Item>

    <Form.Item {...tailLayout}>
        <Button className="ButtonRegister" type="primary" htmlType="submit">
            REGISTER
        </Button>
    </Form.Item>
</Form>
                
                <div className="RegisterHelp">

                    <ul>

                        <li><a href="/#">INFO</a></li>
                        <li><a href="/#">HELP</a></li>
                        <li><a href="/#">PRIVACITY</a></li>
                        <li><a href="/#">PRESS</a></li>

                    </ul>

                </div>

            </div>

        </div>
    )
}

export default Register;