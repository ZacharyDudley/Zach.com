const CHANGE_COLOR = 'CHANGE_COLOR';
const TITLE_DISPLAY = 'TITLE_DISPLAY';
const MODAL_DISPLAY = 'MODAL_DISPLAY';

const changeColor = color => ({type: CHANGE_COLOR, color});
const titleDisplay = display => ({type: TITLE_DISPLAY, display});
const modalDisplay = view => ({type: MODAL_DISPLAY, view});

const defaultState = {
  color: 'black',
  title: 'print',
  viewModal: false
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {

    case CHANGE_COLOR:
      return Object.assign({}, state, {color: action.color});

    case TITLE_DISPLAY:
      return Object.assign({}, state, {title: action.display});

    case MODAL_DISPLAY:
      return Object.assign({}, state, {viewModal: action.view});

    default:
      return state;
  }
}

export const checkPassword = (password) => dispatch => {
  switch (password) {
    case 'black':
      dispatch(changeColor(password));
      break;

    case 'orange':
      dispatch(changeColor(password));
      break;

    case 'teal':
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

export const toggleModal = (view) => dispatch => {
  dispatch(modalDisplay(view));
}
