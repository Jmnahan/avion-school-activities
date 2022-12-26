const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.

function moveRobot() {
  const pos = parseInt(robot.style.left) || 0;
  robot.style.left = pos + 10 + "px";
  robot.style.transition = "all 1s";
}

robot.addEventListener('click', moveRobot)