const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case "STATUS":
      return {
        ...state,
        status: (state.status === 'offline') ? 'online' : 'offline',
      };
    default:
      return state;
  }
};


const store = Redux.createStore(statusReducer);