import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node Z ==========================================================================================================
let start = "Z";
let end: string;

// t.test('Path from Z to A', t => {
//     end = "A";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['Z', 'B'], distance: 1 });
//     t.end();
// });

// t.test('Path from Z to B', t => {
//     end = "C";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['B', 'C'], distance: 2 });
//     t.end();
// });

// t.test('Path from Z to C', t => {
//     end = "D";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
//     t.end();
// });

// t.test('Path from Z to D', t => {
//     end = "E";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['D', 'E'], distance: 4 });
//     t.end();
// });

// t.test('Path from Z to E', t => {
//     end = "F";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['E', 'F'], distance: 3 });
//     t.end();
// });

// t.test('Path from Z to F', t => {
//     end = "G";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['F', 'G'], distance: 2 });
//     t.end();
// });

// t.test('Path from Z to G', t => {
//     end = "H";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['G', 'H'], distance: 4 });
//     t.end();
// });

// t.test('Path from Z to H', t => {
//     end = "I";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['H', 'I'], distance: 2 });
//     t.end();
// });

// t.test('Path from Z to I', t => {
//     end = "J";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['I', 'J'], distance: 4 });
//     t.end();
// });

// t.test('Path from Z to J', t => {
//     end = "K";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['J', 'K'], distance: 3 });
//     t.end();
// });

// t.test('Path from Z to K', t => {
//     end = "L";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['K', 'L'], distance: 2 });
//     t.end();
// });

// t.test('Path from Z to L', t => {
//     end = "M";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['L', 'M'], distance: 5 });
//     t.end();
// });

// t.test('Path from Z to M', t => {
//     end = "N";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['M', 'N'], distance: 3 });
//     t.end();
// });

// t.test('Path from Z to N', t => {
//     end = "O";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['N', 'O'], distance: 4 });
//     t.end();
// });

// t.test('Path from Z to O', t => {
//     end = "P";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
//     t.end();
// });

// t.test('Path from Z to P', t => {
//     end = "Q";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['P', 'Q'], distance: 2 });
//     t.end();
// });

// t.test('Path from Z to Q', t => {
//     end = "R";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['Q', 'R'], distance: 5 });
//     t.end();
// });

// t.test('Path from Z to R', t => {
//     end = "S";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['R', 'S'], distance: 3 });
//     t.end();
// });

// t.test('Path from Z to S', t => {
//     end = "T";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['S', 'R', 'T'], distance: 2 });
//     t.end();
// });

// t.test('Path from Z to T', t => {
//     end = "U";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['T', 'U'], distance: 3 });
//     t.end();
// });

t.test('Path from Z to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'X', 'V', 'U'], distance: 9 });
    t.end();
});

t.test('Path from Z to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'X', 'V'], distance: 7 });
    t.end();
});

t.test('Path from Z to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'W'], distance: 5 });
    t.end();
});

t.test('Path from Z to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'X'], distance: 4 });
    t.end();
});

t.test('Path from Z to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y'], distance: 2 });
    t.end();
});
// =================================================================================================================

