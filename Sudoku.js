(function(){

    // This is a JavaScript version of sudoku puzzle resolver. The algorithm follows Peter's solution on the http://norvig.com/sudoku.html

    Array.prototype.pushArray = function(arr) {
        this.push.apply(this, arr);
    };

    var digits = '123456789',
        labels = 'ABCDEFGHI',
        squares = [],
        unitList = [],
        units = {},
        peers = {};

    function createPair(p1, p2) {
        var i,
            len = p1.length,
            j,
            size = p2.length,
            pairs = [];

        for(i = 0; i < len; i++) {
            for(j = 0; j < size; j++) {
                pairs.push(p1[i] + p2[j]);
            }
        }
        return pairs;
    }

    function findArrsContainsElement(v, arrs) {
        var results = [];
        arrs.forEach(function(arr){
            if(arr.indexOf(v) > -1) {
                results.push(arr);
            }
        });
        return results;
    }

    function findArrsWithoutElement(v, arrs) {
        var results = [];
        arrs.forEach(function(arr){
            if(arr.indexOf(v) === -1) {
                results.push(arr);
            }
        });
        return results;
    }

    function findPeerElements(v, arrs) {
        var results = [],
            map = {},
            index;
        arrs.forEach(function(arr) {
            index = arr.indexOf(v);
            if(index > -1) {
                results = arr.slice(0, index).concat(arr.slice(index+1));
                results.forEach(function(i) {
                    map[i] = 0;
                });
            }
        });
        return Object.keys(map);
    }

    function init () {
        var i,
            len,
            j,
            size,
            k,
            limit,
            labels_segs = ['ABC', 'DEF', 'GHI'],
            digits_segs = ['123', '456', '789'];

        squares.pushArray(createPair(labels, digits));

        // create all unit list
        for(i = 0, len = labels.length; i < len; i++) {
            unitList.push(createPair(labels[i], digits));
        }
        for(i = 0, len = digits.length; i < len; i++) {
            unitList.push(createPair(labels, digits[i]));
        }

        len  = labels_segs.length;
        size = digits_segs.length;
        for(i = 0; i < len; i++) {
            for(j = 0; j < size; j++) {
                unitList.push(createPair(labels_segs[i], digits_segs[j]));
            }
        }

        // create units and peers
        len  = labels.length;
        size = digits.length;
        for(k = 0, limit = len * size; k < limit; k++) {
            units[squares[k]] = findArrsContainsElement(squares[k], unitList);
        }
        for(k = 0, limit = len * size; k < limit; k++) {
            peers[squares[k]] = findPeerElements(squares[k], unitList);
        }
    }

    init();

    /**
     *
     A1 A2 A3| A4 A5 A6| A7 A8 A9
     B1 B2 B3| B4 B5 B6| B7 B8 B9
     C1 C2 C3| C4 C5 C6| C7 C8 C9
     ---------+---------+--------
     D1 D2 D3| D4 D5 D6| D7 D8 D9
     E1 E2 E3| E4 E5 E6| E7 E8 E9
     F1 F2 F3| F4 F5 F6| F7 F8 F9
     ---------+---------+--------
     G1 G2 G3| G4 G5 G6| G7 G8 G9
     H1 H2 H3| H4 H5 H6| H7 H8 H9
     I1 I2 I3| I4 I5 I6| I7 I8 I9
     *
     */

    function getGridIndex(v) {
        return labels.indexOf(v.substr(0,1)) * 9 + digits.indexOf(v.substr(1,1));
    }

    function createGrid(input) {
        var len = input.length,
            i,
            grid = [];
        for(i = 0; i < len; i++) {
            grid.push(input.substr(i, 1));
        }
        return grid;
    }

    function removeValue(v, str) {
        var idx = str.indexOf(v);
        if(idx > -1) {
            return str.substring(0, idx) + (idx < str.length ? str.substring(idx + 1) : '');
        } else {
            return str;
        }
    }

    function assign(idx, v, grid) {
        if(grid[idx].length === 1 && grid[idx] !== v) {
            return false;
        }

        grid[idx] = v;
        eleminate(idx, v, grid);
        return true;
    }

    function eleminate(idx, v, grid) {
        var key = squares[idx],
            i,
            t;

        // the value cannot appear twice in all its peers.
        peers[key].forEach(function(k){
            i = getGridIndex(k);
            t = removeValue(v, grid[i]);
            if(t.length > 1) {
                grid[i] = t;
            } else if (grid[i] !== t) {
                assign(i, t, grid);
            }
        });

        findArrsWithoutElement(key, unitList).forEach(function(arr) {
            var count = 0,
                location;
            arr.forEach(function(k){
                i = getGridIndex(k);
                if(grid[i].indexOf(v) > -1) {
                    count++;
                    location = i;
                }
            });

            // only one place for the value inside unit
            if(count === 1) {
                if(grid[location] !== v) {
                    assign(location, v, grid);
                }
            }
        });
    }

    function reEvaluateGrid(grid) {
        var i,
            len;
        for(i = 0, len = grid.length; i < len; i++) {
            if(grid[i] === "." || grid[i] === "0") {
                grid[i] = digits;
            }
        }

        for(i = 0, len = grid.length; i < len; i++) {
            if(grid[i].length === 1) {
                assign(i, grid[i], grid);
            }
        }

    }

    function searchGrid(grid) {
        var minLen = 10,
            minArr = [],
            i,
            len,
            newGrid,
            str;
        grid.forEach(function(v, i) {
            len = v.length;
            if(len > 1) {
                if(len < minLen) {
                    minLen = len;
                    minArr = [i];
                } else if(len === minLen) {
                    minArr.push(i);
                }
            }
        });

        // no grid item length is > 1
        if(minLen === 10) {
            return grid;
        } else {
            str = grid[minArr[0]];
            for(i = 0, len = str.length; i < len; i++) {
                newGrid = grid.slice();
                if(assign(minArr[0], str[i], newGrid)) {
                    newGrid = searchGrid(newGrid);
                    if(newGrid) {
                        return newGrid;
                    }
                }
            }
            return null;
        }

    }

    // printing and formatting methods
    function centerValue(v, maxLen) {
        var i,
            len = Math.floor((maxLen - v.length) / 2),
            result = [];
        for(i = 0; i < len; i++) {
            result.push(' ');
        }
        result.push(v);
        for(i = len + v.length; i < maxLen; i++) {
            result.push(' ');
        }
        return result.join('');
    }

    function repeatValue(v, maxLen) {
        var i,
            result = [];
        for(i = 0; i < maxLen; i++) {
            result.push(v);
        }
        return result.join('');
    }

    function printGrid(grid) {
        // get the maximum length;
        var maxLen = 1;
        grid.forEach(function(v, i) {
            if(v.length > maxLen) {
                maxLen = v.length;
            }
        });

        var output = [],
            row = [];
        grid.forEach(function(v, i) {
            row.push(centerValue(v, maxLen));
            if((i + 1) % 9 === 0) {
                output.push(row.join(" "));
                row = [];
                if((i + 1) % 27 === 0 && i < 80) {
                    output.push(repeatValue('-', maxLen*3+2) + ' + ' + repeatValue('-', maxLen*3+2) + ' + ' + repeatValue('-', maxLen*3+2));
                }
            } else if((i + 1) % 3 === 0) {
                row.push("|");
            }
        });
        console.log(output.join("\n"));
    }

    // entry method
    function solveSudoku(inputString) {
        var grid = createGrid(inputString);
        reEvaluateGrid(grid);
        grid = searchGrid(grid);
        printGrid(grid);
    }

    solveSudoku("003020600900305001001806400008102900700000008006708200002609500800203009005010300")
    console.log('----------------------');
    solveSudoku("4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......");

}());