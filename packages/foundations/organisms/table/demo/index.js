import '../dist/src/table.js';

const demo_data = [];
for (let row_number=1; row_number<=100; row_number++) {
  const row = {};
  for (let col_number=1; col_number<=20; col_number++) {
    row[`column${col_number}`] = `val:${row_number}.${col_number}`;
  }
  demo_data.push(row);
}

window.onload = () => {
  window.regular.data = demo_data;
};
