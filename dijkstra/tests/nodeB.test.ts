import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node B ==========================================================================================================
let start: string  = "B";
let end: string;

t.test('Path from B to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'A'], distance: 1 });
    t.end();
});

t.test('Path from B to C', t => {
    end = "C";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'C'], distance: 2 });
    t.end();
});

t.test('Path from B to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'D'], distance: 4 });
    t.end();
});

t.test('Path from B to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E'], distance: 1 });
    t.end();
});

t.test('Path from B to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F'], distance: 4 });
    t.end();
});

t.test('Path from B to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'G'], distance: 6 });
    t.end();
});

t.test('Path from B to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'H'], distance: 9 });
    t.end();
});

t.test('Path from B to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'G', 'I'], distance: 9 });
    t.end();
});

t.test('Path from B to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'G', 'I', 'J'], distance: 13 });
    t.end();
});

t.test('Path from B to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'G', 'I', 'K'], distance: 14 });
    t.end();
});

t.test('Path from B to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'G', 'I', 'K', 'L'], distance: 16 });
    t.end();
});

t.test('Path from B to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'G', 'I', 'K', 'M'], distance: 18 });
    t.end();
});

t.test('Path from B to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'G', 'I', 'K', 'M', 'N'], distance: 21 });
    t.end();
});

t.test('Path from B to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'S', 'Q', 'O'], distance: 14 });
    t.end();
});

// t.test('Path from B to P', t => {
//     end = "P";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['B', 'E', 'F', 'S', 'R', 'P'], distance: 12 });
//     t.end();
// });

t.test('Path from B to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'S', 'Q'], distance: 11 });
    t.end();
});

t.test('Path from B to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'S', 'R'], distance: 8 });
    t.end();
});

t.test('Path from B to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'S'], distance: 5 });
    t.end();
});

t.test('Path from B to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'S', 'T'], distance: 10 });
    t.end();
});

t.test('Path from B to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'S', 'U'], distance: 9 });
    t.end();
});

t.test('Path from B to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'E', 'F', 'S', 'U', 'V'], distance: 11 });
    t.end();
});

t.test('Path from B to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'C', 'Y', 'W'], distance: 7 });
    t.end();
});

t.test('Path from B to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'C', 'Y', 'X'], distance: 9 });
    t.end();
});

t.test('Path from B to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'C', 'Y'], distance: 4 });
    t.end();
});

t.test('Path from B to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['B', 'C', 'Y', 'Z'], distance: 6 });
    t.end();
});
// =================================================================================================================
