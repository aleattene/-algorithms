import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';

// Node M ==========================================================================================================
const start = 'M';
let end: string;

t.test('Path from M to A', (t) => {
	end = 'A';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, {
		path: ['M', 'O', 'Q', 'S', 'F', 'E', 'B', 'A'],
		distance: 17,
	});
	t.end();
});

t.test('Path from M to B', (t) => {
	end = 'B';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, {
		path: ['M', 'O', 'Q', 'S', 'F', 'E', 'B'],
		distance: 16,
	});
	t.end();
});

t.test('Path from M to C', (t) => {
	end = 'C';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O', 'Q', 'S', 'F', 'C'], distance: 15 });
	t.end();
});

t.test('Path from M to D', (t) => {
	end = 'D';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O', 'Q', 'S', 'F', 'D'], distance: 13 });
	t.end();
});

t.test('Path from M to E', (t) => {
	end = 'E';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O', 'Q', 'S', 'F', 'E'], distance: 15 });
	t.end();
});

t.test('Path from M to F', (t) => {
	end = 'F';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O', 'Q', 'S', 'F'], distance: 12 });
	t.end();
});

t.test('Path from M to G', (t) => {
	end = 'G';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'K', 'I', 'G'], distance: 12 });
	t.end();
});

t.test('Path from M to H', (t) => {
	end = 'H';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O', 'Q', 'H'], distance: 9 });
	t.end();
});

t.test('Path from M to I', (t) => {
	end = 'I';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'K', 'I'], distance: 9 });
	t.end();
});

t.test('Path from M to J', (t) => {
	end = 'J';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'K', 'J'], distance: 7 });
	t.end();
});

t.test('Path from M to K', (t) => {
	end = 'K';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'K'], distance: 4 });
	t.end();
});

t.test('Path from M to L', (t) => {
	end = 'L';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'L'], distance: 5 });
	t.end();
});

t.test('Path from M to N', (t) => {
	end = 'N';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'N'], distance: 3 });
	t.end();
});

t.test('Path from M to O', (t) => {
	end = 'O';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O'], distance: 2 });
	t.end();
});

t.test('Path from M to P', (t) => {
	end = 'P';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O', 'Q', 'P'], distance: 7 });
	t.end();
});

t.test('Path from M to Q', (t) => {
	end = 'Q';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O', 'Q'], distance: 5 });
	t.end();
});

t.test('Path from M to R', (t) => {
	end = 'R';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O', 'Q', 'R'], distance: 10 });
	t.end();
});

t.test('Path from M to S', (t) => {
	end = 'S';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O', 'Q', 'S'], distance: 11 });
	t.end();
});

t.test('Path from M to T', (t) => {
	end = 'T';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O', 'Q', 'R', 'T'], distance: 12 });
	t.end();
});

// Double Results: M-O-Q-S-U and M-O-Q-R-T-U (distance: 15)
// t.test('Path from M to U', t => {
//     end = "U";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['M', 'O', 'Q', 'R', 'T', 'U'], distance: 15 });
//     t.end();
// });

t.test('Path from M to V', (t) => {
	end = 'V';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O', 'Q', 'H', 'V'], distance: 16 });
	t.end();
});

// Double Results: M-O-Q-S-U-W and M-O-Q-H-V-X (distance: 20)
// t.test('Path from M to W', t => {
//     end = "W";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['M', 'O', 'Q', 'S', 'U', 'W'], distance: 20 });
//     t.end();
// });

t.test('Path from M to X', (t) => {
	end = 'X';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['M', 'O', 'Q', 'H', 'V', 'X'], distance: 19 });
	t.end();
});

t.test('Path from M to Y', (t) => {
	end = 'Y';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, {
		path: ['M', 'O', 'Q', 'S', 'F', 'C', 'Y'],
		distance: 17,
	});
	t.end();
});

t.test('Path from M to Z', (t) => {
	end = 'Z';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, {
		path: ['M', 'O', 'Q', 'S', 'F', 'C', 'Y', 'Z'],
		distance: 19,
	});
	t.end();
});
// =================================================================================================================
