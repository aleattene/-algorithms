import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node F ==========================================================================================================
let start = "F";
let end: string;

t.test('Path from F to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'E', 'B', 'A'], distance: 5 });
    t.end();
});

t.test('Path from F to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'E', 'B'], distance: 4 });
    t.end();
});

t.test('Path from F to C', t => {
    end = "C";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'C'], distance: 3 });
    t.end();
});

t.test('Path from F to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'D'], distance: 1 });
    t.end();
});

t.test('Path from F to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'E'], distance: 3 });
    t.end();
});

t.test('Path from F to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'G'], distance: 2 });
    t.end();
});

t.test('Path from F to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'H'], distance: 5 });
    t.end();
});

t.test('Path from F to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'G', 'I'], distance: 5 });
    t.end();
});

t.test('Path from F to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'G', 'I', 'J'], distance: 9 });
    t.end();
});

t.test('Path from F to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'G', 'I', 'K'], distance: 10 });
    t.end();
});

t.test('Path from F to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'G', 'I', 'K', 'L'], distance: 12 });
    t.end();
});

t.test('Path from F to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'S', 'Q', 'O', 'M'], distance: 12 });
    t.end();
});

t.test('Path from F to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'S', 'R', 'P', 'N'], distance: 13 });
    t.end();
});

t.test('Path from F to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'S', 'Q', 'O'], distance: 10 });
    t.end();
});

t.test('Path from F to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'S', 'R', 'P'], distance: 8 });
    t.end();
});

t.test('Path from F to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'S', 'Q'], distance: 7 });
    t.end();
});

t.test('Path from F to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'S', 'R'], distance: 4 });
    t.end();
});

t.test('Path from F to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'S'], distance: 1 });
    t.end();
});

t.test('Path from F to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'S', 'T'], distance: 6 });
    t.end();
});

t.test('Path from F to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'S', 'U'], distance: 5 });
    t.end();
});

t.test('Path from F to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'S', 'U', 'V'], distance: 7 });
    t.end();
});

t.test('Path from F to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'C', 'Y', 'W'], distance: 8 });
    t.end();
});

t.test('Path from F to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'C', 'Y', 'X'], distance: 10 });
    t.end();
});

t.test('Path from F to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'C', 'Y'], distance: 5 });
    t.end();
});

t.test('Path from F to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['F', 'C', 'Y', 'Z'], distance: 7 });
    t.end();
});
// =================================================================================================================
