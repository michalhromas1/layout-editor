const editor = document.getElementById('editor');
const cells = {};

editor.appendChild(createCell(editor));

function createCell() {
  const cell = document.createElement('div');
  cell.className = 'editor-cell';
  createCellButtons(cell);
  return cell;
}

function createCellButtons(cell) {
  const addCellBtn = document.createElement('button');
  const addRowBtn = document.createElement('button');

  addCellBtn.className = 'add-cell';
  addCellBtn.innerText = 'C+';

  addRowBtn.className = 'add-row';
  addRowBtn.innerText = 'R+';

  addRowBtn.addEventListener('click', addRow);

  cell.appendChild(addCellBtn);
  cell.appendChild(addRowBtn);
}

function addRow(e) {
  const cell = e.target.parentElement;
  cell.insertAdjacentElement('afterend', createCell());
}
