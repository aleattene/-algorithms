import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node Z ==========================================================================================================
let start = "Z";
let end: string;

t.test('Path from Z to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'B', 'A'], distance: 7 });
    t.end();
});

t.test('Path from Z to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'B'], distance: 6 });
    t.end();
});

t.test('Path from Z to C', t => {
    end = "C";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C'], distance: 4 });
    t.end();
});

t.test('Path from Z to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'D'], distance: 8 });
    t.end();
});

t.test('Path from Z to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'E'], distance: 6 });
    t.end();
});

t.test('Path from Z to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F'], distance: 7 });
    t.end();
});

t.test('Path from Z to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'G'], distance: 9 });
    t.end();
});

t.test('Path from Z to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'H'], distance: 12 });
    t.end();
});

t.test('Path from Z to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'G', 'I'], distance: 12 });
    t.end();
});

t.test('Path from Z to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'G', 'I', 'J'], distance: 16 });
    t.end();
});

t.test('Path from Z to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'G', 'I', 'K'], distance: 17 });
    t.end();
});

t.test('Path from Z to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'G', 'I', 'K', 'L'], distance: 19 });
    t.end();
});

t.test('Path from Z to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'S', 'Q', 'O', 'M'], distance: 19 });
    t.end();
});

t.test('Path from Z to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'S', 'R', 'P', 'N'], distance: 20 });
    t.end();
});

t.test('Path from Z to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'S', 'Q', 'O'], distance: 17 });
    t.end();
});

t.test('Path from Z to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'S', 'R', 'P'], distance: 15 });
    t.end();
});

t.test('Path from Z to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'S', 'Q'], distance: 14 });
    t.end();
});

t.test('Path from Z to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'S', 'R'], distance: 11 });
    t.end();
});

t.test('Path from Z to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'C', 'F', 'S'], distance: 8 });
    t.end();
});

t.test('Path from Z to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'X', 'V', 'U', 'T'], distance: 12 });
    t.end();
});

t.test('Path from Z to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'X', 'V', 'U'], distance: 9 });
    t.end();
});

t.test('Path from Z to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'X', 'V'], distance: 7 });
    t.end();
});

t.test('Path from Z to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y', 'W'], distance: 5 });
    t.end();
});

t.test('Path from Z to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'X'], distance: 4 });
    t.end();
});

t.test('Path from Z to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['Z', 'Y'], distance: 2 });
    t.end();
});
// =================================================================================================================

