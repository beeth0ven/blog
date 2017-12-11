import React from 'react';
import { Table } from 'react-bootstrap';

const headerRowJSX = headerRow => (<tr>{
  headerRow.map(element => <th>{element}</th>)
}</tr>);

const rowJSX = row => (<tr>{
  row.map(element => <td>{element}</td>)
}</tr>);

export default (
  {
    headerRow,
    row1,
    row2,
    row3,
    row4,
    row5,
    row6,
    row7,
    row8,
    row9,
    row10,
  }
  ) => {

  const rows = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10].filter(row => row !== undefined);
  const headersJSX = headerRowJSX(headerRow);
  const rowsJSX = rows.map(rowJSX);

  return (
    <Table bordered striped responsive className='element'>
      <thead>
      {headersJSX}
      </thead>
      <tbody>
      {rowsJSX}
      </tbody>
    </Table>
  )
};