import { ActionTypes } from './actions';

export function quantityReducer(state: number, action: any) {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      return state > 1 ? state - 1 : 1;
    default:
      return state;
  }
}
