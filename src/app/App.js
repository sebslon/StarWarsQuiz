import Box from './components/Box';
import MainMenu from './components/MainMenu';
import Button from './components/Button';
import Picture from './components/Picture';
import { RankingBox } from './components/RankingBox';
import WhiteButton from './components/WhiteButton';
import Modal from './components/Modal';
import Timer from './components/Timer';
import Rules from './components/Rules';
import QuestionAnswers from './components/QuestionAnswers';
class App {
  constructor(options) {
    this.box = new Box('MODE: who is this character', 'box');
    this.button = new Button('button', 'play the game', 'play-button');
    const scores = [{player: "Anna", correctAnswers: 10, allAnswers:20},{player: "Kamil", correctAnswers: 7, allAnswers:20}, {player: "Ela", correctAnswers: 3, allAnswers:20}];
    this.rankingBox = new RankingBox('ranking-box', scores );
    this.modal = new Modal('modalBox');
    this.mainMenuPanel = new MainMenu('mainMenu', ['People', 'Vehicles', 'Starships'], 0);
    this.picture = new Picture('picture');
    this.whiteButton = new WhiteButton('whiteButton', 'Hall of fame', 'whiteButton');
    this.whiteButton.addIcon('../../static/assets/ui/hof.svg');
    this.rules = new Rules('Mode Rules', 'rules');
    this.btns = document.querySelectorAll('.mainMenu > div > button');
    this.mainMenuPanel.addClasses(this.mainMenuPanel.gameModeIndex, this.btns);
    this.questionAnswers = new QuestionAnswers('#answers', ['odp1', 'odp2', 'odp3'], 'odp1')
    const time = 80;
    this.timer = new Timer(time,'timer-box');
    setInterval(() => {
      this.timer.decrement()
    }, 1000);
    this.btns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        this.mainMenuPanel.btnIndex(index, this.btns);
        this.rules.handleRulesContent(index);
      });
    })
  }
}

export default App

