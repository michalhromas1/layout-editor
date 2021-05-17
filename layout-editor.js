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
  addCellBtn.addEventListener('click', addCell);

  cell.appendChild(addCellBtn);
  cell.appendChild(addRowBtn);
}

function addRow(e) {
  const cell = e.target.parentElement;
  cell.insertAdjacentElement('afterend', createCell());
}

function addCell(e) {
  const cell = e.target.parentElement;
  let childrenWrapper;

  if ((childrenWrapper = cell.querySelector('.editor-cell-children'))) {
    childrenWrapper.appendChild(createCell());
    return;
  }

  childrenWrapper = document.createElement('div');
  childrenWrapper.className = 'editor-cell-children';
  cell.appendChild(childrenWrapper);
  childrenWrapper.appendChild(createCell());
  childrenWrapper.appendChild(createCell());
}
