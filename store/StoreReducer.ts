import { ActionTypes } from './ActionTypes'
import IState from './types/stateInterfaces'

const intialState: IState = {
  products: [],
  product: {} as TProduct,
  cart: [] as TProduct[],
  isLoading: false,
}

const StoreReducer = (store = intialState, action: TAction): IState => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_DATA:
      return {
        ...store,
        products: action.payload as TProduct[],
      }
    case ActionTypes.FETCH_ONCE_ELEMENT:
      return {
        ...store,
        product: action.payload as TProduct,
      }
    default:
      return store
  }
}
export { intialState }
export default StoreReducer
