export enum ActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

export function incrementAction() {
  return {
    type: ActionTypes.INCREMENT,
  };
}

export function decrementAction() {
  return {
    type: ActionTypes.DECREMENT,
  };
}
