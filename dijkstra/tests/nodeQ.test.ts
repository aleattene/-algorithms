import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';

// Node Q ==========================================================================================================
const start = 'Q';
let end: string;

t.test('Path from Q to A', (t) => {
	end = 'A';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, { path: ['Q', 'S', 'F', 'E', 'B', 'A'], distance: 12 });
	t.end();
});

t.test('Path from Q to B', (t) => {
	end = 'B';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, { path: ['Q', 'S', 'F', 'E', 'B'], distance: 11 });
	t.end();
});

t.test('Path from Q to C', (t) => {
	end = 'C';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'S', 'F', 'C'], distance: 10 });
	t.end();
});

t.test('Path from Q to D', (t) => {
	end = 'D';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'S', 'F', 'D'], distance: 8 });
	t.end();
});

t.test('Path from Q to E', (t) => {
	end = 'E';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'S', 'F', 'E'], distance: 10 });
	t.end();
});

t.test('Path from Q to F', (t) => {
	end = 'F';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'S', 'F'], distance: 7 });
	t.end();
});

// Double Results: G-H-Q-P and G-F-S-R-P (distance: 10)
// t.test('Path from Q to G', t => {
//     end = "G";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['G', 'H', 'Q', 'P], distance: 10 });
//     t.end();
// });

t.test('Path from Q to H', (t) => {
	end = 'H';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'H'], distance: 4 });
	t.end();
});

t.test('Path from Q to I', (t) => {
	end = 'I';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'H', 'I'], distance: 6 });
	t.end();
});

t.test('Path from Q to J', (t) => {
	end = 'J';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'J'], distance: 4 });
	t.end();
});

t.test('Path from Q to K', (t) => {
	end = 'K';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'J', 'K'], distance: 7 });
	t.end();
});

t.test('Path from Q to L', (t) => {
	end = 'L';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'J', 'K', 'L'], distance: 9 });
	t.end();
});

t.test('Path from Q to M', (t) => {
	end = 'M';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'O', 'M'], distance: 5 });
	t.end();
});

// Double Results: N-O-Q and N-P-Q (distance: 7)
// t.test('Path from Q to N', t => {
//     end = "N";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['Q', 'P', 'N'], distance: 7 });
//     t.end();
// });

t.test('Path from Q to O', (t) => {
	end = 'O';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'O'], distance: 3 });
	t.end();
});

t.test('Path from Q to P', (t) => {
	end = 'P';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'P'], distance: 2 });
	t.end();
});

t.test('Path from Q to R', (t) => {
	end = 'R';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'R'], distance: 5 });
	t.end();
});

t.test('Path from Q to S', (t) => {
	end = 'S';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'S'], distance: 6 });
	t.end();
});

t.test('Path from Q to T', (t) => {
	end = 'T';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'R', 'T'], distance: 7 });
	t.end();
});

// Double Results: Q-S-U and Q-R-T-U (distance: 10)
// t.test('Path from Q to U', t => {
//     end = "U";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['Q', 'S', 'U'], distance: 10 });
//     t.end();
// });

t.test('Path from Q to V', (t) => {
	end = 'V';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'H', 'V'], distance: 11 });
	t.end();
});

// Double Results: Q-S-U-W and Q-R-T-U-W (distance: 15)
// t.test('Path from Q to W', t => {
//     end = "W";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['Q', 'R', 'T', 'U', 'W'], distance: 15 });
//     t.end();
// });

t.test('Path from Q to X', (t) => {
	end = 'X';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'H', 'V', 'X'], distance: 14 });
	t.end();
});

t.test('Path from Q to Y', (t) => {
	end = 'Y';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'S', 'F', 'C', 'Y'], distance: 12 });
	t.end();
});

t.test('Path from P to Z', (t) => {
	end = 'Z';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['Q', 'S', 'F', 'C', 'Y', 'Z'], distance: 14 });
	t.end();
});
// =================================================================================================================
