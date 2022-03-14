import {observer} from "mobx-react";
import useStores from "../store";
import React from "react";
import {Form, Input, Button, Checkbox} from 'antd';
import styled from "styled-components";

const Register = observer(() => {
    const {AuthStore} = useStores()
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Wrapper>
            <h1>注册</h1>
            <Forms>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 8}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{required: true, message: '请输入用户名'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="passwordFirst"
                        rules={[{required: true, message: '请输入密码'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        label="确认密码"
                        name="passwordSecond"
                        rules={[{required: true, message: '请再次输入密码'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 11, span: 8}}>
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
  border:1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Forms=styled.div`
  border:1px solid black;
  width:50%;
`

export default Register