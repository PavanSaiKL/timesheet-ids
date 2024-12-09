import React from 'react';
import FormComponent from './shared/dynamic-form';

interface FormElement {
  span: number;
  offset?: number;
  element: {
    name: string;
    label: string;
    elementType: 'input' | 'textarea' | 'select' | 'checkbox' | 'button';
    disabled?: boolean;
    valuePropName?: string;
  };
  extraClassName?: string;
}

const formDef: {
  gutter: number;
  columns: FormElement[];
}[] = [
  {
    gutter: 16,
    columns: [
      {
        span: 12,
        element: {
          name: 'firstName',
          label: 'First Name',
          elementType: 'input',
        },
      },
      {
        span: 12,
        element: {
          name: 'lastName',
          label: 'Last Name',
          elementType: 'input',
        },
      },
      {
        span: 12,
        element: {
          name: 'bio',
          label: 'Bio',
          elementType: 'textarea',
        },
      },
      {
        span: 12,
        element: {
          name: 'gender',
          label: 'Gender',
          elementType: 'select',
        },
      },
      {
        span: 12,
        element: {
          name: 'terms',
          label: 'Accept Terms',
          elementType: 'checkbox',
          valuePropName: 'checked',
        },
      },
    ],
  },
];



const buttonDef = [
  {
    flexConfig: { justify: 'center', align: 'middle', gap: '10px' },
    button: [
      {
        elementType: 'button',
        type: 'primary',
        htmlType: "submit",
        text: "Save",
        name: "save",
        className: 'button-gap'
      },
      {
        elementType: 'button',
        type: 'primary',
        htmlType: "submit",
        text: "cancel",
        name: "cancel",
        danger: true,
      }
    ],
  },
];

const selectOptions = {
  gender: [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ],
};

const handleFinish = (values: any) => {
  console.log('Form Values:', values);
};

const handleButton = (config: any) => {
  console.log('Button Clicked:', config);
};

const MyFormPage = () => {
  return (
    <div>
      <h1>Sample Form</h1>
      <FormComponent
        formDef={formDef}
        buttonDef={buttonDef}
        layout="vertical"
        autoComplete="off"
        handleFinish={handleFinish}
        selectOptions={selectOptions}
        handleButton={handleButton}
      />
    </div>
  );
};

export default MyFormPage;
