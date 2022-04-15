
const defaultState = {
  customers: []
  }
  
export  const customersReducer = (state = defaultState, action : any) => {
    switch (action.type) {
      case 'ADD_NEW_CASTUMER':
        return { ...state, customers: state.customers + action.users };
      case 'ADD_DELETE_CUSTOMER':
        return { ...state, customers: state.customers + action.users };
      default:
        return state;  
    }
  }