import React, { Component } from 'react';
import { Card, Table, Popconfirm } from 'antd';
import LinkButton from '../../utils/LinkButton';
import AddModal from './AddModal';
import ModifyModal from './ModifyModal';
import { connect } from 'react-redux';
import { deleteProduct } from '../../Redux/actionCreator';




class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addModal: false,  //新增商品窗口状态
      modifyModal: false, //修改商品窗口状态
      InitialProduct: {},         //修改商品的初始数据
    }
  }

  //table列的设置
  columns = [
    {
      title: '商品名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '单位',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '数量',
      dataIndex: 'amout',
      key: 'amout',
    },
    {
      title: "操作",
      key: 'action',
      render: (record) => {
        return (
          <>
            <LinkButton onClick={() => { this.openModify(record) }}>修改</LinkButton>
            <Popconfirm
              title="确认删除该商品吗？"
              okText="确定"
              cancelText="取消"
              onConfirm={() => {
                this.deletePro(record);
              }}>
              <LinkButton style={{ color: 'red' }}>删除</LinkButton>
            </Popconfirm>
          </>
        )

      }
    }
  ];


  //打开新增窗口
  openAdd = () => {
    this.setState({ addModal: true });
  }
  //关闭新增窗口
  closeAdd = () => {
    this.setState({ addModal: false });
  }
  //提交新增商品数据
  confirmAdd = () => {
    this.setState({ addModal: false });
  }

  //打开修改商品modal
  openModify = (record) => {
    this.setState({ modifyModal: true, InitialProduct: record });
    console.log(record);

  }
  //关闭修改商品modal
  closeModify = () => {
    this.setState({ modifyModal: false });
  }
  //提交修改数据
  confirmModify = () => {
    this.setState({ modifyModal: false });
  }


  //删除商品
  deletePro = (record) => {
    this.props.deleteProduct(record);
  }
  render () {
    const extra = (<LinkButton onClick={this.openAdd} >新增商品</LinkButton>);

    const { addModal, modifyModal, InitialProduct } = this.state;
    return (
      <Card title="商品管理" extra={extra} >
        <Table
          // dataSource={this.dataSource}
          dataSource={this.props.product}
          columns={this.columns}
          pagination={{ pageSize: 3 }}
          bordered
        />

        {/* 新增商品modal */}
        <AddModal
          visible={addModal}
          onCreate={this.confirmAdd}
          onCancel={this.closeAdd} />

        {/* 修改商品modal */}
        <ModifyModal
          visible={modifyModal}
          onCreate={this.confirmModify}
          onCancel={this.closeModify}
          InitialProduct={InitialProduct}
        />
      </Card>
    )
  }
}

export default connect(
  state => ({ product: state.product }),
  { deleteProduct }
)(Product)
