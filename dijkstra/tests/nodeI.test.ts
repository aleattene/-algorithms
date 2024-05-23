import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node I ==========================================================================================================
let start = "I";
let end: string;

t.test('Path from I to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G', 'F', 'E', 'B', 'A'], distance: 10 });
    t.end();
});

t.test('Path from I to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G', 'F', 'E', 'B'], distance: 9 });
    t.end();
});

t.test('Path from I to C', t => {
    end = "C";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G', 'F', 'C'], distance: 8 });
    t.end();
});

t.test('Path from I to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G', 'F', 'D'], distance: 6 });
    t.end();
});

t.test('Path from I to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G', 'F', 'E'], distance: 8 });
    t.end();
});

t.test('Path from I to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G', 'F'], distance: 5 });
    t.end();
});

t.test('Path from I to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G'], distance: 3 });
    t.end();
});

t.test('Path from I to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'H'], distance: 2 });
    t.end();
});

t.test('Path from I to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'J'], distance: 4 });
    t.end();
});

t.test('Path from I to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'K'], distance: 5 });
    t.end();
});

t.test('Path from I to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'K', 'L'], distance: 7 });
    t.end();
});

t.test('Path from I to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'K', 'M'], distance: 9 });
    t.end();
});

t.test('Path from I to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'K', 'M', 'N'], distance: 12 });
    t.end();
});

t.test('Path from I to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'H', 'Q', 'O'], distance: 9 });
    t.end();
});

t.test('Path from I to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'H', 'Q', 'P'], distance: 8 });
    t.end();
});

t.test('Path from I to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'H', 'Q'], distance: 6 });
    t.end();
});

t.test('Path from I to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G', 'F', 'S', 'R'], distance: 9 });
    t.end();
});

t.test('Path from I to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G', 'F', 'S'], distance: 6 });
    t.end();
});

t.test('Path from I to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G', 'F', 'S', 'T'], distance: 11 });
    t.end();
});

t.test('Path from I to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G', 'F', 'S', 'U'], distance: 10 });
    t.end();
});

t.test('Path from I to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'H', 'V'], distance: 9 });
    t.end();
});

// Double Results I-H-V and I-G-F-C-Y-W (distance: 13)
// t.test('Path from I to W', t => {
//     end = "W";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['I', 'G', 'F', 'C', 'Y', 'W'], distance: 13 });
//     t.end();
// });

t.test('Path from I to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'H', 'V', 'X'], distance: 12 });
    t.end();
});

t.test('Path from I to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G', 'F', 'C', 'Y'], distance: 10 });
    t.end();
});

t.test('Path from I to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['I', 'G', 'F', 'C', 'Y', 'Z'], distance: 12 });
    t.end();
});
// =================================================================================================================
