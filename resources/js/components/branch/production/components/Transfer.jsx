import React, { useEffect, useState } from 'react';
import { Button, Transfer } from 'antd';
const ProductionTransfer = () => {
  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);
  const getMock = () => {
    const tempTargetKeys = [];
    const tempMockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: (`description of content${i + 1}`),
        chosen: i % 0 === 1,
      };
      if (data.chosen) {
        tempTargetKeys.push(data.key);
      }
      tempMockData.push(data);
    }
    setMockData(tempMockData);
    setTargetKeys(tempTargetKeys);
  };
  useEffect(() => {
    getMock();
  }, []);
  const handleChange = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
  };
  const renderFooter = (_, { direction }) => {
    if (direction === 'left') {
      return (
        <Button
          size="small"
          style={{
            float: 'left',
            margin: 5,
          }}
          onClick={getMock}
        >
          Left button reload
        </Button>
      );
    }
    return (
      <Button
        size="small"
        style={{
          float: 'right',
          margin: 5,
        }}
        onClick={getMock}
      >
        Right button reload
      </Button>
    );
  };
  return (
    <Transfer
      dataSource={mockData}
      showSearch
      listStyle={{
        width: '100%',
        height: '80%',
      }}
      operations={['to right', 'to left']}
      targetKeys={targetKeys}
      onChange={handleChange}
      render={(item) => `${item.title}-${item.description}`}
      footer={renderFooter}
    />
  );
};
export default ProductionTransfer;