import { combineReducers } from 'redux'
import cartReducer from './reducers/cart/cart.reducer'
import userReducer from './reducers/user/user.reducers'
import categoryReducer from './reducers/category/category.reducer'

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer
})

export default rootReducer
