import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';

// Node O ==========================================================================================================
const start = 'O';
let end: string;

t.test('Path from O to A', (t) => {
	end = 'A';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, {
		path: ['O', 'Q', 'S', 'F', 'E', 'B', 'A'],
		distance: 15,
	});
	t.end();
});

t.test('Path from O to B', (t) => {
	end = 'B';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, { path: ['O', 'Q', 'S', 'F', 'E', 'B'], distance: 14 });
	t.end();
});

t.test('Path from O to C', (t) => {
	end = 'C';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'S', 'F', 'C'], distance: 13 });
	t.end();
});

t.test('Path from O to D', (t) => {
	end = 'D';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'S', 'F', 'D'], distance: 11 });
	t.end();
});

t.test('Path from O to E', (t) => {
	end = 'E';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'S', 'F', 'E'], distance: 13 });
	t.end();
});

t.test('Path from O to F', (t) => {
	end = 'F';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'S', 'F'], distance: 10 });
	t.end();
});

t.test('Path from O to G', (t) => {
	end = 'G';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'H', 'G'], distance: 11 });
	t.end();
});

t.test('Path from O to H', (t) => {
	end = 'H';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'H'], distance: 7 });
	t.end();
});

t.test('Path from O to I', (t) => {
	end = 'I';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'H', 'I'], distance: 9 });
	t.end();
});

t.test('Path from O to J', (t) => {
	end = 'J';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'J'], distance: 7 });
	t.end();
});

t.test('Path from O to K', (t) => {
	end = 'K';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'M', 'K'], distance: 6 });
	t.end();
});

t.test('Path from O to L', (t) => {
	end = 'L';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'M', 'L'], distance: 7 });
	t.end();
});

t.test('Path from O to M', (t) => {
	end = 'M';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'M'], distance: 2 });
	t.end();
});

t.test('Path from O to N', (t) => {
	end = 'N';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'N'], distance: 4 });
	t.end();
});

t.test('Path from O to P', (t) => {
	end = 'P';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
	t.end();
});

t.test('Path from O to Q', (t) => {
	end = 'Q';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q'], distance: 3 });
	t.end();
});

t.test('Path from O to R', (t) => {
	end = 'R';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'R'], distance: 8 });
	t.end();
});

t.test('Path from O to S', (t) => {
	end = 'S';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'S'], distance: 9 });
	t.end();
});

t.test('Path from O to T', (t) => {
	end = 'T';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'R', 'T'], distance: 10 });
	t.end();
});

t.test('Path from O to U', (t) => {
	end = 'U';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'S', 'U'], distance: 13 });
	t.end();
});

t.test('Path from O to V', (t) => {
	end = 'V';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'H', 'V'], distance: 14 });
	t.end();
});

t.test('Path from O to W', (t) => {
	end = 'W';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'S', 'U', 'W'], distance: 18 });
	t.end();
});

t.test('Path from O to X', (t) => {
	end = 'X';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'H', 'V', 'X'], distance: 17 });
	t.end();
});

t.test('Path from O to Y', (t) => {
	end = 'Y';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['O', 'Q', 'S', 'F', 'C', 'Y'], distance: 15 });
	t.end();
});

t.test('Path from O to Z', (t) => {
	end = 'Z';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, {
		path: ['O', 'Q', 'S', 'F', 'C', 'Y', 'Z'],
		distance: 17,
	});
	t.end();
});
// =================================================================================================================
