
import { quizData } from '../data.js';

export const progressionBar = (myParent,myIndex) => {
  const userInterface = document.getElementById(myParent);

  const progressionDiv = document.createElement('div');
  progressionDiv.classList.add('progress-container');
  const progress = document.createElement('div');
  progress.classList.add('progress');

  userInterface.appendChild(progressionDiv);
  progressionDiv.appendChild(progress);
  let num = 43;

  num *= myIndex;

  progress.style.width =` ${num}px`;
};
