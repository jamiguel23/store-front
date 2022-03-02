const logger = (store) => (next) => (action) => {

  console.log(action);
  console.log(store.getState());
  return next(action);

}

export default logger;