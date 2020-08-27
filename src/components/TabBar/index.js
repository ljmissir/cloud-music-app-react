import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { TabBar } from "antd-mobile";
import "./index.scss";

function Tab(props) {
  const tabBar = [
    { title: "发现", path: "/find" },
    { title: "视频", path: "/video" },
    { title: "我的", path: "/user" },
    { title: "云村", path: "/cloud" },
    { title: "账号", path: "/account" },
  ];
  const [tabBarList] = useState(tabBar);
  const [selectTab, setSelectTab] = useState("发现");
  const { history } = props;

  const changeTab = (tabBarItem) => {
    console.log(props);
    // history.push(tabBarItem.path);
    setSelectTab(tabBarItem.title);
  };

  const renderTabBarItem = (tabBarList) => {
    return tabBarList.map((tabBarItem) => {
      return (
        <TabBar.Item
          title={tabBarItem.title}
          key={tabBarItem.path}
          selected={selectTab === tabBarItem.title}
          onPress={() => {
            changeTab(tabBarItem);
          }}
          icon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat",
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat",
              }}
            />
          }
        />
      );
    });
  };

  return (
    <TabBar
      tabBarPosition="bottom"
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
    >
      {renderTabBarItem(tabBarList)}
    </TabBar>
  );
}

export default Tab;
