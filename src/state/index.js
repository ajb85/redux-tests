import store from '../store.js';
import reducers from '../reducers/';

import getters from './stateGetters/';

class State {
  constructor(stateTree) {
    this.tree = stateTree;
    this.store = store;
    console.log('REDUCERS: ', this.store.getState());
  }

  getState(cb) {
    const state = this.store.getState();
    const stateMimic = {};
    for (let layer in state) {
      stateMimic[layer] = state[layer];
    }
    return cb(store.getState());
  }
}

export default State;
