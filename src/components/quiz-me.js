import $ from 'jquery';

class QuizMe {
  constructor(root) {
    // Select HTML nodes
    this.quizContainer = $(root);
    this.question = this.quizContainer.data('question').toString();
    this.correctAnswer = this.quizContainer.data('answer').toString();

    // set default isCorrect invalid
    this.quizContainer.data('isCorrect', false);

    // append question in DOM
    $('<div>' + this.question + '</div>').appendTo(this.quizContainer);

    // append elements
    this.quizInput = $('<input />').appendTo(this.quizContainer);
    this.quizMessage = $('<div></div>').appendTo(this.quizContainer);

    // bind events
    this.quizInput.on('change', this._handleAnswerChange.bind(this))
  }

  setCorrectAnswer() {
    this.quizMessage.text('All right!');
    this.quizContainer.data('isCorrect', true);
  }

  setWrongAnswer() {
    this.quizMessage.text('Wrong :(');
    this.quizContainer.data('isCorrect', false);
  }

  isAnswerCorrect(answerInput) {
    const answerLower = answerInput.toLowerCase();
    return answerLower === this.correctAnswer.toLowerCase();
  }

  _handleAnswerChange(event) {
    event.preventDefault();

    const answerInput = $(event.target).val();

    this.isAnswerCorrect(answerInput) ? this.setCorrectAnswer() : this.setWrongAnswer();
  }
}

export default QuizMe
