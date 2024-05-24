import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node T ==========================================================================================================
let start = "T";
let end: string;

t.test('Path from T to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'S', 'F', 'E', 'B', 'A'], distance: 11 });
    t.end();
});

t.test('Path from T to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'S', 'F', 'E', 'B'], distance: 10 });
    t.end();
});

t.test('Path from T to C', t => {
    end = "C";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'S', 'F', 'C'], distance: 9 });
    t.end();
});

t.test('Path from T to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'S', 'F', 'D'], distance: 7 });
    t.end();
});

t.test('Path from T to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'S', 'F', 'E'], distance: 9 });
    t.end();
});

t.test('Path from T to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'S', 'F'], distance: 6 });
    t.end();
});

t.test('Path from T to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'S', 'F', 'G'], distance: 8 });
    t.end();
});

// Double Results: H-Q-R-T and H-F-S-T (distance: 11)
// t.test('Path from T to H', t => {
//     end = "H";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['H', 'Q', 'R', 'T'], distance: 11 });
//     t.end();
// });

t.test('Path from T to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'S', 'F', 'G', 'I'], distance: 11 });
    t.end();
});

t.test('Path from T to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'R', 'Q', 'J'], distance: 11 });
    t.end();
});

t.test('Path from T to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'R', 'Q', 'J', 'K'], distance: 14 });
    t.end();
});

t.test('Path from T to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'R', 'Q', 'J', 'K', 'L'], distance: 16 });
    t.end();
});

t.test('Path from T to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'R', 'Q', 'O', 'M'], distance: 12 });
    t.end();
});

t.test('Path from T to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'R', 'P', 'N'], distance: 11 });
    t.end();
});

t.test('Path from T to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'R', 'Q', 'O'], distance: 10 });
    t.end();
});

t.test('Path from T to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'R', 'P'], distance: 6 });
    t.end();
});

t.test('Path from T to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'R', 'Q'], distance: 7 });
    t.end();
});

t.test('Path from T to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'R'], distance: 2 });
    t.end();
});

// Double Results: S-R-T and S-T (distance: 5)
// t.test('Path from T to S', t => {
//     end = "S";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['T', 'R', 'S'], distance: 5 });
//     t.end();
// });

t.test('Path from T to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'U'], distance: 3 });
    t.end();
});

t.test('Path from T to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'U', 'V'], distance: 5 });
    t.end();
});

t.test('Path from T to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'U', 'W'], distance: 8 });
    t.end();
});

t.test('Path from T to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'U', 'V', 'X'], distance: 8 });
    t.end();
});

t.test('Path from T to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'U', 'W', 'Y'], distance: 11 });
    t.end();
});

t.test('Path from T to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['T', 'U', 'V', 'X', 'Z'], distance: 12 });
    t.end();
});
// =================================================================================================================

