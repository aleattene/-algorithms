import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node L ==========================================================================================================
let start = "L";
let end: string;

t.test('Path from L to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'G', 'F', 'E', 'B', 'A'], distance: 17 });
    t.end();
});

t.test('Path from L to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'G', 'F', 'E', 'B'], distance: 16 });
    t.end();
});

t.test('Path from L to C', t => {
    end = "C";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'G', 'F', 'C'], distance: 15 });
    t.end();
});

t.test('Path from L to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'G', 'F', 'D'], distance: 13 });
    t.end();
});

t.test('Path from L to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'G', 'F', 'E'], distance: 15 });
    t.end();
});

t.test('Path from L to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'G', 'F'], distance: 12 });
    t.end();
});

t.test('Path from L to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'G'], distance: 10 });
    t.end();
});

t.test('Path from L to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'H'], distance: 9 });
    t.end();
});

t.test('Path from L to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I'], distance: 7 });
    t.end();
});

t.test('Path from L to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'J'], distance: 5 });
    t.end();
});

t.test('Path from L to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K'], distance: 2 });
    t.end();
});

t.test('Path from L to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'M'], distance: 5 });
    t.end();
});

t.test('Path from L to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'N'], distance: 6 });
    t.end();
});

t.test('Path from L to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'M', 'O'], distance: 7 });
    t.end();
});

t.test('Path from L to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'N', 'P'], distance: 11 });
    t.end();
});

t.test('Path from L to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'J', 'Q'], distance: 9 });
    t.end();
});

t.test('Path from L to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'J', 'Q', 'R'], distance: 14 });
    t.end();
});

t.test('Path from L to S', t => {
    end = "S";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'G', 'F', 'S'], distance: 13 });
    t.end();
});

t.test('Path from L to T', t => {
    end = "T";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'J', 'Q', 'R', 'T'], distance: 16 });
    t.end();
});

t.test('Path from L to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'G', 'F', 'S', 'U'], distance: 17 });
    t.end();
});

t.test('Path from L to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'H', 'V'], distance: 16 });
    t.end();
});

// Double Results: L-K-I-H-F-C-Y-W and L-K-I-H-V-W (distance: 20)
// t.test('Path from L to W', t => {
//     end = "W";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['L', 'K', 'I', 'H', 'F', 'C', 'Y', 'W'], distance: 20 });
//     t.end();
// });

t.test('Path from L to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'H', 'V', 'X'], distance: 19 });
    t.end();
});

t.test('Path from L to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'G', 'F', 'C', 'Y'], distance: 17 });
    t.end();
});

t.test('Path from L to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['L', 'K', 'I', 'G', 'F', 'C', 'Y', 'Z'], distance: 19 });
    t.end();
});
// =================================================================================================================
