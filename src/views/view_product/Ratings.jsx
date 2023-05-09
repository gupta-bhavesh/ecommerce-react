import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Input from 'antd/es/input/Input';
import { Dropdown, Space, Typography } from 'antd';
const items = [
  {
    key: '0',
    label: 'Most Recent',
  },
  {
    key: '1',
    label: 'Highest Rating',
  },
  {
    key: '2',
    label: 'Lowest Rating',
  }
];

const RateComment = () => {
  const [star, setStar] = useState(0);
  const [sort, setSort] = useState('0');
  let reviewCnt = 36;
  let starCnt = [29, 3, 2, 1, 1];
  let totalReview = 0;
  for (let i = 0; i < starCnt.length; i++) totalReview += starCnt[i];

  const onClick = ({ key }) => {
    setSort(key);
  };

  const SortReview = () => {
    return <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ['0'],
        onClick
      }}
    >
      <Typography>
        <Space>
          {items[parseInt(sort)].label}
          <DownOutlined />
        </Space>
      </Typography>
    </Dropdown >
  }

  const ReviewSummary = () => {
    return (
      <div style={{ display: "grid" }}>
        {
          starCnt.map((num, i) => <div style={{ width: "60%", display: "flex", alignItems: "center", justifyContent: "space-around" }} key={i}>
            < Rate value={5 - i} disabled style={{ color: "black", margin: 3 }} />
            <div style={{ width: 70, height: 15, display: "flex", backgroundColor: "gray", padding: 1 }}>
              <div style={{ flex: num / totalReview, backgroundColor: "black" }} />
              <div style={{ flex: 1 - num / totalReview, backgroundColor: "white" }} />
            </div>
            <div style={{ width: 10 }}>{(num / totalReview * 100) | 0}{"%"}</div>
            <div style={{ width: 10 }}>{"("}{num}{")"}</div>
          </div>)
        }
        <div style={{ width: "25%", margin: 20, padding: 10, border: "1px solid black" }} >
          <SortReview />
        </div>
      </div>
    )
  }

  const submitReview = () => {
    console.log('SubmitReview', star);
    setStar(0)
  }

  return <div style={{ display: 'flex' }}>
    <div style={{ width: "50%" }}>
      <Typography.Title level={4} style={{ margin: 10 }}>
        Customer Reviews
      </Typography.Title>
      <ReviewSummary />
    </div>

    <div style={{ width: "50%" }}>
      <Typography.Title level={4} style={{ margin: 10 }}>
        Write a review
      </Typography.Title>
      <Input showCount placeholder="Give your review a title" maxLength={50} style={{ margin: 10 }} />
      <TextArea
        showCount
        maxLength={200}
        style={{ height: 120, margin: 10 }}
        // onChange={onChange}
        placeholder="Write your comments here"
      />
      <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <Typography.Title level={5} style={{ margin: 10, marginBottom: 0 }}>
            Rate this product
          </Typography.Title>
          < Rate value={star} onChange={setStar} style={{ color: "black", margin: 10 }} />
        </div>
        <button
          className={`button button-small`}
          onClick={submitReview}
          type="button"
          style={{ height: 40 }}
        >Submit</button>
      </div>
    </div>
  </div>
};
export default RateComment;