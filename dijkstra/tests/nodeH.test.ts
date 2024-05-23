import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node H ==========================================================================================================
let start = "H";
let end: string;

t.test('Path from H to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'F', 'E', 'B', 'A'], distance: 10 });
    t.end();
});

t.test('Path from H to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'F', 'E', 'B'], distance: 9 });
    t.end();
});

t.test('Path from H to C', t => {
    end = "C";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'F', 'C'], distance: 8 });
    t.end();
});

t.test('Path from H to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'F', 'D'], distance: 6 });
    t.end();
});

t.test('Path from H to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'F', 'E'], distance: 8 });
    t.end();
});

t.test('Path from H to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'F'], distance: 5 });
    t.end();
});

t.test('Path from H to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'G'], distance: 4 });
    t.end();
});

t.test('Path from H to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'I'], distance: 2 });
    t.end();
});

t.test('Path from H to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'J'], distance: 6 });
    t.end();
});

t.test('Path from H to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'I', 'K'], distance: 7 });
    t.end();
});

t.test('Path from H to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'I', 'K', 'L'], distance: 9 });
    t.end();
});

t.test('Path from H to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'Q', 'O', 'M'], distance: 9 });
    t.end();
});

// Double Results: H-Q-O-N and H-Q-P-N (distance: 11)
// t.test('Path from H to N', t => {
//     end = "N";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['H', 'Q', 'O', 'N'], distance: 11 });
//     t.end();
// });

t.test('Path from H to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'Q', 'O'], distance: 7 });
    t.end();
});

t.test('Path from H to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'Q', 'P'], distance: 6 });
    t.end();
});

t.test('Path from H to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'Q'], distance: 4 });
    t.end();
});

t.test('Path from H to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'Q', 'R'], distance: 9 });
    t.end();
});

t.test('Path from H to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'F', 'S'], distance: 6 });
    t.end();
});

// Double Results: H-Q-R-T and H-F-S-T (distance: 11)
// t.test('Path from H to T', t => {
//     end = "T";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['H', 'Q', 'R', 'T'], distance: 11 });
//     t.end();
// });

t.test('Path from H to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'V', 'U'], distance: 9 });
    t.end();
});

t.test('Path from H to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'V'], distance: 7 });
    t.end();
});

t.test('Path from H to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'V', 'W'], distance: 11 });
    t.end();
});

t.test('Path from H X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'V', 'X'], distance: 10 });
    t.end();
});

t.test('Path from H to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'F', 'C', 'Y'], distance: 10 });
    t.end();
});

t.test('Path from H to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['H', 'F', 'C', 'Y', 'Z'], distance: 12 });
    t.end();
});
// =================================================================================================================
