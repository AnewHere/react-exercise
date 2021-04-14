import { ADD_PRODUCT, MODIFY_PRODUCT, DELETE_PRODUCT } from './actionType';
import { combineReducers } from 'redux';




//product数据列表
const initialProduct = [
  {
    key: '1',
    name: '足球',
    unit: '个',
    price: 25.13,
    amout: 100,
    id: '1'
  },
  {
    key: '2',
    name: '篮球',
    unit: '个',
    price: 225.13,
    amout: 150,
    id: '2'
  },
  {
    key: '3',
    name: '篮球',
    unit: '个',
    price: 225.13,
    amout: 150,
    id: '3'
  },
  {
    key: '4',
    name: '篮球',
    unit: '个',
    price: 225.13,
    amout: 150,
    id: '4'
  },
  {
    key: '5',
    name: '篮球',
    unit: '个',
    price: 225.13,
    amout: 150,
    id: '5'
  },
  {
    key: '6',
    name: '篮球',
    unit: '个',
    price: 225.13,
    amout: 150,
    id: '6'
  },
  {
    key: '7',
    name: '篮球',
    unit: '个',
    price: 225.13,
    amout: 150,
    id: '7'
  },

];

//商品列表的reducer
const product = (state = initialProduct, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.product];

    //根据id删除商品
    case DELETE_PRODUCT:
      let { id } = action.product;
      let newState = state.filter(item => {
        if (item.key !== id) {
          return item;
        }
      })
      return newState;

    // 根据key删除商品，然后在添加key
    case MODIFY_PRODUCT:
      let { key } = action.product;
      let modifyState = state.filter(item => {
        if (item.key !== key) {
          return item;
        }
      })
      modifyState.push(action.product);
      return modifyState;
    default:
      return state;
  }
}
export default combineReducers({
  product
});
