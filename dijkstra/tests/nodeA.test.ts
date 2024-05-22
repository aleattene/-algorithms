import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node A Tests ========================================================================================================
let start: string  = "A";
let end: string;

t.test('Path from A to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B'], distance: 1 });
    t.end();
});

t.test('Path from A to C', t => {
    end = "C";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'C'], distance: 3 });
    t.end();
});

t.test('Path from A to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'D'], distance: 5 });
    t.end();
});

t.test('Path from A to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E'], distance: 2 });
    t.end();
});

t.test('Path from A to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F'], distance: 5 });
    t.end();
});

t.test('Path from A to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G'], distance: 7 });
    t.end();
});

t.test('Path from A to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'H'], distance: 10 });
    t.end();
});

t.test('Path from A to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G', 'I'], distance: 10 });
    t.end();
});

t.test('Path from A to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G', 'I', 'J'], distance: 14 });
    t.end();
});

t.test('Path from A to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G', 'I', 'K'], distance: 15 });
    t.end();
});

t.test('Path from A to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G', 'I', 'K', 'L'], distance: 17 });
    t.end();
});

t.test('Path from A to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G', 'I', 'K', 'M'], distance: 19 });
    t.end();
});

t.test('Path from A to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G', 'I', 'K', 'M', 'N'], distance: 22 });
    t.end();
});

t.test('Path from A to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'Q', 'O'], distance: 15 });
    t.end();
});

// t.test('Path from A to P', t => {
//     end = "P";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'R', 'P'], distance: 14 });
//     t.end();
// });

t.test('Path from A to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'Q'], distance: 12 });
    t.end();
});

t.test('Path from A to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'R'], distance: 9 });
    t.end();
});

t.test('Path from A to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S'], distance: 6 });
    t.end();
});

t.test('Path from A to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'T'], distance: 11 });
    t.end();
});

t.test('Path from A to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'U'], distance: 10 });
    t.end();
});

t.test('Path from A to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'U', 'V'], distance: 12 });
    t.end();
});

t.test('Path from A to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'C', 'Y', 'W'], distance: 8 });
    t.end();
});

t.test('Path from A to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'C', 'Y', 'X'], distance: 10 });
    t.end();
});

t.test('Path from A to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'C', 'Y'], distance: 5 });
    t.end();
});

t.test('Path from A to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['A', 'B', 'C', 'Y', 'Z'], distance: 7 });
    t.end();
});
// =================================================================================================================
