import dispatcher from "../appDispatcher";
import * as birdApi from "../api/birdApi";
import actionTypes from "./actionTypes";

export function saveBird(bird) {
  return birdApi.saveBird(bird).then((savedBird) => {
    dispatcher.dispatch({
      actionType: bird.id ? actionTypes.UPDATE_BIRD : actionTypes.CREATE_BIRD,
      bird: savedBird,
    });
  });
}

export function loadBirds() {
  return birdApi.getBirds().then((birds) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_BIRDS,
      birds: birds,
    });
  });
}

export function deleteBird(id) {
  return birdApi.deleteBird(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_BIRD,
      id: id,
    });
  });
}
