let x = 0;

const coutn = 5;

const generateColor = () => `#${Math.floor(Math.random() * 16777216).toString(16)}`;

const handle = (id, e) => {
  const div = document.getElementById(id);
  let x = e.pageX;
  let y = e.pageY;
  div.style.top = `${y}px`;
  div.style.left = `${x}px`;
}

const handleClick = (id) => {
  document.addEventListener('mousemove', (e) => handle(id, e));
}

const divMaker = (id) => {
  let div = document.createElement('div');
  let side = Math.floor(Math.random() * 101) + 30;
  div.id = id;
  div.style['background-color'] = generateColor();
  div.style.width = `${side}px`;
  div.style.height = `${side}px`;
  div.style.margin = '4px';
  div.style.left = `${x}px`;
  x += 150;
  div.style.position = 'absolute';
  div.onclick = () => handleClick(id);
  document.body.append(div);
}

for (let i = 1; i < coutn + 1; i++) {
  divMaker(i);
}