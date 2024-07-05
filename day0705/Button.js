document.getElementById('fridayButton').addEventListener('click', function() {
  const container = document.getElementById('particleContainer');
  const button = document.getElementById('fridayButton');
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${centerX}px`;
    particle.style.top = `${centerY}px`;

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 200;
    const xMove = Math.cos(angle) * distance;
    const yMove = Math.sin(angle) * distance;
    particle.style.setProperty('--x-move', `${xMove}px`);
    particle.style.setProperty('--y-move', `${yMove}px`);
    particle.style.backgroundColor = getRandomColor();

    container.appendChild(particle);

    // Remove the particle after the animation ends
    particle.addEventListener('animationend', () => {
      particle.remove();
    });
  }
});

function getRandomColor() {
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
  return colors[Math.floor(Math.random() * colors.length)];
}


let cnt = 1;

let onClick = () => {
    let d1 = document.getElementById('ureca');
    const divNode = document.createElement('div');
    const btn = document.createElement('button');
    divNode.innerHTML = `유레카-${cnt++} <button onclick="urecaDel(this)">삭제</button>`;

    d1.appendChild(divNode);

    let urecaDel = (btn) => { 
        console.log('fsd');
    }
}

