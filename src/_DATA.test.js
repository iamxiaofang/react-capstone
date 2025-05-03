
import { _saveQuestion, _saveQuestionAnswer, _getQuestions, _getUsers } from "./_DATA";

describe('_saveQuestion', () => {
  test('An async unit test to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.', async () => {
    const actual = await _saveQuestion({
      optionOneText: 'optionOneText',
      optionTwoText: 'optionTwoText',
      author: 'author'
    })
    expect(actual).toEqual({
      id: expect.any(String),
      timestamp: expect.any(Number),
      author: 'author',
      optionOne: { votes: [], text: 'optionOneText' },
      optionTwo: { votes: [], text: 'optionTwoText' }
    })
  });

  test('An async unit test to verify that an error is returned if incorrect data is passed to the function.', async () => {
    try {
      await _saveQuestion({
        optionOneText: 'optionOneText',
        optionTwoText: 'optionTwoText',
      })
    } catch (e) {
      expect(e).toBe('Please provide optionOneText, optionTwoText, and author')
    }

    expect.assertions(1);
  });
})

describe('_saveQuestionAnswer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  })

  afterEach(() => {
    jest.useRealTimers();
  })

  test('An async unit test to verify that true is returned when correctly formatted data is passed to the function.', async () => {
    const saveQuestionPromise = _saveQuestionAnswer({
      authedUser: 'sarahedo',
      qid: '8xf0y6ziyjabvozdd253nd',
      answer: 'optionOne'
    });

    jest.runAllTimers();
    const actual = await saveQuestionPromise
    const expected = true
    expect(actual).toBe(expected);
  })

  test('An async unit test to verify that an error is returned if incorrect data is passed to the function.', async () => {
    try {
      await _saveQuestionAnswer({
        authedUser: 'sarahedo',
        qid: '8xf0y6ziyjabvozdd253nd',
      });
    } catch (e) {
      expect(e).toBe('Please provide authedUser, qid, and answer')
    }

    expect.assertions(1);
  });
})
