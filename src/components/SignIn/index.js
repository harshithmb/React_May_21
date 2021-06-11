import React, { useState, useRef, useEffect } from 'react';
import { Redirect } from 'react-router';
import { AppleOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Spin } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const SignIn = () => {
    const [showLoader, setShowLoader] = useState(true)
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        setTimeout(() => setShowLoader(false), 3000)
    }, [])
    return (<>
        {showLoader ? <Spin size="large" /> :
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                    <AppleOutlined />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        }
    </>
    );
};



// const SignIn = () => {
//     // const [username, setUsername] = useState("");// Controlled
//     // const [password, setPassword] = useState("");
//     const [redirectHome, setRedirectHome] = useState(false);
//     const [showPass, setShowPass] = useState(false)
//     const ref = useRef(null);
//     const h1Ref = useRef(null);
//     const nameRef = useRef(null);
//     const passRef = useRef(null)
//     const navigateUser = {
//         name: "ABCD",
//         pass: "QQQQ"
//     }

//     // const updateValues = (e) => {
//     //     console.log(e.target.value, e.target.name)
//     //     e.target.name === "username" && setUsername(e.target.value.toUpperCase());
//     //     e.target.name === "password" && setPassword(e.target.value);
//     // }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         console.log("UserName", nameRef.current.value)
//         console.log("Password", passRef.current.value)
//         // const { name, pass } = navigateUser;
//         // if (name === username && pass === password) {
//         //     setRedirectHome(true)
//         //     window.localStorage.setItem("username", username) //window.localStorage.getItem("username")
//         //     window.localStorage.setItem("password", password)
//         // }
//     }

//     const onClickRef = () => {
//         console.log("Ref Current", ref.current.value)
//         h1Ref.current.style.backgroundColor = "red"
//     }

//     return (<div className="d-flex justify-content-center">
//         {redirectHome && <Redirect to="/" />}
//         <form onSubmit={onSubmit}>
//             <label>User Name</label>
//             <input type="text" name="username" placeholder="Enter Username" ref={nameRef} /><br />
//             <label>Password</label>
//             <input type={showPass ? "text" : "password"} name="password" placeholder="Enter Password" ref={passRef} /><br />
//             <button onClick={() => setShowPass(!showPass)}>Show/hide</button>
//             <input type="submit" />
//         </form>

//         <hr />
//         <h1 ref={h1Ref}>This is Ref </h1>
//         <input ref={ref} type="text" />
//         <button onClick={onClickRef}>Click</button>
//     </div>);
// }

export default SignIn;