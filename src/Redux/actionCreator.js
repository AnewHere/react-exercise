import { ADD_PRODUCT, MODIFY_PRODUCT, DELETE_PRODUCT } from './actionType';


//新增商品
export const addProduct = (product) => {
  return { type: ADD_PRODUCT, product }
}

//修改商品
export const modifyProduct = (product) => {
  return { type: MODIFY_PRODUCT, product }
}

//删除商品
export const deleteProduct = (product) => {
  return { type: DELETE_PRODUCT, product }
}