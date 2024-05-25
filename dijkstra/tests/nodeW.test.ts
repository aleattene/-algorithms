import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';

// Node W ==========================================================================================================
const start = 'W';
let end: string;

t.test('Path from W to A', (t) => {
	end = 'A';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, { path: ['W', 'Y', 'C', 'B', 'A'], distance: 8 });
	t.end();
});

t.test('Path from W to B', (t) => {
	end = 'B';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, { path: ['W', 'Y', 'C', 'B'], distance: 7 });
	t.end();
});

t.test('Path from W to C', (t) => {
	end = 'C';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'Y', 'C'], distance: 5 });
	t.end();
});

t.test('Path from W to D', (t) => {
	end = 'D';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'Y', 'C', 'F', 'D'], distance: 9 });
	t.end();
});

t.test('Path from W to E', (t) => {
	end = 'E';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'Y', 'C', 'E'], distance: 7 });
	t.end();
});

t.test('Path from W to F', (t) => {
	end = 'F';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'Y', 'C', 'F'], distance: 8 });
	t.end();
});

t.test('Path from W to G', (t) => {
	end = 'G';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'Y', 'C', 'F', 'G'], distance: 10 });
	t.end();
});

t.test('Path from W to H', (t) => {
	end = 'H';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'V', 'H'], distance: 11 });
	t.end();
});

// Double Results I-H-V and I-G-F-C-Y-W (distance: 13)
// t.test('Path from W to I', t => {
//     end = "I";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['V', 'H', 'I'], distance: 13 });
//     t.end();
// });

// Double results: J-H-F-C-Y-W and J-Q-S-U-W (distance 19)
// t.test('Path from W to J', t => {
//     end = "J";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['J', 'H', 'F', 'C', 'Y', 'W'], distance: 19 });
//     t.end();
// });

// Double results: W-V-H-I-K and W-Y-C-F-G-I-K (distance 18)
// t.test('Path from W to K', t => {
//     end = "K";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['W', 'V', 'H', 'I', 'K'], distance: 18 });
//     t.end();
// });

// Double Results: L-K-I-H-F-C-Y-W and L-K-I-H-V-W (distance: 20)
// t.test('Path from W to L', t => {
//     end = "L";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['W', 'V', 'H', 'I', 'K', 'L'], distance: 20 });
//     t.end();
// });

// Double Results: M-O-Q-S-U-W and M-O-Q-H-V-X-W (distance: 20)
// t.test('Path from W to M', t => {
//     end = "M";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['W', 'U', 'S', 'Q', 'O', 'M'], distance: 20 });
//     t.end();
// });

t.test('Path from W to N', (t) => {
	end = 'N';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'U', 'T', 'R', 'P', 'N'], distance: 19 });
	t.end();
});

t.test('Path from W to O', (t) => {
	end = 'O';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'U', 'S', 'Q', 'O'], distance: 18 });
	t.end();
});

t.test('Path from W to P', (t) => {
	end = 'P';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'U', 'T', 'R', 'P'], distance: 14 });
	t.end();
});

// Double Results: Q-S-U-W and Q-R-T-U-W (distance: 15)
// t.test('Path from W to Q', t => {
//     end = "Q";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['W', 'U', 'T', 'R', 'Q'], distance: 15 });
//     t.end();
// });

t.test('Path from W to R', (t) => {
	end = 'R';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'U', 'T', 'R'], distance: 10 });
	t.end();
});

t.test('Path from W to S', (t) => {
	end = 'S';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'U', 'S'], distance: 9 });
	t.end();
});

t.test('Path from W to T', (t) => {
	end = 'T';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'U', 'T'], distance: 8 });
	t.end();
});

t.test('Path from W to U', (t) => {
	end = 'U';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'U'], distance: 5 });
	t.end();
});

t.test('Path from W to V', (t) => {
	end = 'V';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'V'], distance: 4 });
	t.end();
});

t.test('Path from W to X', (t) => {
	end = 'X';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'X'], distance: 2 });
	t.end();
});

t.test('Path from W to Y', (t) => {
	end = 'Y';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'Y'], distance: 3 });
	t.end();
});

t.test('Path from W to Z', (t) => {
	end = 'Z';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['W', 'Y', 'Z'], distance: 5 });
	t.end();
});
// =================================================================================================================
