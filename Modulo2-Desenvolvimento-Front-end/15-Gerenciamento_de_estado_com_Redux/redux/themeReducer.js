const THEME_INITIAL_STATE = {
  theme: 'dark',
};


const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case "THEME":
      return {
        ...state,
        theme: (state.theme === 'dark') ? 'light' : 'dark',
      };
    default:
      return state;
  }
};


const store = Redux.createStore(themeReducer);