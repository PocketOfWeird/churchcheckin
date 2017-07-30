const localStore = store => next => action => {
  let result = next(action);
  localStorage.setItem('appstate', JSON.stringify(store.getState()));
  return result;
}

export default localStore;
