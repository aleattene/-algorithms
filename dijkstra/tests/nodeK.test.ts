import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node K ==========================================================================================================
let start = "K";
let end: string;

t.test('Path from K to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'G', 'F', 'E', 'B', 'A'], distance: 15 });
    t.end();
});

t.test('Path from K to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'G', 'F', 'E', 'B'], distance: 14 });
    t.end();
});

t.test('Path from K to C', t => {
    end = "C";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'G', 'F', 'C'], distance: 13 });
    t.end();
});

t.test('Path from K to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'G', 'F', 'D'], distance: 11 });
    t.end();
});

t.test('Path from K to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'G', 'F', 'E'], distance: 13 });
    t.end();
});

t.test('Path from K to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'G', 'F'], distance: 10 });
    t.end();
});

t.test('Path from K to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'G'], distance: 8 });
    t.end();
});

t.test('Path from K to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'H'], distance: 7 });
    t.end();
});

t.test('Path from K to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I'], distance: 5 });
    t.end();
});

t.test('Path from K to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'J'], distance: 3 });
    t.end();
});

t.test('Path from K to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'L'], distance: 2 });
    t.end();
});

t.test('Path from K to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'M'], distance: 4 });
    t.end();
});

t.test('Path from K to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'M', 'N'], distance: 7 });
    t.end();
});

t.test('Path from K to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'M', 'O'], distance: 6 });
    t.end();
});

t.test('Path from K to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'J', 'Q', 'P'], distance: 9 });
    t.end();
});

t.test('Path from K to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'J', 'Q'], distance: 7 });
    t.end();
});

t.test('Path from K to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'J', 'Q', 'R'], distance: 12 });
    t.end();
});

t.test('Path from K to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'G', 'F', 'S'], distance: 11 });
    t.end();
});

t.test('Path from K to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'J', 'Q', 'R', 'T'], distance: 14 });
    t.end();
});

t.test('Path from K to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'G', 'F', 'S', 'U'], distance: 15 });
    t.end();
});

t.test('Path from K to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'H', 'V', ], distance: 14 });
    t.end();
});

t.test('Path from K to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'H', 'V', 'W'], distance: 18 });
    t.end();
});

t.test('Path from K to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'H', 'V', 'X'], distance: 17 });
    t.end();
});

t.test('Path from K to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'G', 'F', 'C', 'Y'], distance: 15 });
    t.end();
});

t.test('Path from K to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['K', 'I', 'G', 'F', 'C', 'Y', 'Z'], distance: 17  });
    t.end();
});
// =================================================================================================================
