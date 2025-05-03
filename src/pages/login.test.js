import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureMockStore from 'redux-mock-store';
import { thunk } from "redux-thunk";
import { LoginPage } from './login';


const mockStore = configureMockStore([thunk]);

describe('LoginPage', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('matches snapshot', () => {

    const store = mockStore({
      users: {
        'xiaofang': {
          id: 'xiaofang',
          password: 'password123',
          name: '小芳',
          avatarURL: 'https://example.com/avatar.jpg',
          answers: {},
          questions: []
        }
      }
    });

    const page = render(
      <Provider store={store} >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    expect(page).toMatchSnapshot();
  });

  test('Login success with good username and password', () => {

    const user = {
      id: 'xiaofang',
      password: 'password123',
      name: '小芳',
      avatarURL: 'https://example.com/avatar.jpg',
      answers: {},
      questions: []
    }

    const store = mockStore({
      users: { [user.id]: user }
    });

    const page = render(
      <Provider store={store} >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const usernameInput = page.getByTestId('username')
    const passwordInput = page.getByTestId('password')
    const loginButton = page.getByTestId('login-button')

    const dispatch = jest.spyOn(store, 'dispatch');

    fireEvent.change(usernameInput, { target: { value: 'xiaofang' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(loginButton)

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGIN',
      data: user
    });
  });

  test('Login fails with bad username and password', () => {

    const mockAlert = jest.fn()
    jest.spyOn(window, 'alert').mockImplementation(mockAlert);

    const user = {
      id: 'xiaofang',
      password: 'password123',
      name: '小芳',
      avatarURL: 'https://example.com/avatar.jpg',
      answers: {},
      questions: []
    }

    const store = mockStore({
      users: { [user.id]: user }
    });

    const page = render(
      <Provider store={store} >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const usernameInput = page.getByTestId('username')
    const passwordInput = page.getByTestId('password')
    const loginButton = page.getByTestId('login-button')

    fireEvent.change(usernameInput, { target: { value: 'xiaofang' } })
    fireEvent.change(passwordInput, { target: { value: 'wrong' } })
    fireEvent.click(loginButton)

    expect(mockAlert).toHaveBeenCalledWith('Bad login');
  });

});