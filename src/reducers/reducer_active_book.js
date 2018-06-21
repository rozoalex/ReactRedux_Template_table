// state is not app state, only the state this 
// this reducer is responsible for 

// Whenever an action got reacted,
// it flows through all the reducers
// and each reducer can return a different state
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state;
}