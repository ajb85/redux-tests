const initialState = {
  isPending: false,
  isLoading: false,
  myData: []
};

const isPending = 'APP/isPending';
const donePending = 'APP/donePending';
const isLoading = 'APP/isLoading';
const doneLoading = 'APP/doneLoading';

export default (state = initialState, action) => {
  switch (action.type) {
    case isPending:
      return { ...state, isPending: true };
    case donePending:
      return { ...state, isPending: false };
    case isLoading:
      return { ...state, isLoading: true };
    case doneLoading:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export const pending = () => dispatch => {
  dispatch({ type: isPending });

  setTimeout(() => {
    dispatch({ type: donePending });
  }, 3000);
};

export const loading = () => dispatch => {
  dispatch({ type: isLoading });

  setTimeout(() => {
    dispatch({ type: doneLoading });
  }, 6000);
};
