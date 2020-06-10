import React from 'react';
import './Login.scss';
import { Form, Input, Button, notification } from 'antd';
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/actions/actions';



const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
}

const Login = () => {
    const history = useHistory();//props.history
    const onFinish = user => {
        login(user)
            .then(()=>{//como subscribe en angular
                notification.success({ message: 'Usuario conectado éxito' });
                history.push('/allpost')//this.router.navigate(['/login]) en angular
            })
            .catch(console.error)
    };



    return (

        <div className="RegisterWrapper">

            <div className="RegisterBackground" />

            <div className="LeftMainRegister">

                <img className="LogoMainLeft" src="/images/chilihot-logo-register.png" alt=""/>

            </div>
            
            <div className="RightMainRegister">

                
<h3 className="RegisterHeader">SIGN IN</h3>

<Form
    className="FormLogin"
    {...layout}
    onFinish={onFinish}
    onFinishFailed={console.error} >
    
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
            SIGN IN
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

export default Login;