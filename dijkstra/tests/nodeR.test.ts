import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';

// Node R ==========================================================================================================
const start = 'R';
let end: string;

t.test('Path from R to A', (t) => {
	end = 'A';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, { path: ['R', 'S', 'F', 'E', 'B', 'A'], distance: 9 });
	t.end();
});

t.test('Path from R to B', (t) => {
	end = 'B';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, { path: ['R', 'S', 'F', 'E', 'B'], distance: 8 });
	t.end();
});

t.test('Path from R to C', (t) => {
	end = 'C';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'S', 'F', 'C'], distance: 7 });
	t.end();
});

t.test('Path from R to D', (t) => {
	end = 'D';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'S', 'F', 'D'], distance: 5 });
	t.end();
});

t.test('Path from R to E', (t) => {
	end = 'E';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'S', 'F', 'E'], distance: 7 });
	t.end();
});

t.test('Path from R to F', (t) => {
	end = 'F';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'S', 'F'], distance: 4 });
	t.end();
});

t.test('Path from R to G', (t) => {
	end = 'G';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'S', 'F', 'G'], distance: 6 });
	t.end();
});

// Double Results: R-Q-H and R-S-F-H (distance: 9)
// t.test('Path from R to H', t => {
//     end = "H";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['R', 'Q', 'H'], distance: 9 });
//     t.end();
// });

t.test('Path from R to I', (t) => {
	end = 'I';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'S', 'F', 'G', 'I'], distance: 9 });
	t.end();
});

t.test('Path from R to J', (t) => {
	end = 'J';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'Q', 'J'], distance: 9 });
	t.end();
});

t.test('Path from R to K', (t) => {
	end = 'K';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'Q', 'J', 'K'], distance: 12 });
	t.end();
});

t.test('Path from R to L', (t) => {
	end = 'L';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'Q', 'J', 'K', 'L'], distance: 14 });
	t.end();
});

t.test('Path from R to M', (t) => {
	end = 'M';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'Q', 'O', 'M'], distance: 10 });
	t.end();
});

t.test('Path from R to N', (t) => {
	end = 'N';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'P', 'N'], distance: 9 });
	t.end();
});

t.test('Path from R to O', (t) => {
	end = 'O';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'Q', 'O'], distance: 8 });
	t.end();
});

t.test('Path from R to P', (t) => {
	end = 'P';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'P'], distance: 4 });
	t.end();
});

t.test('Path from R to Q', (t) => {
	end = 'Q';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'Q'], distance: 5 });
	t.end();
});

t.test('Path from R to S', (t) => {
	end = 'S';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'S'], distance: 3 });
	t.end();
});

t.test('Path from R to T', (t) => {
	end = 'T';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'T'], distance: 2 });
	t.end();
});

t.test('Path from R to U', (t) => {
	end = 'U';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'T', 'U'], distance: 5 });
	t.end();
});

t.test('Path from R to V', (t) => {
	end = 'V';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'T', 'U', 'V'], distance: 7 });
	t.end();
});

t.test('Path from R to W', (t) => {
	end = 'W';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'T', 'U', 'W'], distance: 10 });
	t.end();
});

t.test('Path from R to X', (t) => {
	end = 'X';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'T', 'U', 'V', 'X'], distance: 10 });
	t.end();
});

t.test('Path from R to Y', (t) => {
	end = 'Y';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'S', 'F', 'C', 'Y'], distance: 9 });
	t.end();
});

t.test('Path from R to Z', (t) => {
	end = 'Z';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['R', 'S', 'F', 'C', 'Y', 'Z'], distance: 11 });
	t.end();
});
// =================================================================================================================
