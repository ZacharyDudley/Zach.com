const CHANGE_COLOR = 'CHANGE_COLOR';

const changeColor = color => ({type: CHANGE_COLOR, color});

const defaultColor = 'black';

export default function reducer(color = defaultColor, action) {
  switch (action.type) {

    case CHANGE_COLOR:
      return action.color;

    default:
      return color;
  }
}

export const checkPassword = (password) => dispatch => {
  console.log('Password:', password);

  if (password === 'blue') {
    dispatch(changeColor(password));
  }
}
