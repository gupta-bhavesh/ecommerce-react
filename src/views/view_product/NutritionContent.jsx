import { Table } from 'antd';
import * as React from 'react';

const rows = [
  ["Nutrition", "Per 100 g", "Per Per serve % RDA"],
  ["Energy (kcal)", "400", "7.6"],
  ["Protein (g)", "11.3", ""],
  ["Carbohydrates (g)", "64.6", ""],
  ["Total Sugar (g)", "6.3", ""],
  ["Added Sugar (g)", "2.8", "2.1"],
  ["Dietary fiber (g)", "10.8", ""],
  ["Total Fat (g)", "10.7", ""],
  ["Saturated Fat (g)", "4.1", "7.3"],
  ["Trans Fat (g)", "0", "0"],
  ["Sodium (mg)", "1900", "36.1"],
];

export default function CustomizedTables() {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
}