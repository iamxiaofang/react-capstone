import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureMockStore from 'redux-mock-store';
import { thunk } from "redux-thunk";
import { AddQuestionPage } from './add-question';

const mockStore = configureMockStore([thunk]);

test('Nav', () => {
  const store = mockStore({
    loading: false,
    questions: {},
    login: {
      user: {
        id: 'testUser',
        name: 'Test User',
        avatarURL: 'https://example.com/avatar.png',
      }
    },
  });

  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <AddQuestionPage />
      </MemoryRouter>
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
