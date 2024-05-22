import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node Q ==========================================================================================================
let start = "Q";
let end: string;

// t.test('Path from Q to A', t => {
//     end = "A";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['A', 'B'], distance: 1 });
//     t.end();
// });

// t.test('Path from Q to B', t => {
//     end = "C";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['B', 'C'], distance: 2 });
//     t.end();
// });

// t.test('Path from Q to C', t => {
//     end = "D";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
//     t.end();
// });

// t.test('Path from Q to D', t => {
//     end = "E";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['D', 'E'], distance: 4 });
//     t.end();
// });

// t.test('Path from Q to E', t => {
//     end = "F";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['E', 'F'], distance: 3 });
//     t.end();
// });

// t.test('Path from Q to F', t => {
//     end = "G";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['F', 'G'], distance: 2 });
//     t.end();
// });

// t.test('Path from Q to G', t => {
//     end = "H";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['G', 'H'], distance: 4 });
//     t.end();
// });

// t.test('Path from Q to H', t => {
//     end = "I";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['H', 'I'], distance: 2 });
//     t.end();
// });

// t.test('Path from Q to I', t => {
//     end = "J";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['I', 'J'], distance: 4 });
//     t.end();
// });

// t.test('Path from Q to J', t => {
//     end = "K";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['J', 'K'], distance: 3 });
//     t.end();
// });

// t.test('Path from Q to K', t => {
//     end = "L";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['K', 'L'], distance: 2 });
//     t.end();
// });

// t.test('Path from Q to L', t => {
//     end = "M";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['L', 'M'], distance: 5 });
//     t.end();
// });

// t.test('Path from Q to M', t => {
//     end = "N";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['M', 'N'], distance: 3 });
//     t.end();
// });

// t.test('Path from Q to N', t => {
//     end = "O";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['N', 'O'], distance: 4 });
//     t.end();
// });

// t.test('Path from Q to O', t => {
//     end = "P";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
//     t.end();
// });

// t.test('Path from Q to P', t => {
//     end = "Q";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['P', 'Q'], distance: 2 });
//     t.end();
// });

t.test('Path from Q to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Q', 'R'], distance: 5 });
    t.end();
});

t.test('Path from Q to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Q', 'S'], distance: 6 });
    t.end();
});

t.test('Path from Q to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Q', 'R', 'T'], distance: 7 });
    t.end();
});

// t.test('Path from Q to U', t => {
//     end = "U";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['Q', 'S', 'U'], distance: 9 });
//     t.end();
// });

// t.test('Path from Q to V', t => {
//     end = "V";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['Q', 'R', 'T', 'U', 'V'], distance: 15 });
//     t.end();
// });

// t.test('Path from P to W', t => {
//     end = "W";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['P', 'R', 'T', 'U', 'W'], distance: 18 });
//     t.end();
// });

// t.test('Path from P to X', t => {
//     end = "X";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['P', 'R', 'T', 'U', 'V', 'X'], distance: 18 });
//     t.end();
// });

// t.test('Path from P to Y', t => {
//     end = "Y";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['P', 'R', 'T', 'U', 'W', 'Y'], distance: 21 });
//     t.end();
// });

// t.test('Path from P to Z', t => {
//     end = "Z";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['P', 'R', 'T', 'U', 'V', 'X', 'Z'], distance: 18 });
//     t.end();
// });
// =================================================================================================================

