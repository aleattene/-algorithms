import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node G ==========================================================================================================
let start = "G";
let end: string;

// t.test('Path from G to A', t => {
//     end = "A";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['A', 'B'], distance: 1 });
//     t.end();
// });

// t.test('Path from G to B', t => {
//     end = "C";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['B', 'C'], distance: 2 });
//     t.end();
// });

// t.test('Path from G to C', t => {
//     end = "D";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
//     t.end();
// });

// t.test('Path from G to D', t => {
//     end = "E";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['D', 'E'], distance: 4 });
//     t.end();
// });

// t.test('Path from G to E', t => {
//     end = "F";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['E', 'F'], distance: 3 });
//     t.end();
// });

// t.test('Path from G to F', t => {
//     end = "G";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['F', 'G'], distance: 2 });
//     t.end();
// });

t.test('Path from G to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['G', 'H'], distance: 4 });
    t.end();
});

t.test('Path from G to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['G', 'I'], distance: 3 });
    t.end();
});

t.test('Path from G to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['G', 'I', 'J'], distance: 7 });
    t.end();
});

t.test('Path from G to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['G', 'I', 'K'], distance: 8 });
    t.end();
});

t.test('Path from G to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['G', 'I', 'K', 'L'], distance: 10 });
    t.end();
});

// t.test('Path from G to M', t => {
//     end = "M";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['E', 'F', 'S', 'Q', 'O', 'M'], distance: 15 });
//     t.end();
// });

// t.test('Path from G to N', t => {
//     end = "N";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['E', 'F', 'S', 'Q', 'O', 'N'], distance: 17 });
//     t.end();
// });

t.test('Path from G to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['G', 'H', 'Q', 'O'], distance: 11 });
    t.end();
});

t.test('Path from G to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['G', 'H', 'Q', 'P'], distance: 10 });
    t.end();
});
t.test('Path from G to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['G', 'H', 'Q'], distance: 8 });
    t.end();
});


t.test('Path from G to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['G', 'H', 'Q', 'R'], distance: 13 });
    t.end();
});

// t.test('Path from G to S', t => {
//     end = "S";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['G', 'F', 'S'], distance: 3 });
//     t.end();
// });

// t.test('Path from G to T', t => {
//     end = "T";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['G', 'F', 'S', 'T'], distance: 8 });
//     t.end();
// });

// t.test('Path from G to U', t => {
//     end = "U";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['G', 'F', 'S', 'U'], distance: 7 });
//     t.end();
// });

// t.test('Path from G to V', t => {
//     end = "V";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['G', 'F', 'S', 'U', 'V'], distance: 9 });
//     t.end();
// });

// t.test('Path from G to W', t => {
//     end = "W";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'W'], distance: 11 });
//     t.end();
// });

// t.test('Path from G to X', t => {
//     end = "X";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'X'], distance: 13 });
//     t.end();
// });

// t.test('Path from G to Y', t => {
//     end = "Y";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['E', 'F', 'C', 'Y'], distance: 8 });
//     t.end();
// });

// t.test('Path from G to Z', t => {
//     end = "Z";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'Z'], distance: 10 });
//     t.end();
// });
// =================================================================================================================
