import React from 'react'

// Adjust TableCell content type as needed
interface TableCell {
  content: string // Update this to match your actual cell content data type
}

interface TableRow {
  cells: TableCell[]
}

interface Table {
  rows: TableRow[]
}

interface TablePreviewProps {
  table?: Table | null
}

const TablePreview: React.FC<TablePreviewProps> = ({table}) => {
  console.log('table', table)
  if (!table) {
    return <p>Table: Add Values</p>
  }

  // Destructure the head row and remaining rows
  const [head, ...rows] = table.rows

  return (
    <table width="100%">
      {/* Render the table header */}
      {head.cells.filter((cell) => cell.content).length > 0 && (
        <thead>
          <tr>
            {head.cells.map((cell, index) => (
              <th style={{textAlign: 'left'}} key={index}>
                {cell.content}
              </th>
            ))}
          </tr>
        </thead>
      )}
      {/* Render the table body */}
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.cells.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell.content}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablePreview
