import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { modifyProduct } from '../../Redux/actionCreator';


const CollectionCreateForm = ({ visible, onCreate, onCancel, InitialProduct, modifyProduct }) => {
  const [form] = Form.useForm();

  //表单初始值设置
  const getInitialize = () => {
    let { id, name, unit, price, amout } = InitialProduct;
    //设置初始值
    form.setFieldsValue({
      id, name, unit, price, amout
    });
  }

  useEffect(() => {
    getInitialize();
  }, [InitialProduct])

  //useEffect函数

  const onFinish = () => {
    //表单验证
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onCreate(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
    //提交数据
    let data = form.getFieldsValue();
    modifyProduct(data);

  }
  return (
    <Modal
      visible={visible}
      title="修改商品"
      okText="确定"
      cancelText="取消"
      forceRender
      onCancel={onCancel}
      onOk={() => {
        onFinish();
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="id"
          label="商品序号"
          rules={[
            {
              required: true,
              message: '请输入商品序号!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="商品名称"
          rules={[
            {
              required: true,
              message: '请输入商品名称!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="unit"
          label="单位"
          rules={[
            {
              required: true,
              message: '请输入商品单位!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="价格"
          rules={[
            {
              required: true,
              message: '请输入商品价格!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="amout"
          label="数量"
          rules={[
            {
              required: true,
              message: '请输入商品数量!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default connect(
  state => ({}),
  { modifyProduct }
)(CollectionCreateForm);