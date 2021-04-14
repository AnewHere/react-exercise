/**
 * 菜单列表配置
 */


import {
  DesktopOutlined,
} from '@ant-design/icons';



const menuList = [
  {
    path: '/home',
    title: '首页',
    icon: <DesktopOutlined />
  },
  {
    path: '/product',
    title: '商品管理',
    icon: <DesktopOutlined />
  },
  {
    path: '/charts',
    title: "图表中心",
    icon: <DesktopOutlined />,
    children: [
      {
        path: '/charts/line',
        title: '折线图',
        icon: <DesktopOutlined />
      }, {
        path: '/charts/pie',
        title: "饼图",
        icon: <DesktopOutlined />
      },
      {
        path: '/charts/colums',
        title: '柱状图',
        icon: <DesktopOutlined />
      }
    ]

  }
];


export default menuList;