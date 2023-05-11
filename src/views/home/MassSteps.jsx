import { Button, InputNumber, message, Result, Select, Steps, theme, Typography } from 'antd';
import { useState } from 'react';
import { CheckCircleOutlined, CheckOutlined, LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Radio, Space } from 'antd';
import { ImageLoader } from '@/components/common';
import firebaseInstance from '../../services/firebase';

const MassSteps = ({ modalCallback }) => {

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [motto, setMotto] = useState("");

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
    value: "Banyard Millet",
    label: "Banyard Millet",
  }, {
    value: "Proso Millet",
    label: "Proso Millet",
  }, {
    value: "Foxtail Millet",
    label: "Foxtail Millet",
  }, {
    value: "Kodo Millet",
    label: "Kodo Millet",
  }, {
    value: "Little Millet",
    label: "Little Millet",
  }, {
    value: "Buckwheat",
    label: "Buckwheat",
  }, {
    value: "Amaranthus",
    label: "Amaranthus",
  }];

  const massUpdate = () => {
    console.log(age, weight, height, motto);
    const mass = (height - 150) / 30 + age / 60 + (weight - 50) / 50 + motto;
    console.log(mass);
    firebaseInstance.updateProfile(firebaseInstance.auth.currentUser.uid, { age: age, weight: weight, height: height, motto: motto, mass: mass });

    modalCallback()
  }

  const steps = [
    {
      title: '',
      content: <div style={{ height: 250, display: 'flex' }}>
        <img
          alt={""}
          style={{ width: 250, height: 250 }}
          src={"../../../static/ques-mark.png"}
        />
        <div style={{ width: "100%" }}>
          <Typography.Title level={3}>What is your height {"("}in cm{")"}?</Typography.Title>
          <InputNumber value={height} style={{ marginTop: 20 }} size="large" onChange={setHeight} />
        </div>
      </div >,
    },
    {
      title: '',
      content: <div style={{ height: 250, display: 'flex' }}>
        <img
          alt={""}
          style={{ width: 250, height: 250 }}
          src={"../../../static/ques-mark.png"}
        />
        <div style={{ width: "100%" }}>
          <Typography.Title level={3}>What is your weight {"("}in kg{")"}?</Typography.Title>
          <InputNumber value={weight} style={{ marginTop: 20 }} size="large" onChange={setWeight} />
        </div>
      </div >
    },
    {
      title: '',
      content: <div style={{ height: 250, display: 'flex' }}>
        <img
          alt={""}
          style={{ width: 250, height: 250 }}
          src={"../../../static/ques-mark.png"}
        />
        <div style={{ width: "100%" }}>
          <Typography.Title level={3}>What is your age?</Typography.Title>
          <InputNumber value={age} style={{ marginTop: 20 }} size="large" onChange={setAge} />
        </div>
      </div >
    },
    {
      title: '',
      content: <div style={{ height: 250, display: 'flex' }}>
        <img
          alt={""}
          style={{ width: 250, height: 250 }}
          src={"../../../static/ques-mark.png"}
        />
        <div style={{ width: "100%" }}>
          <Typography.Title level={3}>What is your motivation</Typography.Title>
          <Radio.Group value={motto} onChange={(val) => setMotto(val.target.value)}>
            <Space direction="vertical" style={{ alignItems: "start" }}>
              <Radio value={0} style={{ padding: 5, background: "transparent", border: 0 }}>Weight Loss</Radio>
              <Radio value={0.5} style={{ padding: 5, background: "transparent", border: 0 }}>Healthy Living</Radio>
              <Radio value={1} style={{ padding: 5, background: "transparent", border: 0 }}>Explore</Radio>
            </Space>
          </Radio.Group>
        </div>
      </div >,
    },
    {
      title: '',
      content: <div style={{ height: 250, display: 'flex' }}>
        <img
          alt={""}
          style={{ width: 250, height: 250 }}
          src={"../../../static/ques-mark.png"}
        />
        <div style={{ width: "100%" }}>
          <Typography.Title level={3}>Are you allergic to any millet</Typography.Title>
          <Select
            mode="tags"
            placeholder="Please select"
            style={{
              width: '50%',
              marginTop: 20
            }}
            options={options}
          />
        </div>
      </div>,
    },
    {
      title: '',
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
            className="button button-small"
            type="button"
            style={{ position: "absolute", right: 30, bottom: 20 }}>
            Next
          </button>
        )}
        {current === steps.length - 1 && (
          <button
            onClick={massUpdate}
            className="button button-small"
            type="button"
            style={{ position: "absolute", right: 30, bottom: 20 }}>
            Done
          </button>
        )}
        {current > 0 && (
          <button
            onClick={() => prev()}
            style={{ position: "absolute", left: 30, bottom: 20 }}
            className="button button-small button-border button-border-gray"
            type="button">
            Previous
          </button>
        )}
      </div >
    </>
  );
};
export default MassSteps;