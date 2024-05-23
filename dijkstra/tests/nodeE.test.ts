import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node E ==========================================================================================================
let start = "E";
let end: string;

t.test('Path from E to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'B', 'A'], distance: 2 });
    t.end();
});

t.test('Path from E to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'B'], distance: 1 });
    t.end();
});

t.test('Path from E to C', t => {
    end = "C";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'C'], distance: 2 });
    t.end();
});

// Double Results E-D : 4 and E-F-D : 4
// t.test('Path from E to D', t => {
//     end = "D";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['E', 'D'], distance: 4 });
//     t.end();
// });

t.test('Path from E to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F'], distance: 3 });
    t.end();
});

t.test('Path from E to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'G'], distance: 5 });
    t.end();
});

t.test('Path from E to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'H'], distance: 8 });
    t.end();
});

t.test('Path from E to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'G', 'I'], distance: 8 });
    t.end();
});

t.test('Path from E to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'G', 'I', 'J'], distance: 12 });
    t.end();
});

t.test('Path from E to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'G', 'I', 'K'], distance: 13 });
    t.end();
});

t.test('Path from E to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'G', 'I', 'K', 'L'], distance: 15 });
    t.end();
});

t.test('Path from E to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'S', 'Q', 'O', 'M'], distance: 15 });
    t.end();
});

t.test('Path from E to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'S', 'R', 'P', 'N'], distance: 16 });
    t.end();
});

t.test('Path from E to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'S', 'Q', 'O'], distance: 13 });
    t.end();
});

t.test('Path from E to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'S', 'R', 'P'], distance: 11 });
    t.end();
});

t.test('Path from E to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'S', 'Q'], distance: 10 });
    t.end();
});

t.test('Path from E to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'S', 'R'], distance: 7 });
    t.end();
});

t.test('Path from E to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'S'], distance: 4 });
    t.end();
});

t.test('Path from E to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'S', 'T'], distance: 9 });
    t.end();
});

t.test('Path from E to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'S', 'U'], distance: 8 });
    t.end();
});

t.test('Path from E to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'F', 'S', 'U', 'V'], distance: 10 });
    t.end();
});

t.test('Path from E to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'C', 'Y', 'W'], distance: 7 });
    t.end();
});

t.test('Path from E to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'C', 'Y', 'X'], distance: 9 });
    t.end();
});

t.test('Path from E to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'C', 'Y'], distance: 4 });
    t.end();
});

t.test('Path from E to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['E', 'C', 'Y', 'Z'], distance: 6 });
    t.end();
});
// =================================================================================================================
