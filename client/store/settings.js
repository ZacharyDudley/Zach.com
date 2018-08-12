const CHANGE_COLOR = 'CHANGE_COLOR';
const TITLE_DISPLAY = 'TITLE_DISPLAY';

const changeColor = color => ({type: CHANGE_COLOR, color});
const titleDisplay = display => ({type: TITLE_DISPLAY, display});

const defaultState = {
  color: 'black',
  title: 'print'
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {

    case CHANGE_COLOR:
      return Object.assign({}, state, {color: action.color});

    case TITLE_DISPLAY:
      return Object.assign({}, state, {title: action.display});

    default:
      return state;
  }
}

export const checkPassword = (password) => dispatch => {
  switch (password) {
    case 'blue':
      dispatch(changeColor(password));
      break;

    case 'print':
      dispatch(titleDisplay(password));
      break;

    case 'sign':
      dispatch(titleDisplay(password));
      break;

    default:
      console.log('PASSWORD DENIED');
  }
}
