import { SET_CONFIG } from '../actions/config';

export default function config(state = {}, action) {
	switch (action.type) {
		case SET_CONFIG:
		return action.config;
		default:
		return state;
	}
}
