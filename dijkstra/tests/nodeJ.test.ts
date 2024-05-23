import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node J ==========================================================================================================
let start = "J";
let end: string;

t.test('Path from J to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'I', 'G', 'F', 'E', 'B', 'A'], distance: 14 });
    t.end();
});

t.test('Path from J to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'I', 'G', 'F', 'E', 'B'], distance: 13 });
    t.end();
});

t.test('Path from J to C', t => {
    end = "C";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'I', 'G', 'F', 'C'], distance: 12 });
    t.end();
});

t.test('Path from J to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'I', 'G', 'F', 'D'], distance: 10 });
    t.end();
});

t.test('Path from J to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'I', 'G', 'F', 'E'], distance: 12 });
    t.end();
});

t.test('Path from J to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'I', 'G', 'F'], distance: 9 });
    t.end();
});

t.test('Path from J to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'I', 'G'], distance: 7 });
    t.end();
});

// Double Results: J-H and J-I-H (distance: 6)
// t.test('Path from J to H', t => {
//     end = "H";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['J', 'H'], distance: 6 });
//     t.end();
// });

t.test('Path from J to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'I'], distance: 4 });
    t.end();
});

t.test('Path from J to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'K'], distance: 3 });
    t.end();
});

t.test('Path from J to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'K', 'L'], distance: 5 });
    t.end();
});

t.test('Path from J to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'K', 'M'], distance: 7 });
    t.end();
});

t.test('Path from J to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'K', 'M', 'N'], distance: 10 });
    t.end();
});

t.test('Path from J to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'Q', 'O'], distance: 7 });
    t.end();
});

t.test('Path from J to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'Q', 'P'], distance: 6 });
    t.end();
});

t.test('Path from J to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'Q'], distance: 4 });
    t.end();
});

t.test('Path from J to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'Q', 'R'], distance: 9 });
    t.end();
});

t.test('Path from J to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'Q', 'S'], distance: 10 });
    t.end();
});

t.test('Path from J to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'Q', 'R', 'T'], distance: 11 });
    t.end();
});

t.test('Path from J to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'Q', 'S', 'U'], distance: 14 });
    t.end();
});

t.test('Path from J to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'H', 'V'], distance: 13 });
    t.end();
});

// Double results: J-H-F-C-Y and J-Q-S-U-W (distance 19)
// t.test('Path from J to W', t => {
//     end = "W";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['J', 'H', 'F', 'C', 'Y', 'W'], distance: 19 });
//     t.end();
// });

t.test('Path from J to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'H', 'V', 'X'], distance: 16 });
    t.end();
});

t.test('Path from J to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'I', 'G', 'F', 'C', 'Y'], distance: 14 });
    t.end();
});

t.test('Path from J to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['J', 'I', 'G', 'F', 'C', 'Y', 'Z'], distance: 16  });
    t.end();
});
// =================================================================================================================
