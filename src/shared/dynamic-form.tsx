import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Input, Checkbox } from 'antd';
import SelectComponent from './select';
import ButtonComponent from './button';

const { TextArea } = Input;

type FormElement = {
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
};

type ButtonDef = {
  flexConfig: any;
  button: any[];
};

type FormComponentProps = {
  formDef: {
    gutter: number;
    columns: FormElement[];
  }[];
  buttonDef: ButtonDef[];
  layout?: 'horizontal' | 'vertical' | 'inline';
  autoComplete?: 'on' | 'off';
  handleFinish?: (values: any) => void;
  selectOptions?: any;
  handleButton?: (config: any) => void;
  extra?: any;
  defaultValue?: any;
  handleFormChange?: (event: any, formState: any) => void;
  className?: string;
  formItemLayout?: any;
  editAccess?: boolean;
  customizeDisabled?: boolean;
};

const FormComponent: React.FC<FormComponentProps> = ({
  formDef = [],
  buttonDef = [],
  layout,
  autoComplete,
  handleFinish = () => {},
  selectOptions,
  handleButton = () => {},
  extra = {},
  defaultValue = {},
  handleFormChange = () => {},
  className,
  formItemLayout = {},
  editAccess = false,
  customizeDisabled = false,
}) => {
  const [form] = Form.useForm();
  const [updateForm, setUpdateForm] = useState({});

  useEffect(() => {
    if (defaultValue) {
      form.setFieldsValue(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (updateForm) {
      form.setFieldsValue({ ...form.getFieldsValue(), ...updateForm });
    }
  }, [updateForm]);

  const handleSelectChange = ({ name, value }: { name: string; value: any }) => form.setFieldsValue({ [name]: value });

  const renderElement = (element: FormElement['element'], key: string) => {
    const { elementType, disabled = false, name } = element;

    const elements: { [key: string]: (props: any) => React.ReactNode } = {
      input: (inputProperties) => <Input key={key} disabled={customizeDisabled || disabled} {...inputProperties} />,
      textarea: (inputProperties) => (
        <TextArea
          key={key}
          disabled={customizeDisabled || disabled}
          autoSize={{ minRows: 2, maxRows: 6 }}
          {...inputProperties}
        />
      ),
      select: (selectProperties) => (
        <SelectComponent
          key={key}
          selectOptions={selectOptions}
          handleSelectChange={handleSelectChange}
          value={form.getFieldsValue()[name]}
          {...selectProperties}
        />
      ),
      checkbox: (checkProperties) => <Checkbox key={key} {...checkProperties} />,
      button: (buttonProperties) => <ButtonComponent handleButton={handleButton} extra={extra} {...buttonProperties} />,
    };

    return elements[elementType](element);
  };

  const onChange = (event: any) => {
    if (handleFormChange) {
      handleFormChange(event, { updateForm: setUpdateForm });
    }
  };

  return (
    <Form
      form={form}
      layout={layout}
      {...formItemLayout}
      autoComplete={autoComplete}
      onFinish={handleFinish}
      onChange={onChange}
      className={className}
    >
      {formDef.map(({ gutter, columns }, rowIndex) => (
        <Row gutter={gutter} key={`row_${rowIndex}`}>
          {columns.map(({ span, offset, element, extraClassName = '' }, colIndex) => (
            <Col span={span} offset={offset} key={`col_${rowIndex}_${colIndex}`} className={extraClassName}>
              <Form.Item name={element.name} label={element.label} valuePropName={element?.valuePropName || 'value'}>
                {renderElement(element, `${rowIndex}_${colIndex}`)}
              </Form.Item>
            </Col>
          ))}
        </Row>
      ))}
      {buttonDef.map(({ flexConfig, button }) => (
        <Row {...flexConfig}>{button.map((config: any) => renderElement(config, `button_${config.key}`))}</Row>
      ))}
    </Form>
  );
};

export default FormComponent;
