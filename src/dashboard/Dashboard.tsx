import React from 'react';
import Icon from '@mdi/react';
import { mdiCog, mdiPlus } from '@mdi/js';
import { Table, Button, Tabs, TabsList, TabsItem } from '@kaaylabs-v2/ids';
import { PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const tableColumns = [
    { dataIndex: 'Subscription', title: 'Subscription' },
    { dataIndex: 'Subscribed_On', title: 'Subscribed On' },
    { dataIndex: 'Expiration', title: 'Expiration' },
    { dataIndex: 'Cost', title: 'Cost' },
  ];

  const tableData = [
    {
      Subscription: 'Kaaylabs',
      Subscribed_On: '2020-06-06',
      Expiration: '2023-06-06',
      Cost: '$4.99',
    },
    {
      Subscription: 'FAST TV Premium+',
      Subscribed_On: '2022-07-12',
      Expiration: '2023-07-12',
      Cost: '$5.99',
    },
    {
      Subscription: 'Bom',
      Subscribed_On: '2024-12-12',
      Expiration: '2025-12-12',
      Cost: '$6.99',
    },
    {
      Subscription: 'Microsoft Office 365',
      Subscribed_On: '2020-12-25',
      Expiration: '2023-12-25',
      Cost: '$99.99',
    },
    {
      Subscription: 'Adobe Creative Cloud',
      Subscribed_On: '2021-08-30',
      Expiration: '2023-08-30',
      Cost: '$59.99',
    },
    {
      Subscription: 'Zoom Pro',
      Subscribed_On: '2021-04-10',
      Expiration: '2023-04-10',
      Cost: '$19.99',
    },
    {
      Subscription: 'LinkedIn Premium',
      Subscribed_On: '2022-09-15',
      Expiration: '2023-09-15',
      Cost: '$29.99',
    },
  ];

  const progressData = [{ value: 37.5 }, { value: 62.5 }];

  const waveData = Array.from({ length: 24 }, (_, i) => ({
    name: i,
    value: Math.sin(i / 3) * 20 + 40,
  }));

  const productStats = [
    { name: 'iPhone 6 - X', units: 173 },
    { name: 'Google Pixel', units: 89 },
    { name: 'Sony', units: 100 },
    { name: 'Huawei', units: 90 },
    { name: 'Samsung Galaxy', units: 140 },
  ];

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      <div className="flex flex-col md:w-3/4 w-full bg-[#f2f2f2] p-6 md:p-14 md:ml-14">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <h1 className="text-xl md:text-2xl font-bold">SALES PERFORMANCE</h1>
            <div className="mt-2 md:mt-0">
              <select className="border border-gray-300 rounded p-2">
                <option>2017</option>
              </select>
            </div>
          </div>
          <p className="text-gray-600 mb-6 text-sm md:text-base">Overview of your product sales</p>
          <Tabs defaultValue="products">
            <TabsList>
              <TabsItem value="products">Products</TabsItem>
              <TabsItem value="orders">Orders</TabsItem>
              <TabsItem value="countries">Countries</TabsItem>
              <TabsItem value="others">Others</TabsItem>
            </TabsList>
          </Tabs>
          <div className="overflow-x-auto mt-6">
            <Table className="bg-[#fff]" columns={tableColumns} dataSource={tableData} />
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
            <Button className="text-[#00008B]" colorScheme="neutral-8">
              Load More
            </Button>
            <Button
              className="bg-[#9B5FC0] hover:bg-[#7A4BA1] text-white px-4 py-2 rounded flex items-center"
              startIcon={<Icon path={mdiPlus} size={1} className="text-white" />}
            >
              Add Product
            </Button>
          </div>
        </div>
      </div>
      <div className="md:w-1/4 w-full bg-white p-6 mt-6 md:mt-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold">STATISTICS</h2>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            Sales Report
            <Icon path={mdiCog} size={1} className="ml-2" />
          </h3>
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={progressData}
                    innerRadius="85%"
                    outerRadius="100%"
                    startAngle={180}
                    endAngle={-180}
                    dataKey="value"
                  >
                    <Cell fill="#FF9F43" />
                    <Cell fill="#F2F2F2" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-3xl md:text-4xl font-bold text-gray-800">37.5%</p>
                <p className="text-gray-500">increase</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Product Stats</h3>
          <div className="h-32 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={waveData}>
                <Line type="monotone" dataKey="value" stroke="#FF9F43" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {productStats.map((product) => (
              <div key={product.name} className="space-y-1">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{product.name}</span>
                  <span>{product.units} units sold</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className="bg-[#FF9F43] h-1.5 rounded-full"
                    style={{
                      width: `${(product.units / 200) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
