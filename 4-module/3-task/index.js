function getColumnIdByName(table, name) {
  return Array.from(table.rows[0].cells).findIndex(({innerHTML}) => (innerHTML === name));
}

function getAvailabilityClass(available) {
  return available === 'true'
    ? 'available'
    : 'unavailable';
}

function getGenderClass(gender) {
  return gender === 'm'
    ? 'male'
    : 'female';
}

function highlight(table) {
  const statusColumnId = getColumnIdByName(table, 'Status');
  const genderColumnId = getColumnIdByName(table, 'Gender');
  const ageColumnId = getColumnIdByName(table, 'Age');

  for (let rowId = 1; rowId < table.rows.length; rowId++) {
    const row = table.rows[rowId];

    const status = table.rows[rowId].cells[statusColumnId];
    const gender = table.rows[rowId].cells[genderColumnId].innerText;
    const age = parseInt(table.rows[rowId].cells[ageColumnId].innerText);

    const itemAvailable = status.getAttribute('data-available');
    if (Boolean(itemAvailable)) {
      row.classList.add(getAvailabilityClass(itemAvailable));
    } else {
      row.hidden = true;
    }

    row.classList.add(getGenderClass(gender));

    if (age < 18) {
      row.setAttribute('style', 'text-decoration: line-through');
    }
  }

}
