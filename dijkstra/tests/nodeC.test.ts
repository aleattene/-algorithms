import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node C ==========================================================================================================
let start = "C";
let end: string;

t.test('Path from C to A', t => {
    end = "C";
    start = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end)
    minPath.path.reverse();
    t.same(minPath, { path: ['C', 'B', 'A'], distance: 3 });
    start = "C";
    t.end();
});

t.test('Path from C to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'B'], distance: 2 });
    t.end();
});

t.test('Path from C to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    t.end();
});

t.test('Path from C to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'E'], distance: 2 });
    t.end();
});

t.test('Path from C to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F'], distance: 3 });
    t.end();
});

t.test('Path from C to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'G'], distance: 5 });
    t.end();
});

t.test('Path from C to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'H'], distance: 8 });
    t.end();
});

t.test('Path from C to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'G', 'I'], distance: 8 });
    t.end();
});

t.test('Path from C to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'G', 'I', 'J'], distance: 12 });
    t.end();
});

t.test('Path from C to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'G', 'I', 'K'], distance: 13 });
    t.end();
});

t.test('Path from C to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'G', 'I', 'K', 'L'], distance: 15 });
    t.end();
});

t.test('Path from C to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'S', 'Q', 'O', 'M'], distance: 15 });
    t.end();
});

t.test('Path from C to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'S', 'R', 'P', 'N'], distance: 16 });
    t.end();
});

t.test('Path from C to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'S', 'Q', 'O'], distance: 13 });
    t.end();
});

t.test('Path from C to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'S', 'R', 'P'], distance: 11 });
    t.end();
});

t.test('Path from C to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'S', 'Q'], distance: 10 });
    t.end();
});

t.test('Path from C to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'S', 'R'], distance: 7 });
    t.end();
});

t.test('Path from C to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'S'], distance: 4 });
    t.end();
});

t.test('Path from C to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'S', 'T'], distance: 9 });
    t.end();
});

t.test('Path from C to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'F', 'S', 'U'], distance: 8 });
    t.end();
});

t.test('Path from C to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'Y', 'W', 'V'], distance: 9 });
    t.end();
});

t.test('Path from C to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'Y', 'W'], distance: 5 });
    t.end();
});

t.test('Path from C to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'Y', 'X'], distance: 7 });
    t.end();
});

t.test('Path from C to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'Y'], distance: 2 });
    t.end();
});

t.test('Path from C to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['C', 'Y', 'Z'], distance: 4 });
    t.end();
});
// =================================================================================================================
