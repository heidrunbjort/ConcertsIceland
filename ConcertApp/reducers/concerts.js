const getInitialState = {
  fetching: false,
  concerts: []
};

const REQUEST_CONCERTS = 'REQUEST_CONCERTS';
const RECEIVE_CONCERTS = 'RECEIVE_CONCERTS';

const concerts = (state = getInitialState, action) => {
  switch (action.type) {
        
      case REQUEST_CONCERTS:
        return {
          ...state,
          fetching: true
        }
        
      case RECEIVE_CONCERTS:
        return {
          ...state,
          fetching: false,
          concerts: action.concerts
        }

    default:
      return state
  }
}

function requestConcerts() {
  return {
    type: REQUEST_CONCERTS
  };
}

function receiveConcerts(concerts) {
  return {
    type: RECEIVE_CONCERTS,
    concerts
  };
}

const getConcerts = () => {
  return dispatch => {
    dispatch(requestConcerts());

    fetch('https://tixscraper.herokuapp.com/tix')
      .then((response)=>response.json())
      .then((response)=> {
        dispatch(receiveConcerts(response));
      });
  }
}

export const actions = {
  getConcerts
};

export default concerts;
















