const TITLE_DISPLAY = 'TITLE_DISPLAY';

const titleDisplay = display => ({type: TITLE_DISPLAY, display});

const defaultDisplay = 'name';

export default function reducer(display = defaultDisplay, action) {
  switch (action.type) {

    case TITLE_DISPLAY:
      return action.display;

    default:
      return display;
  }
}

export const checkPassword = (password) => dispatch => {
  console.log('Password:', password);

  if (password === 'blue') {
    dispatch(changeColor(password));
  }
}
