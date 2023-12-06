import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Components/Cover/Cover";
import orderImg from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup','dessert', 'drinks']
  const category = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  console.log(category)

  const dessert = menu?.filter(item => item.category === 'dessert')
  const soup = menu?.filter(item => item.category === 'soup')
  const salad = menu?.filter(item => item.category === 'salad')
  const pizza = menu?.filter(item => item.category === 'pizza')
  const drinks = menu?.filter(item => item.category === 'drinks')
  return (
    <div>
            <Helmet>
        <meta charSet='utf-8' />
        <title>Bistro Boss | Order </title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <Cover img={orderImg} title={"Order Food"}></Cover>
      {/* tabs */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
            <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>      
      </Tabs>
    </div>
  );
};

export default Order;
