import $ from 'jquery';
import QuizMe from '../components/quiz-me';

class Index {
  constructor() {
    // Select HTML nodes
    this.root = $(root);
    this.quizContainers = this.root.find('.quiz-container');
    this.correctAnswersMessage = this.root.find('.correct-answers-message');

    this.buttonCheckCorrectAnswers = this.root.find('.check-results');

    // bind events
    this.buttonCheckCorrectAnswers.on('click', this._checkTotalCorrectAnswersClick.bind(this))
  }

  _checkTotalCorrectAnswersClick() {
    let correctAnswersCount = 0;
    this.quizContainers.each((_, element) => {
      const isCorrect = $(element).data('isCorrect');
      if (isCorrect) {
        correctAnswersCount += 1;
      }
    });

    this.correctAnswersMessage.html('Você acertou ' + correctAnswersCount + '!')
  }

  render() {
    this.quizContainers.each((_, element) => new QuizMe(element));
  }
}

const index = new Index("#root");
index.render();
