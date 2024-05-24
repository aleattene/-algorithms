import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';


// Node S ==========================================================================================================
let start = "S";
let end: string;

t.test('Path from S to A', t => {
    end = "A";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F', 'E', 'B', 'A'], distance: 6 });
    t.end();
});

t.test('Path from S to B', t => {
    end = "B";
    const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F', 'E', 'B'], distance: 5 });
    t.end();
});

t.test('Path from S to C', t => {
    end = "C";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F', 'C'], distance: 4 });
    t.end();
});

t.test('Path from S to D', t => {
    end = "D";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F', 'D'], distance: 2 });
    t.end();
});

t.test('Path from S to E', t => {
    end = "E";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F', 'E'], distance: 4 });
    t.end();
});

t.test('Path from S to F', t => {
    end = "F";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F'], distance: 1 });
    t.end();
});

t.test('Path from S to G', t => {
    end = "G";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F', 'G'], distance: 3 });
    t.end();
});

t.test('Path from S to H', t => {
    end = "H";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F', 'H'], distance: 6 });
    t.end();
});

t.test('Path from S to I', t => {
    end = "I";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F', 'G', 'I'], distance: 6 });
    t.end();
});

t.test('Path from S to J', t => {
    end = "J";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'Q', 'J'], distance: 10 });
    t.end();
});

t.test('Path from S to K', t => {
    end = "K";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F', 'G', 'I', 'K'], distance: 11 });
    t.end();
});

t.test('Path from S to L', t => {
    end = "L";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F', 'G', 'I', 'K', 'L'], distance: 13 });
    t.end();
});

t.test('Path from S to M', t => {
    end = "M";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'Q', 'O', 'M'], distance: 11 });
    t.end();
});

t.test('Path from S to N', t => {
    end = "N";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'R', 'P', 'N'], distance: 12 });
    t.end();
});

t.test('Path from S to O', t => {
    end = "O";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'Q', 'O'], distance: 9 });
    t.end();
});

t.test('Path from S to P', t => {
    end = "P";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'R', 'P'], distance: 7 });
    t.end();
});

t.test('Path from S to Q', t => {
    end = "Q";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'Q'], distance: 6 });
    t.end();
});

t.test('Path from S to R', t => {
    end = "R";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'R'], distance: 3 });
    t.end();
});

// Double Results: S-R-T and S-T (distance: 5)
// t.test('Path from S to T', t => {
//     end = "T";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['S', 'R', 'T'], distance: 5 });
//     t.end();
// });

t.test('Path from S to U', t => {
    end = "U";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'U'], distance: 4 });
    t.end();
});

t.test('Path from S to V', t => {
    end = "V";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'U', 'V'], distance: 6 });
    t.end();
});

t.test('Path from S to W', t => {
    end = "W";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'U', 'W'], distance: 9 });
    t.end();
});

t.test('Path from S to X', t => {
    end = "X";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'U', 'V', 'X'], distance: 9 });
    t.end();
});

t.test('Path from S to Y', t => {
    end = "Y";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F', 'C', 'Y'], distance: 6 });
    t.end();
});

t.test('Path from S to Z', t => {
    end = "Z";
    const minPath = getDijkstraMinPath(distancesGraph, start, end);
    t.same(minPath, { path: ['S', 'F', 'C', 'Y', 'Z'], distance: 8 });
    t.end();
});
// =================================================================================================================

