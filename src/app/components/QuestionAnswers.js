class QuestionAnswers {
  constructor(id, answers, correctAnswer) {
    this.render(id, answers);
    this.correctAnswer = correctAnswer;
    this.buttons = document.querySelectorAll('#answers > button');
  }

  render(id, content) {
    this.renderContent(id, content);
  }

  check(answer, correctAnswer, index) {
    this.checkAnswer(answer, correctAnswer, index);
  }

  renderContent(id, answers) {
    const container = document.querySelector(`${id}`);
    answers.forEach((answer, index) => {
      const btn = document.createElement('button');
      const answerBtn = container.appendChild(btn);
      answerBtn.innerHTML = answer;
      answerBtn.classList.add('answer');
      answerBtn.addEventListener('click', () =>
        this.check(answer, this.correctAnswer, index),
      );
    });
  }

  checkAnswer(answer, correctAnswer, index) {
    answer === correctAnswer
      ? this.buttons[index].classList.add('correct-answer')
      : this.buttons[index].classList.add('wrong-answer');
  }
}

export default QuestionAnswers;
