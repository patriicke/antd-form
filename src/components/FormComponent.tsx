import React, { useEffect, useState } from "react";
import {
  LockFilled,
  LockOutlined,
  MailFilled,
  UserOutlined
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import OfficeIllustration from "./../assets/office.webp";

const FormComponent: React.FC = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const [check, setCheck] = useState(false);

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  const onCheckboxChange = (e: { target: { checked: boolean } }) => {
    setCheck(e.target.checked);
  };

  return (
    <div className='bg-white flex-col md:flex-row min-h-[80vh] w-4/5 max-w-[1000px] rounded-3xl flex items-center justify-center shadow-2xl gap-10 '>
      <div className='flex flex-col gap-12'>
        <h1 className='font-bold text-4xl opacity-80'>Sign up</h1>
        <Form
          form={form}
          name='horizontal_login'
          layout='inline'
          onFinish={onFinish}
          className='flex flex-col gap-4'
        >
          <Form.Item
            name='name'
            rules={[{ required: true, message: "Please input your name!" }]}
            className='border-b-[1px] border-gray-400'
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon mr-3' />}
              placeholder='Your Name'
              className='border-none'
            />
          </Form.Item>
          <Form.Item
            name='email'
            rules={[{ required: true, message: "Please input your email!" }]}
            className='border-b-[1px] border-gray-400'
          >
            <Input
              prefix={<MailFilled className='site-form-item-icon mr-3' />}
              placeholder='Your Email'
              className='border-none'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: "Please input your password!" }]}
            className='border-b-[1px] border-gray-400'
          >
            <Input
              prefix={<LockFilled className='site-form-item-icon mr-3' />}
              type='password'
              placeholder='Password'
              className='border-none'
            />
          </Form.Item>
          <Form.Item
            name='cpassword'
            rules={[
              { required: true, message: "Passwords repeat your password!" }
            ]}
            className='border-b-[1px] border-gray-400'
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon mr-3' />}
              type='password'
              placeholder='Repeat your password'
              className='border-none'
            />
          </Form.Item>
          <Form.Item>
            <Checkbox checked={check} onChange={onCheckboxChange}>
              I agree all statements in{" "}
              <a href='#' className='underline'>
                Terms of services
              </a>
            </Checkbox>
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type='primary'
                htmlType='submit'
                className={`${
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length ||
                  !check
                    ? "bg-blue-300"
                    : "bg-blue-500"
                }  p-3 h-12 w-28 my-3`}
              >
                Register
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <img
          src={OfficeIllustration}
          alt='Office Illustration'
          className='w-[22em]'
        />
        <a href={"#"} className='text-sm underline font-semibold opacity-60'>
          I am already member
        </a>
      </div>
    </div>
  );
};

export default FormComponent;
