
import { quizData } from '../data.js';

export const progressionBar = (myParent,myIndex) => {
  const userParent = document.getElementById(myParent);

  const progressionDiv = document.createElement('div');
  progressionDiv.classList.add('progress-container');
  const progress = document.createElement('div');
  progress.classList.add('progress');

  userParent.appendChild(progressionDiv);
  progressionDiv.appendChild(progress);
  let num = 43;

  num *= myIndex;

  progress.style.width =` ${num}px`;
};
