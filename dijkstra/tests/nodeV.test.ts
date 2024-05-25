import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';

// Node V ==========================================================================================================
const start = 'V';
let end: string;

// // Double Results: A-B-E-F-S-U-V and A-B-C-Y-W-V (distance 12)
// t.test('Path from V to A', t => {
//     end = "A";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['V', 'W', 'Y', 'C', 'B', 'A'], distance: 12 });
//     t.end();
// });

// Double Results: B-E-F-S-U-V and B-C-Y-W-V (distance 11)
// t.test('Path from V to B', t => {
//     end = "B";
//     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['V', 'W', 'Y', 'C', 'B'], distance: 11 });
//     t.end();
// });

t.test('Path from V to C', (t) => {
	end = 'C';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'W', 'Y', 'C'], distance: 9 });
	t.end();
});

t.test('Path from V to D', (t) => {
	end = 'D';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'U', 'D'], distance: 8 });
	t.end();
});

t.test('Path from V to E', (t) => {
	end = 'E';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'U', 'S', 'F', 'E'], distance: 10 });
	t.end();
});

t.test('Path from V to F', (t) => {
	end = 'F';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'U', 'S', 'F'], distance: 7 });
	t.end();
});

t.test('Path from V to G', (t) => {
	end = 'G';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'U', 'S', 'F', 'G'], distance: 9 });
	t.end();
});

t.test('Path from V to H', (t) => {
	end = 'H';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'H'], distance: 7 });
	t.end();
});

t.test('Path from V to I', (t) => {
	end = 'I';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'H', 'I'], distance: 9 });
	t.end();
});

t.test('Path from V to J', (t) => {
	end = 'J';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'H', 'J'], distance: 13 });
	t.end();
});

t.test('Path from V to K', (t) => {
	end = 'K';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'H', 'I', 'K'], distance: 14 });
	t.end();
});

t.test('Path from V to L', (t) => {
	end = 'L';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'H', 'I', 'K', 'L'], distance: 16 });
	t.end();
});

t.test('Path from V to M', (t) => {
	end = 'M';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'H', 'Q', 'O', 'M'], distance: 16 });
	t.end();
});

t.test('Path from V to N', (t) => {
	end = 'N';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'U', 'T', 'R', 'P', 'N'], distance: 16 });
	t.end();
});

t.test('Path from V to O', (t) => {
	end = 'O';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'H', 'Q', 'O'], distance: 14 });
	t.end();
});

t.test('Path from V to P', (t) => {
	end = 'P';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'U', 'T', 'R', 'P'], distance: 11 });
	t.end();
});

t.test('Path from V to Q', (t) => {
	end = 'Q';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'H', 'Q'], distance: 11 });
	t.end();
});

t.test('Path from V to R', (t) => {
	end = 'R';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'U', 'T', 'R'], distance: 7 });
	t.end();
});

t.test('Path from V to S', (t) => {
	end = 'S';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'U', 'S'], distance: 6 });
	t.end();
});

t.test('Path from V to T', (t) => {
	end = 'T';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'U', 'T'], distance: 5 });
	t.end();
});

t.test('Path from V to U', (t) => {
	end = 'U';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'U'], distance: 2 });
	t.end();
});

t.test('Path from V to W', (t) => {
	end = 'W';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'W'], distance: 4 });
	t.end();
});

t.test('Path from V to X', (t) => {
	end = 'X';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'X'], distance: 3 });
	t.end();
});

t.test('Path from V to Y', (t) => {
	end = 'Y';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'W', 'Y'], distance: 7 });
	t.end();
});

t.test('Path from V to Z', (t) => {
	end = 'Z';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['V', 'X', 'Z'], distance: 7 });
	t.end();
});
// =================================================================================================================
