import constants from '../constants/'
const searchReducer = function (search = [], action) {

  switch (action.type) {
    case (constants.FETCH_SEARCH):
      return search = action.payload.data.results;

    case (constants.FETCH_ERROR):
      return console.log(action.payload);

    default:
      return search;
  }
}
export default searchReducer;