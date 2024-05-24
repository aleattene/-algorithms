import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node Y ==========================================================================================================
let start = "Y";
let end: string;

t.test('Path from Y to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'B', 'A'], distance: 5 });
    t.end();
});

t.test('Path from Y to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'B'], distance: 4 });
    t.end();
});

t.test('Path from Y to C', t => {
    end = "C";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C'], distance: 2 });
    t.end();
});

t.test('Path from Y to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'D'], distance: 6 });
    t.end();
});

t.test('Path from Y to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'E'], distance: 4 });
    t.end();
});

t.test('Path from Y to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F'], distance: 5 });
    t.end();
});

t.test('Path from Y to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'G'], distance: 7 });
    t.end();
});

t.test('Path from Y to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'H'], distance: 10 });
    t.end();
});

t.test('Path from Y to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'G', 'I'], distance: 10 });
    t.end();
});

t.test('Path from Y to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'G', 'I', 'J'], distance: 14 });
    t.end();
});

t.test('Path from Y to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'G', 'I', 'K'], distance: 15 });
    t.end();
});

t.test('Path from Y to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'G', 'I', 'K', 'L'], distance: 17 });
    t.end();
});

t.test('Path from Y to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'S', 'Q', 'O', 'M'], distance: 17 });
    t.end();
});

t.test('Path from Y to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'S', 'R', 'P', 'N'], distance: 18 });
    t.end();
});

t.test('Path from Y to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'S', 'Q', 'O'], distance: 15 });
    t.end();
});

t.test('Path from Y to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'S', 'R', 'P'], distance: 13 });
    t.end();
});

t.test('Path from Y to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'S', 'Q'], distance: 12 });
    t.end();
});

t.test('Path from Y to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'S', 'R'], distance: 9 });
    t.end();
});

t.test('Path from Y to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'C', 'F', 'S'], distance: 6 });
    t.end();
});

// Double results: Y-W-U-T and Y-C-F-S-T (distance: 11)
// t.test('Path from Y to T', t => {
//     end = "T";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['Y', 'W', 'U', 'T'], distance: 11 });
//     t.end();
// });

t.test('Path from Y to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'W', 'U'], distance: 8 });
    t.end();
});

t.test('Path from Y to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'W', 'V'], distance: 7 });
    t.end();
});

t.test('Path from Y to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'W'], distance: 3 });
    t.end();
});

t.test('Path from Y to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'X'], distance: 5 });
    t.end();
});

t.test('Path from Y to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Y', 'Z'], distance: 2 });
    t.end();
});
// =================================================================================================================

