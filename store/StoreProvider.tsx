import React from 'react'
import { createContext, useReducer } from 'react'
import StoreReducer, { intialState } from './StoreReducer'

const StoreContext = createContext<any>(intialState)

const StoreProvider = ({ children }: TChildren): React.ReactElement => {
  const [store, dispatch] = useReducer(StoreReducer, intialState)
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}
export { StoreContext }
export default StoreProvider
