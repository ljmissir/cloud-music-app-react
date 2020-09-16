import React, { useState } from "react";
import { TabBar } from "antd-mobile";
import { createHashHistory } from "history";
import "./index.scss";

function NavTab() {
  const tabBar = [
    { title: "发现", path: "/find", icon: "netease" },
    { title: "视频", path: "/video", icon: "video" },
    { title: "我的", path: "/user", icon: "music" },
    { title: "云村", path: "/cloud", icon: "qunliao" },
    { title: "账号", path: "/account", icon: "zhanghao" },
  ];

  const [selectTab, setSelectTab] = useState("发现");

  const history = createHashHistory();

  const changeTab = (tabBarItem) => {
    history.push(tabBarItem.path);
    setSelectTab(tabBarItem.title);
  };

  const renderTabBarItem = (tabBar) => {
    return tabBar.map((tabBarItem) => {
      return (
        <TabBar.Item
          title={tabBarItem.title}
          key={tabBarItem.path}
          icon={<span className={"iconfont icon-" + tabBarItem.icon}></span>}
          selected={selectTab === tabBarItem.title}
          onPress={() => {
            changeTab(tabBarItem);
          }}
          selectedIcon={
            <span className={"red iconfont icon-" + tabBarItem.icon}></span>
          }
        />
      );
    });
  };

  return (
    <TabBar
      tabBarPosition="bottom"
      unselectedTintColor="#949494"
      tintColor="red"
    >
      {renderTabBarItem(tabBar)}
    </TabBar>
  );
}

export default NavTab;
