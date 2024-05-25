import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';

// Node X ==========================================================================================================
const start = 'X';
let end: string;

t.test('Path from X to A', (t) => {
	end = 'A';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, { path: ['X', 'Y', 'C', 'B', 'A'], distance: 10 });
	t.end();
});

t.test('Path from X to B', (t) => {
	end = 'B';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, { path: ['X', 'Y', 'C', 'B'], distance: 9 });
	t.end();
});

t.test('Path from X to C', (t) => {
	end = 'C';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'Y', 'C'], distance: 7 });
	t.end();
});

// Double Results D-U-V-X and D-F-C-Y-X (distance 11)
// t.test('Path from X to D', t => {
//     end = "D";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['D', 'U', 'V', 'J'], distance: 11 });
//     t.end();
// });

t.test('Path from X to E', (t) => {
	end = 'E';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'Y', 'C', 'E'], distance: 9 });
	t.end();
});

t.test('Path from X to F', (t) => {
	end = 'F';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'Y', 'C', 'F'], distance: 10 });
	t.end();
});

t.test('Path from X to G', (t) => {
	end = 'G';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'Y', 'C', 'F', 'G'], distance: 12 });
	t.end();
});

t.test('Path from X to H', (t) => {
	end = 'H';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V', 'H'], distance: 10 });
	t.end();
});

t.test('Path from X to I', (t) => {
	end = 'I';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V', 'H', 'I'], distance: 12 });
	t.end();
});

// Double results: J-H-F-C-Y-X and J-Q-S-U-W-X (distance 19)
// t.test('Path from X to J', t => {
//     end = "J";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['X', 'Y', 'C', 'F', 'H', 'J'], distance: 19 });
//     t.end();
// });

t.test('Path from X to K', (t) => {
	end = 'K';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V', 'H', 'I', 'K'], distance: 17 });
	t.end();
});

t.test('Path from X to L', (t) => {
	end = 'L';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V', 'H', 'I', 'K', 'L'], distance: 19 });
	t.end();
});

t.test('Path from X to M', (t) => {
	end = 'M';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V', 'H', 'Q', 'O', 'M'], distance: 19 });
	t.end();
});

t.test('Path from X to N', (t) => {
	end = 'N';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, {
		path: ['X', 'V', 'U', 'T', 'R', 'P', 'N'],
		distance: 19,
	});
	t.end();
});

t.test('Path from X to O', (t) => {
	end = 'O';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V', 'H', 'Q', 'O'], distance: 17 });
	t.end();
});

t.test('Path from X to P', (t) => {
	end = 'P';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V', 'U', 'T', 'R', 'P'], distance: 14 });
	t.end();
});

t.test('Path from X to Q', (t) => {
	end = 'Q';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V', 'H', 'Q'], distance: 14 });
	t.end();
});

t.test('Path from X to R', (t) => {
	end = 'R';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V', 'U', 'T', 'R'], distance: 10 });
	t.end();
});

t.test('Path from X to S', (t) => {
	end = 'S';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V', 'U', 'S'], distance: 9 });
	t.end();
});

t.test('Path from X to T', (t) => {
	end = 'T';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V', 'U', 'T'], distance: 8 });
	t.end();
});

t.test('Path from X to U', (t) => {
	end = 'U';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V', 'U'], distance: 5 });
	t.end();
});

t.test('Path from X to V', (t) => {
	end = 'V';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'V'], distance: 3 });
	t.end();
});

t.test('Path from X to W', (t) => {
	end = 'W';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'W'], distance: 2 });
	t.end();
});

t.test('Path from X to Y', (t) => {
	end = 'Y';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'Y'], distance: 5 });
	t.end();
});

t.test('Path from X to Z', (t) => {
	end = 'Z';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['X', 'Z'], distance: 4 });
	t.end();
});
// =================================================================================================================
