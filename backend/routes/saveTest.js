import express from 'express';
import Test from '../model/Test.js';

const router = express.Router();

router.post('/saveTests', async (req, res) => {
  try {
    const tests = [
      {
        testId: 'oops1',
        questions: [
          {
            questionId: '60c9671d4569b6390cc8b24a',
            correctAnswers: ['a1'], // Update with the correct answer(s) for question1
          },
          {
            questionId: '60c9671d4569b6390cc8b24b',
            correctAnswers: ['a'], // Update with the correct answer(s) for question2
          },
          {
            questionId: '60c9671d4569b6390cc8b24c',
            correctAnswers: ['b'], // Update with the correct answer(s) for question1
          },
          {
            questionId: '60c9671d4569b6390cc8b24d',
            correctAnswers: ['b'], // Update with the correct answer(s) for question2
          },
          {
            questionId: '60c9671d4569b6390cc8b24e',
            correctAnswers: ['c'], // Update with the correct answer(s) for question1
          },
          {
            questionId: '60c9671d4569b6390cc8b24f',
            correctAnswers: ['b'], // Update with the correct answer(s) for question2
          }
        ]
      },
    ];

    for (const test of tests) {
      const newTest = new Test(test);
      await newTest.save();
    }

    console.log('Tests saved successfully');
    res.status(201).json({ success: true, message: 'Successfully saved tests.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

export default router;
