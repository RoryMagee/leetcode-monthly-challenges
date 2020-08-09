/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
0 = empty
1 = fresh
2 = rotten
*/
var orangesRotting = function(grid) {
    const MAX_ROW = grid.length;  
    const MAX_COL = grid[0].length;
    let count = 0;
    while (true) {
        let temp = grid.map(arr => arr.slice());
        let updated = false;
        for (let x = 0; x < MAX_ROW; x++) {
            for (let y = 0; y < MAX_COL; y++) {
                if (temp[x][y] === 2) {
                    //Right
                    if (y + 1 < MAX_COL) {
                        if (temp[x][y + 1] === 1) {
                            updated = true;
                            grid[x][y + 1] = 2;           
                        }
                    }
                    //Below
                    if (x + 1 < MAX_ROW) {
                        if (temp[x + 1][y] === 1) {
                            updated = true;
                            grid[x + 1][y] = 2;
                        }
                    }
                    //Above
                    if (x - 1 >= 0) {
                        if (temp[x - 1][y] === 1) {
                            updated = true;
                            grid[x - 1][y] = 2;
                       } 
                    }
                    //Left
                    if (y - 1 >= 0) {
                        if (temp[x][y - 1] === 1) {
                            updated = true;
                            grid[x][y - 1] = 2;
                        }
                    }
                }
            }
        }
        if (!updated) {
            break;
        } else {
            count++;
        }
    }
    console.log(grid);
    for(let x = 0; x < grid.length; x++) {
       if (grid[x].includes(1)) return -1;
    }
    return count;
};
