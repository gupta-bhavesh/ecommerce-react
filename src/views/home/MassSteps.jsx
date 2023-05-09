import { Button, InputNumber, message, Result, Select, Steps, theme, Typography } from 'antd';
import { useState } from 'react';
import { CheckCircleOutlined, CheckOutlined, LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Radio, Space } from 'antd';
const MassSteps = ({ modalCallback }) => {

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const options = [{
    value: "Bajra",
    label: "Bajra",
  }, {
    value: "Ragi",
    label: "Ragi",
  }, {
    value: "Jowar",
    label: "Jowar",
  }, {
    value: "Sorghum",
    label: "Sorghum",
  }, {
    value: "a",
    label: "a",
  }, {
    value: "b",
    label: "b",
  }]
  const steps = [
    {
      title: 'Step 1',
      content: <div style={{ height: 250 }}>
        <Typography.Title level={3}>What is your height {"("}in cm{")"}?</Typography.Title>
        <InputNumber style={{ marginBottom: 20, marginTop: 20 }} size="large" onChange={() => console.log("value")} />
      </div >,
    },
    {
      title: 'Step 2',
      content: <div style={{ height: 250 }}>
        <Typography.Title level={3}>What is your weight?</Typography.Title>
        <InputNumber style={{ marginBottom: 20, marginTop: 20 }} size="large" onChange={() => console.log("value")} />
      </div >
    },
    {
      title: 'Step 3',
      content: <div style={{ height: 250 }}>
        <Typography.Title level={3}>What is your age?</Typography.Title>
        <InputNumber style={{ marginBottom: 20, marginTop: 20 }} size="large" onChange={() => console.log("value")} />
      </div >
    },
    {
      title: 'Step 4',
      content: <div style={{ height: 250 }}>
        <Typography.Title level={3}>What is your motivation</Typography.Title>
        <Radio.Group value={value}>
          <Space direction="vertical">
            <Radio value={1}>Option A</Radio>
            <Radio value={2}>Option B</Radio>
            <Radio value={3}>Option C</Radio>
            <Radio value={4}>
              More...
              {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
            </Radio>
          </Space>
        </Radio.Group>
      </div >,
    },
    {
      title: 'Step 5',
      content: <div style={{ height: 250 }}>
        <Typography.Title level={3}>Are you allergic to any millet</Typography.Title>
        <Select
          mode="tags"
          placeholder="Please select"
          style={{
            width: '50%',
            marginBottom: 20,
            marginTop: 20
          }}
          options={options}
        />
      </div>,
    },
    {
      title: 'Done',
      content: <Result style={{ height: 275 }}
        status="success"
        title="Yay! You have finished all the steps"
        subTitle="Now you can see reccomanded products according to data entered."
      />
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: <CheckCircleOutlined style={{ marginTop: 8, fontSize: 20 }} />
  }));
  const contentStyle = {
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          padding: 24,
        }}
      >
        {current < steps.length - 1 && (
          <button
            onClick={() => next()}
            class="button button-small"
            type="button"
            style={{ position: "absolute", right: 30, bottom: 20 }}>
            Next
          </button>
        )}
        {current === steps.length - 1 && (
          <button
            onClick={() => modalCallback()}
            class="button button-small"
            type="button"
            style={{ position: "absolute", right: 30, bottom: 20 }}>
            Done
          </button>
        )}
        {current > 0 && (
          <button
            onClick={() => prev()}
            style={{ position: "absolute", left: 30, bottom: 20 }}
            class="button button-small button-border button-border-gray"
            type="button">
            Previous
          </button>
        )}
      </div>
    </>
  );
};
export default MassSteps;