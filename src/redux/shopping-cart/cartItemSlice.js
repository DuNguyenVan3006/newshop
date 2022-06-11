import {createSlice} from '@reduxjs/toolkit'


const items = localStorage.getItem('cartItems1') !== null ? JSON.parse(localStorage.getItem('cartItems1')) : []
console.log(items)
const initialState = {
    value: items
}


export const cartItemSlice = createSlice({
    name: 'cartItems1',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload

            const duplicate = findItem(state.value, newItem)

            if( duplicate.length > 0)
            {
                state.value = delItem(state.value, newItem)
            
                
                state.value = [
                    ...state.value, 
                    {
                        ...newItem,
                        id: duplicate[0].id,
                        quantity: duplicate[0].quantity + newItem.quantity
                    }
                ]
            }
            else
            {
            console.log(newItem)

                state.value = [
                    ...state.value,
                    {
                        ...newItem,
                        id: state.value.length > 0 ? state.value[state.value.length -1 ].id + 1 : 1
                    }
                ]
            }

            localStorage.setItem('cartItems1', JSON.stringify(sortItems(state.value)))
           
           
            // console.log(state.value)


            // lưu product muốn add vào newItem qua action.payload
            // tìm kiếm, product đó đã có trong state hay chưa lưu vào duplicate
            // nếu có rồi thì ta sẽ xóa product đó trong state của giỏ hàng
            // sau đó  dùng spread .... để trả về các dữ liệu product khác trong cart, 
            // product add vào thì ...newItem để add các dữ liệu của product đó vào cart
            // update quantity bằng cách + quantity cũ trong duplicate và quantity mới
            // giữ nguyên lại id
            // Nếu chưa có thì thêm newItem đó vào giỏ hàng, id sẽ lấy id product cuối cùng + 1
        },
        updateItem: (state, action) => {
            const itemUpdate = action.payload

            const item = findItem(state.value, itemUpdate)

            if( item.length > 0)
            {
                state.value = delItem(state.value, itemUpdate)

                state.value =[
                    ...state.value, {
                        ...itemUpdate,
                        id: item[0].id
                    }
                ]


            }

            localStorage.setItem('cartItems1', JSON.stringify(sortItems(state.value)))
        },
        deleteItem: (state, action) => {
            const itemDelete = action.payload

            state.value = delItem(state.value, itemDelete)

            localStorage.setItem('cartItems1', JSON.stringify(sortItems(state.value)))
        }

    }

})


const findItem = (arr, item) => arr.filter( e => e.slug === item.slug 
                                                && e.color === item.color
                                                && e.size === item.size)
const delItem = (arr, item) => arr.filter( e => e.slug !== item.slug
                                                || e.color !== item.color
                                                || e.size !== item.size)

const sortItems = arr => arr.sort( (a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))

const {actions, reducer} = cartItemSlice

export const {addItem, updateItem, deleteItem} = actions

export default reducer