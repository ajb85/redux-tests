import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { pending, loading } from 'reducers/app.js';

function App() {
  const { isPending, isLoading } = useSelector(state => ({
    isPending: state.app.isPending,
    isLoading: state.app.isLoading
  }));

  const dispatch = useDispatch();

  return (
    <div>
      <p>Pending status: {isPending ? 'Pending' : 'Done'}</p>
      <p>Loading status: {isLoading ? 'Loading' : 'Done'}</p>
      <button type="button" onClick={() => dispatch(pending())}>
        Make Pending Request
      </button>
      <br />
      <br />
      <button type="button" onClick={() => dispatch(loading())}>
        Make Loading Request
      </button>
    </div>
  );
}

export default App;
