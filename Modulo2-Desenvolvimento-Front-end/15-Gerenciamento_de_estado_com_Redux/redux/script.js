

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


/* const store = Redux.createStore(statusReducer); */

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


/* const store = Redux.createStore(themeReducer); */


const reducerCombinado = combineReducers({
  statusReducer,
  themeReducer,
});

const themeReducerType = () => ({
  type: "THEME"
});

const statusReducerType = () => ({
  type: "STATUS"
});

const store = Redux.createStore(reducerCombinado);

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

const container = document.getElementsByClassName('container')[0];
const status = document.getElementById('status');

themeButton.addEventListener('click', () => {
  // coloque o código aqui.
  store.dispatch(statusReducerType());
  const state = store.getState()
  console.log(state);
  status.innerText = state.statusReducer.status;
});

statusButton.addEventListener('click', () => {
  // coloque o código aqui.
  store.dispatch(themeReducerType());
  const state = store.getState()
  console.log(state);
  container.className = state.themeReducer.theme;
});