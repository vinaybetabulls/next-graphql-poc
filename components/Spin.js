import { Spin, Alert } from "antd";

import React from "react";

export default function Spinner({message, description}) {
  return (
    <Spin tip="Loading...">
      <Alert
        message={message}
        description={description}
        type="info"
      />
    </Spin>
  );
}
