import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node D ==========================================================================================================
let start = "D";
let end: string;

// t.test('Path from D to A', t => {
//     end = "A";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['D', 'B', 'A'], distance: 5 });
//     t.end();
// });

t.test('Path from D to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'B'], distance: 4 });
    t.end();
});

// t.test('Path from D to C', t => {
//     end = "D";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['D', 'F', 'C'], distance: 4 });
//     t.end();
// });

t.test('Path from D to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'E'], distance: 4 });
    t.end();
});

t.test('Path from D to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F'], distance: 1 });
    t.end();
});

t.test('Path from D to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'G'], distance: 3 });
    t.end();
});

t.test('Path from D to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'H'], distance: 6 });
    t.end();
});

t.test('Path from D to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'G', 'I'], distance: 6 });
    t.end();
});

t.test('Path from D to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'G', 'I', 'J'], distance: 10 });
    t.end();
});

t.test('Path from D to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'G', 'I', 'K'], distance: 11 });
    t.end();
});

t.test('Path from D to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'G', 'I', 'K', 'L'], distance: 13 });
    t.end();
});

t.test('Path from D to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'G', 'I', 'K', 'M'], distance: 15 });
    t.end();
});

t.test('Path from D to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'G', 'I', 'K', 'M', 'N'], distance: 18 });
    t.end();
});

t.test('Path from D to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'S', 'Q', 'O'], distance: 11 });
    t.end();
});

t.test('Path from D to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'S', 'Q', 'P'], distance: 10 });
    t.end();
});

t.test('Path from D to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'S', 'Q'], distance: 8 });
    t.end();
});

t.test('Path from D to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'S', 'R'], distance: 5 });
    t.end();
});

t.test('Path from D to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'S'], distance: 2 });
    t.end();
});

t.test('Path from D to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'F', 'S', 'T'], distance: 7 });
    t.end();
});

t.test('Path from D to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'U'], distance: 6 });
    t.end();
});

t.test('Path from D to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['D', 'U', 'V'], distance: 8 });
    t.end();
});

// t.test('Path from D to W', t => {
//     end = "W";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['D', 'F', 'C', 'Y', 'W'], distance: 9 });
//     t.end();
// });

// Double Results D-U-V-X : 11
// t.test('Path from D to X', t => {
//     end = "X";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['D', 'F', 'C', 'Y', 'X'], distance: 11 });
//     t.end();
// });

// t.test('Path from D to Y', t => {
//     end = "Y";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['D', 'F', 'C', 'Y'], distance: 6 });
//     t.end();
// });
//
// t.test('Path from D to Z', t => {
//     end = "Z";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['D', 'F', 'C', 'Y', 'Z'], distance: 8 });
//     t.end();
// });
// =================================================================================================================
