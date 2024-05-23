import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node P ==========================================================================================================
let start = "P";
let end: string;

// t.test('Path from P to A', t => {
//     end = "A";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['A', 'B'], distance: 1 });
//     t.end();
// });

// t.test('Path from P to B', t => {
//     end = "C";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['B', 'C'], distance: 2 });
//     t.end();
// });

// t.test('Path from P to C', t => {
//     end = "D";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
//     t.end();
// });

// t.test('Path from P to D', t => {
//     end = "E";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['D', 'E'], distance: 4 });
//     t.end();
// });

// t.test('Path from P to E', t => {
//     end = "F";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['E', 'F'], distance: 3 });
//     t.end();
// });

// t.test('Path from P to F', t => {
//     end = "G";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['F', 'G'], distance: 2 });
//     t.end();
// });

// t.test('Path from P to G', t => {
//     end = "H";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['G', 'H'], distance: 4 });
//     t.end();
// });

// t.test('Path from P to H', t => {
//     end = "I";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['H', 'I'], distance: 2 });
//     t.end();
// });

// t.test('Path from P to I', t => {
//     end = "J";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['I', 'J'], distance: 4 });
//     t.end();
// });

// t.test('Path from P to J', t => {
//     end = "K";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['J', 'K'], distance: 3 });
//     t.end();
// });

// t.test('Path from P to K', t => {
//     end = "L";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['K', 'L'], distance: 2 });
//     t.end();
// });

// t.test('Path from P to L', t => {
//     end = "M";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['L', 'M'], distance: 5 });
//     t.end();
// });

// t.test('Path from P to M', t => {
//     end = "N";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['M', 'N'], distance: 3 });
//     t.end();
// });

// t.test('Path from P to N', t => {
//     end = "O";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['N', 'O'], distance: 4 });
//     t.end();
// });

// t.test('Path from P to O', t => {
//     end = "P";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
//     t.end();
// });

t.test('Path from P to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['P', 'Q'], distance: 2 });
    t.end();
});

t.test('Path from P to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['P', 'R'], distance: 4 });
    t.end();
});

t.test('Path from P to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['P', 'R', 'S'], distance: 7 });
    t.end();
});

t.test('Path from P to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['P', 'R', 'T'], distance: 6 });
    t.end();
});

t.test('Path from P to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['P', 'R', 'T', 'U'], distance: 9 });
    t.end();
});

t.test('Path from P to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['P', 'R', 'T', 'U', 'V'], distance: 11 });
    t.end();
});

t.test('Path from P to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['P', 'R', 'T', 'U', 'W'], distance: 14 });
    t.end();
});

t.test('Path from P to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['P', 'R', 'T', 'U', 'V', 'X'], distance: 14 });
    t.end();
});

t.test('Path from P to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['P', 'R', 'S', 'F', 'C', 'Y'], distance: 13 });
    t.end();
});

t.test('Path from P to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['P', 'R', 'S', 'F', 'C', 'Y', 'Z'], distance: 15 });
    t.end();
});
// =================================================================================================================

