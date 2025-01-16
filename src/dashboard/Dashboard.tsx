import React from 'react';
import Icon from '@mdi/react';
import { mdiCog, mdiPlus } from '@mdi/js';
import { Table, Button, Tabs, TabsList, TabsItem } from '@kaaylabs-v2/ids';

const Dashboard = () => {
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
            <Table
              className="bg-[#fff]"
              columns={[
                { dataIndex: 'Subscription', title: 'Subscription' },
                { dataIndex: 'Subscribed_On', title: 'Subscribed On' },
                { dataIndex: 'Expiration', title: 'Expiration' },
                { dataIndex: 'Cost', title: 'Cost' },
              ]}
              dataSource={[
                {
                  Cost: '$4.99',
                  Expiration: 'Andrew Miller',
                  Subscribed_On: '2020-06-06',
                  Subscription: 'Kaaylabs',
                },
                {
                  Cost: '$5.99',
                  Expiration: 'Andrew Miller',
                  Subscribed_On: '2022-07-12',
                  Subscription: 'FAST TV Premium+',
                },
                {
                  Cost: '$6.99',
                  Expiration: 'Andrew Miller',
                  Subscribed_On: '2024-12-12',
                  Subscription: 'Bom',
                },
              ]}
              onPageChange={() => {}}
              onSorting={() => {}}
            />
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
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2"></div>
            <div className="w-full md:w-1/2 text-center mt-2 md:mt-0">
              <p className="text-3xl md:text-4xl font-bold text-gray-800">37.5%</p>
              <p className="text-gray-500">increase</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Product Stats</h3>
          <ul className="list-disc pl-5 text-sm md:text-base text-gray-600">
            <li>iPhone 6 - X: 173 units sold</li>
            <li>Google Pixel: 89 units sold</li>
            <li>Sony: 100 units sold</li>
            <li>Huawei: 90 units sold</li>
            <li>Samsung Galaxy: 140 units sold</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
