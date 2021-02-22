import { Input } from "antd";

export const Field = (props) => {
  return <Input placeholder={props.placeholder} type={props.type} {...props} />;
};

export const SelectField = (defaultValue, values) => {
  return (
    <Select defaultValue={defaultValue} style={{ width: 120 }}>
      {values.map((value, index) => {
        return (
          <Option value={value} key={index}>
            {value}
          </Option>
        );
      })}
    </Select>
  );
};


