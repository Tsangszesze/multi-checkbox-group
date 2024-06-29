import { useCallback, useEffect, useState } from "react";

interface useVerticalGridProps {
  totalCount: number;
  columnCount: number;
}

// Generate grid area template for CSS 
export const useVerticalGrid = (props: useVerticalGridProps) => {
  const { totalCount, columnCount } = props;
  const [grid, setGrid] = useState<number[][]>([]);

  const calculateOrders = useCallback(() => {
    // Use rowCount Data and columnCount to init grid template
    const avgRowCount = Math.floor(totalCount / columnCount);
    const maxRowCount = avgRowCount + (totalCount % columnCount > 0 ? 1 : 0);
    let tempGrid = Array(maxRowCount)
      .fill(0)
      .map(() => Array(columnCount).fill("."));

    // Find the number of column that has more row than avg
    const outstandingColumnCount = totalCount - avgRowCount * columnCount;

    // Loop over each element to add them into grid
    for (let i = 0, columnIndex = 0, rowIndex = 0; i < totalCount; i++) {
      // Get the new element position inside the grid
      const insideOutstandingCol = i < outstandingColumnCount * maxRowCount;
      columnIndex = insideOutstandingCol
        ? Math.floor(i / maxRowCount)
        : Math.floor((i - outstandingColumnCount * maxRowCount) / avgRowCount) +
          outstandingColumnCount;
      rowIndex = insideOutstandingCol
        ? i % maxRowCount
        : (i - outstandingColumnCount * maxRowCount) % avgRowCount;

      // Add the element into the grid template
      tempGrid[rowIndex][columnIndex] = `area-${i}`;
    }

    setGrid(tempGrid);
  }, [totalCount, columnCount]);

  useEffect(() => {
    calculateOrders();
  }, [totalCount, columnCount, calculateOrders]);

  return grid.map((row) => '"' + row.join(" ") + '"').join(" ");
};
