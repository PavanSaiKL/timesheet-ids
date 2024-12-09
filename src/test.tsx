import React from 'react';
import { Form, Typography, FormInput, Button } from '@kaaylabs-v2/ids';

const LoginForm = () => {
  return (
    <Form
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Form submitted');
      }}
    >
      <Typography
        as="h2"
        className="mb-4 text-center text-2xl font-semibold"
      >
        Login
      </Typography>

      <FormInput
        allowClear
        name="email"
        placeholder="Email"
        rules={[
          {
            message: 'Please enter an email address',
            required: true,
            type: 'email',
          },
        ]}
        type="email"
      />

      <FormInput
        allowClear
        name="password"
        placeholder="Password"
        rules={[
          {
            message: 'Please enter your password',
            required: true,
            type: 'password',
          },
        ]}
        type="password"
      />

      <Button type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
