function knightMoves(start, end) {
  //these is the array of moves a knight can play in a board with no consideration
  //if it goes outside of the board or not
  const directions = [
    [-2, -1],
    [-2, +1],
    [-1, +2],
    [+1, +2],
    [+2, -1],
    [+2, +1],
    [-1, -2],
    [+1, -2],
  ];

  const isValid = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;
  const serialize = ([x, y]) => `${x},${y}`;

  const queue = [[start, [start]]]; // [currentPosition,  pathSoFar]
  const visited = new Set();
  visited.add(serialize(start));

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const [x, y] = current;

    // found the end vertex, display the number of moves and the path
    if (x === end[0] && y === end[1]) {
      console.log(
        `You made it in ${path.length - 1} moves! Here's your path: `
      );
      console.log(path);
    }

    for (const [dx, dy] of directions) {
      const next = [x + dx, y + dy];
      if (isValid(next) && !visited.has(serialize(next))) {
        queue.push([next, [...path, next]]); //enqueue the next position to the queue with the path too
        visited.add(serialize(next));
      }
    }
  }
}

//testing the function
knightMoves([0, 0], [3, 3]);