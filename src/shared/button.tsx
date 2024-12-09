import { Button } from 'antd';
import React from 'react';

const ButtonComponent = (properties: any) => {
  const {
    text,
    handleButton,
    type,
    size,
    icon,
    className,
    style,
    loadingIndex,
    disabledIndex,
    htmlType,
    name,
    danger,
    extra = {},
    key,
  } = properties;

  const onClick = () => handleButton({ name });

  return (
    <Button
      htmlType={htmlType}
      type={type}
      size={size}
      icon={icon}
      className={className}
      style={style}
      loading={extra[loadingIndex]}
      danger={danger}
      disabled={extra[disabledIndex]}
      key={key}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
