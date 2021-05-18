const EDITOR_ROW_CLASS = 'editor-row';
const EDITOR_COLUMN_CLASS = 'editor-column';

const ADD_COLUMN_BTN_CLASS = 'add-column';
const ADD_COLUMN_BTN_TEXT = 'C+';

const ADD_ROW_BTN_CLASS = 'add-row';
const ADD_ROW_BTN_TEXT = 'R+';

document.body.appendChild(createRow());

function createRow() {
  const row = document.createElement('div');
  row.className = EDITOR_ROW_CLASS;
  row.appendChild(createColumn());
  return row;
}

function createColumn() {
  const column = document.createElement('div');
  column.className = EDITOR_COLUMN_CLASS;
  createColumnButtons(column);
  return column;
}

function createColumnButtons(column) {
  const addColumnBtn = document.createElement('button');
  const addRowBtn = document.createElement('button');

  addColumnBtn.className = ADD_COLUMN_BTN_CLASS;
  addColumnBtn.innerText = ADD_COLUMN_BTN_TEXT;

  addRowBtn.className = ADD_ROW_BTN_CLASS;
  addRowBtn.innerText = ADD_ROW_BTN_TEXT;

  addRowBtn.addEventListener('click', addRowListener);
  addColumnBtn.addEventListener('click', addColListener);

  column.appendChild(addColumnBtn);
  column.appendChild(addRowBtn);
}

function addRowListener(e) {
  const column = e.target.parentElement;
  const hasRows = !!column.querySelector(`.${EDITOR_ROW_CLASS}`);

  if (!hasRows) {
    column.appendChild(createRow());
  }

  column.appendChild(createRow());
}

function addColListener(e) {
  const column = e.target.parentElement;
  const rows = Array.from(column.children).filter((c) => c.classList.contains(EDITOR_ROW_CLASS));

  if (!rows?.length) {
    const row = createRow();
    row.appendChild(createColumn());
    column.appendChild(row);
    return;
  }

  if (rows.length === 1) {
    rows[0].appendChild(createColumn());
    return;
  }

  const wrapperRow = createRow();
  const wrapperCol = wrapperRow.querySelector(`.${EDITOR_COLUMN_CLASS}`);

  wrapperCol.append(...rows);
  wrapperRow.append(wrapperCol, createColumn());

  column.appendChild(wrapperRow);
}
