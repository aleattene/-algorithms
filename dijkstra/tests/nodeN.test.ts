import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node N ==========================================================================================================
let start = "N";
let end: string;

t.test('Path from N to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'S', 'F', 'E', 'B', 'A'], distance: 18 });
    t.end();
});

t.test('Path from N to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'S', 'F', 'E', 'B'], distance: 17 });
    t.end();
});

t.test('Path from N to C', t => {
    end = "C";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'S', 'F', 'C'], distance: 16 });
    t.end();
});

t.test('Path from N to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'S', 'F', 'D'], distance: 14 });
    t.end();
});

t.test('Path from N to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'S', 'F', 'E'], distance: 16 });
    t.end();
});

t.test('Path from N to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'S', 'F'], distance: 13 });
    t.end();
});

// Double Results: G-H-Q-O-N and G-I-K-M-N and G-F-S-R-P (distance: 15)
// t.test('Path from N to G', t => {
//     end = "G";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['G', 'H', 'Q', 'O', 'N'], distance: 15 });
//     t.end();
// });

// Double Results: H-Q-O-N and H-Q-P-N (distance: 11)
// t.test('Path from N to H', t => {
//     end = "H";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['H', 'Q', 'O', 'N'], distance: 11 });
//     t.end();
// });

t.test('Path from N to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'M', 'K', 'I'], distance: 12 });
    t.end();
});

t.test('Path from N to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'M', 'K', 'J'], distance: 10 });
    t.end();
});

t.test('Path from N to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'M', 'K'], distance: 7 });
    t.end();
});

t.test('Path from N to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'L'], distance: 6 });
    t.end();
});

t.test('Path from N to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'M'], distance: 3 });
    t.end();
});

t.test('Path from N to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'O'], distance: 4 });
    t.end();
});

t.test('Path from N to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P'], distance: 5 });
    t.end();
});

// Double Results: N-O-Q and N-P-Q (distance: 7)
// t.test('Path from N to Q', t => {
//     end = "Q";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['N', 'P', 'Q'], distance: 7 });
//     t.end();
// });

t.test('Path from N to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R'], distance: 9 });
    t.end();
});

t.test('Path from N to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'S'], distance: 12 });
    t.end();
});

t.test('Path from N to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'T'], distance: 11 });
    t.end();
});

t.test('Path from N to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'T', 'U'], distance: 14 });
    t.end();
});

t.test('Path from N to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'T', 'U', 'V'], distance: 16 });
    t.end();
});

t.test('Path from N to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'T', 'U', 'W'], distance: 19 });
    t.end();
});

t.test('Path from N to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'T', 'U', 'V', 'X'], distance: 19 });
    t.end();
});

t.test('Path from N to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'S', 'F', 'C', 'Y'], distance: 18 });
    t.end();
});

t.test('Path from N to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['N', 'P', 'R', 'S', 'F', 'C', 'Y', 'Z'], distance: 20  });
    t.end();
});
// =================================================================================================================
