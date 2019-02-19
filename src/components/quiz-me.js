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
    $('<div class="quiz-question">' + this.question + '</div>').appendTo(this.quizContainer);

    // append elements
    this.quizInput = $('<input />').appendTo(this.quizContainer);
    $('<div class="quiz-message" style="display: none">' + this.correctAnswer + '</div>').appendTo(this.quizContainer);

    // bind events
    this.quizInput.on('change', this._handleAnswerChange.bind(this))
  }

  markAnswerResult(isCorrect) {
    this.quizContainer.data('isCorrect', isCorrect);
  }

  isAnswerCorrect(answerInput) {
    const answerLower = answerInput.toLowerCase();
    return answerLower === this.correctAnswer.toLowerCase();
  }

  _handleAnswerChange(event) {
    event.preventDefault();

    const answerInput = $(event.target).val();
    const isAnswerCorrect = this.isAnswerCorrect(answerInput);

    this.markAnswerResult(isAnswerCorrect)
  }
}

export default QuizMe
