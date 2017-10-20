const hydrateState = () => {
  return JSON.parse(localStorage.getItem('appstate'))
}

export default hydrateState;
