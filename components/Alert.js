import { Alert } from "antd";

const AlertMessage = ({ type, message }) => {
    console.log("inside alert", type, message);
  return <Alert message={message} type={type} showIcon />;
};

export default AlertMessage;
