import {observer} from "mobx-react";
import {useStores} from "../store";
import React from "react";
import {Form, Input, Button} from 'antd';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Login = observer(() => {
    const {AuthStore} = useStores()
    const h=useNavigate()
    const onFinish = (values: any) => {
        // console.log('Success:', values);
        AuthStore.setUserName(values.username)
        AuthStore.setPassWord(values.password)
        AuthStore.login().then(()=>{
            console.log('登录成功，跳转首页')
            h('/')
        },()=>{
            console.log('登录失败，不动')
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const validateUserName=(rule:any,value:any)=>{
        if(!/^[0-9a-zA-Z_]{1,}$/.test(value)){
            return Promise.reject('只能为数字，字母或下划线')
        }
        if(value.length<4||value.length>10){
            return Promise.reject('长度为 4-10 个字符')
        }
        return Promise.resolve()
    }
    return (
        <Wrapper>
            <Forms>
                <h2>登录</h2>
                <Form
                    name="basic"
                    labelCol={{span: 6}}
                    wrapperCol={{span: 15}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{required: true, message: '请输入用户名'},{validator:validateUserName}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {required: true, message: '请输入密码'},
                            {min:4,message:'最少 5 个字符'},
                            {max:10,message:'最大 10 个字符'}
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 6, span: 15}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Forms>
        </Wrapper>
    )
})
const Wrapper=styled.div`
  border:1px dashed #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex:1;
  width:900px;
`
const Forms=styled.div`
  box-shadow:2px 2px 2px lightgrey,-1px -1px 2px lightgrey;
  height:30vh;
  width:40vw;
  padding:12px;
  h2{
    text-align: center;
  }
`

export default Login