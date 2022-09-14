import {createContext, useContext, useState} from 'react'
import {
  initialQueryRequest,
  QueryRequestContextProps,
  QueryState,
} from '../../../../../../res/helpers'

const QueryRequestContext = createContext<QueryRequestContextProps>(initialQueryRequest)

function QueryRequestProvider({ children }: any) {
  const [state, setState] = useState<QueryState>(initialQueryRequest.state)

  const updateState = (updates: Partial<QueryState>) => {
    const updatedState = { ...state, ...updates } as QueryState
    setState(updatedState)
  }

  return (
    <QueryRequestContext.Provider value={{ state, updateState }}>
      {children}
    </QueryRequestContext.Provider>
  )
}

const useQueryRequest = () => useContext(QueryRequestContext)
export {QueryRequestProvider, useQueryRequest}
