import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _birds = [];

class BirdStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getBirds() {
    return _birds;
  }

  getBirdBySlug(slug) {
    return _birds.find((bird) => bird.slug === slug);
  }
}

const store = new BirdStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.DELETE_BIRD:
      _birds = _birds.filter((bird) => bird.id !== parseInt(action.id, 10));
      store.emitChange();
      break;

    case actionTypes.CREATE_BIRD:
      _birds.push(action.bird);
      store.emitChange();
      break;

    case actionTypes.UPDATE_BIRD:
      _birds = _birds.map((bird) =>
        bird.id === action.bird.id ? action.bird : bird
      );
      store.emitChange();
      break;

    case actionTypes.LOAD_BIRDS:
      _birds = action.birds;
      store.emitChange();
      break;
    default:
  }
});

export default store;
