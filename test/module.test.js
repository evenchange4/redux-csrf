import test from 'ava';
import {
  default as reducer,
  actions as csrfActions,
  SET_CSRFTOKEN,
} from '../src/index';

test('should return a reducer function', (t) => {
  t.is(typeof reducer, 'function');
});

test('should return a actions object', (t) => {
  t.is(typeof csrfActions, 'object');
});

test('[Action] setCsrfToken - should create an action to set a csrf token', (t) => {
  t.deepEqual(
    csrfActions.setCsrfToken('CSRF_TOKEN'),
    {
      type: SET_CSRFTOKEN,
      payload: 'CSRF_TOKEN',
    },
  );
});

test('[Reducer] should return the initial state', (t) => {
  t.deepEqual(reducer(), '');
});

test('[Reducer] should handle SET_CSRFTOKEN', (t) => {
  t.deepEqual(
    reducer('', {
      type: SET_CSRFTOKEN,
      payload: 'CSRF_TOKEN',
    }),
    'CSRF_TOKEN',
  );
});
