import $ from 'jquery';
import Quiz from '../components/quiz-me';

class Index {
  constructor() {
    // Select HTML nodes
    this.root = $(root)
    this.quizContainers = this.root.find('.quiz-container')
    this.correctAnswers = this.quizContainers.data('isCorrect');
  }

  render() {
    this.quizContainers.each((_, element) => new Quiz(element))
    // The transform property controls the position of the slider    
  }
}

const index = new Index("#root");
index.render();
