export default (grid, callback) => {
  const occupied = []

  grid.forEach((cols, rowIndex) => {
    occupied[rowIndex] = occupied[rowIndex] || []

    let paddedColIndex = 0

    cols.forEach((cell, colIndex) => {
      while (occupied[rowIndex][paddedColIndex]) {
        paddedColIndex++
      }

      let field = null
      let colspan = 1
      let rowspan = 1

      if (Array.isArray(cell)) {
        field = cell[0] === undefined ? null : cell[0]
        colspan = cell[1] || 1
        rowspan = cell[2] || 1
      }

      const rowStart = rowIndex
      const colStart = paddedColIndex
      const rowEnd = rowIndex + rowspan - 1
      const colEnd = paddedColIndex + colspan - 1

      callback({
        cell,
        field,
        rowspan,
        colspan,
        rowIndex,
        colIndex,
        paddedColIndex,
        rowStart,
        colStart,
        rowEnd,
        colEnd,
      })
      
      // Mark all affected cells as occupied
      for (let r = rowIndex; r <= rowEnd; r++) {
        occupied[r] = occupied[r] || []

        for (let c = paddedColIndex; c <= colEnd; c++) {
          occupied[r][c] = true
        }
      }

      paddedColIndex += colspan
    })
  })
}