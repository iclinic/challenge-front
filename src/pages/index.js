import $ from 'jquery';
import '../styles/index.css';
import QuizMe from '../components/quiz-me';

class Index {
  constructor() {
    // Select HTML nodes
    this.root = $(root);
    this.quizContainers = this.root.find('.quiz-container');
    this.correctAnswersMessage = this.root.find('.correct-answers-message');

    this.buttonCheckCorrectAnswers = $('#check-results');
    this.buttonPlayAgain = $('#play-again').hide();
    this.quizForm = $('#quiz-form');

    // bind events
    this.buttonCheckCorrectAnswers.on('click', this._checkTotalCorrectAnswersClick.bind(this));
    this.buttonPlayAgain.on('click', this._playAgainClick.bind(this));
    this.quizForm.on('submit', Index._formSubmit.bind(this));
  }

  static _formSubmit(event) {
    event.preventDefault();
  }

  static showInvalidAnswer(element) {
      const $element = $(element);
      const input = $element.find('input');
      input.prop('disabled', true);
      $element.find('.quiz-message').show();
  }

  static resetAnswer(element) {
    const $element = $(element);
    const input = $element.find('input');
    input.val('');
    input.prop('disabled', false);
    $element.data('isCorrect', false);
    $element.find('.quiz-message').hide();
  }

  _playAgainClick() {
    this.quizContainers.each((_, element) => {
      Index.resetAnswer(element);
    });
    this.correctAnswersMessage.html('');
    this.buttonCheckCorrectAnswers.show();
    this.buttonPlayAgain.hide();
  }

  _checkTotalCorrectAnswersClick() {
    // this checks the correct answers and show the response from the errors
    let correctAnswersCount = 0;
    this.quizContainers.each((_, element) => {
      const isCorrect = $(element).data('isCorrect');
      if (isCorrect) {
        correctAnswersCount += 1;
      } else {
        Index.showInvalidAnswer(element);
      }
    });
    this.correctAnswersMessage.html('Você acertou ' + correctAnswersCount + '!');
    this.buttonCheckCorrectAnswers.hide();
    this.buttonPlayAgain.show();
  }

  render() {
    // render quiz component
    this.quizContainers.each((_, element) => new QuizMe(element));
  }
}

const index = new Index("#root");
index.render();
