import React from 'react'
import { Form, Input, Button, notification } from 'antd';
import './Register.scss';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {API_URL} from '../../api-config';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
}




export default function Register() {


        const history = useHistory();//props.history
        const onFinish = user => {
            axios.post(API_URL + '/users/register', user)
                .then(() => {//como subscribe en angular
                    notification.success({ message: 'Keep on Rollin`, baby!' });
                    history.push('/login')//this.router.navigate(['/login]) en angular
                })
                .catch(console.error)
        }
        

    return (

        <div className="RegisterWrapper">

            <div className="RegisterBackground" />

            <div className="LeftMain">

                <img className="LogoMainLeft" src="/images/chilihot-logo-register.png" alt=""/>

            </div>
            
            <div className="RightMain">

                <h3 className="RegisterHeader">REGISTER</h3>

                <Form
                className="FormLogin"
                {...layout}
                onFinish={onFinish}
                onFinishFailed={console.error} >
                <Form.Item
                    label="USERNAME"
                    name="username"
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
                    // rules={[{ required: true, message: 'La contraseña es requerida' }]}
                >
            
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button className="ButtonRegister" type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
                
            </div>

            
        </div>
    )
}