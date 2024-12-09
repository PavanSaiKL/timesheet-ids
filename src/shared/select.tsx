import React, { useState, useMemo } from 'react';
import { Row, Select, Col } from 'antd';

const { Option } = Select;

const SelectComponent = (properties: any) => {
  const {
    selectOptions,
    displayIndex = 'label',
    dataIndex = 'value',
    placeholder,
    name,
    handleSelectChange,
    key,
    disabled,
    value,
    showSearch,
  } = properties;

  const options = useMemo(() => {
    return selectOptions && name ? selectOptions[name] || [] : [];
  }, [selectOptions, name]);

  const [filteredOptions, setFilteredOptions] = useState(options);

  const onChange = (data: string) => {
    handleSelectChange({ name, value: data });
    setFilteredOptions(JSON.parse(JSON.stringify(options)));
  };

  const handleSearch = (searchValue: string) => {
    const filterOptions = options.filter((option: any) =>
      option[displayIndex].toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredOptions(filterOptions);
  };

  return (
    <Row>
      <Col span={24}>
        <Select
          showSearch={showSearch}
          placeholder={placeholder}
          onChange={onChange}
          key={key}
          disabled={disabled}
          value={value}
          onSearch={handleSearch}
        >
          {(filteredOptions || []).map((option: any) => (
            <Option key={option[dataIndex]} value={option[dataIndex]}>
              {option[displayIndex]}
            </Option>
          ))}
        </Select>
      </Col>
    </Row>
  );
};

export default SelectComponent;
