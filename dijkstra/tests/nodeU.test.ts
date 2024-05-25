import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';
import { distancesGraph } from './dijkstra.test';
import { ShortestPath } from './dijkstra.test';

// Node U ==========================================================================================================
const start = 'U';
let end: string;

t.test('Path from U to A', (t) => {
	end = 'A';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, { path: ['U', 'S', 'F', 'E', 'B', 'A'], distance: 10 });
	t.end();
});

t.test('Path from U to B', (t) => {
	end = 'B';
	const minPath: ShortestPath = getDijkstraMinPath(
		distancesGraph,
		start,
		end,
	);
	t.same(minPath, { path: ['U', 'S', 'F', 'E', 'B'], distance: 9 });
	t.end();
});

t.test('Path from U to C', (t) => {
	end = 'C';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'S', 'F', 'C'], distance: 8 });
	t.end();
});

t.test('Path from U to D', (t) => {
	end = 'D';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'D'], distance: 6 });
	t.end();
});

t.test('Path from U to E', (t) => {
	end = 'E';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'S', 'F', 'E'], distance: 8 });
	t.end();
});

t.test('Path from U to F', (t) => {
	end = 'F';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'S', 'F'], distance: 5 });
	t.end();
});

t.test('Path from U to G', (t) => {
	end = 'G';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'S', 'F', 'G'], distance: 7 });
	t.end();
});

t.test('Path from U to H', (t) => {
	end = 'H';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'V', 'H'], distance: 9 });
	t.end();
});

t.test('Path from U to I', (t) => {
	end = 'I';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'S', 'F', 'G', 'I'], distance: 10 });
	t.end();
});

t.test('Path from U to J', (t) => {
	end = 'J';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'S', 'Q', 'J'], distance: 14 });
	t.end();
});

t.test('Path from U to K', (t) => {
	end = 'K';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'S', 'F', 'G', 'I', 'K'], distance: 15 });
	t.end();
});

t.test('Path from U to L', (t) => {
	end = 'L';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, {
		path: ['U', 'S', 'F', 'G', 'I', 'K', 'L'],
		distance: 17,
	});
	t.end();
});

// Double Results: M-O-Q-S-U and M-O-Q-R-T-U (distance: 15)
// t.test('Path from U to M', t => {
//     end = "M";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['M', 'N', 'Q', 'S', 'U'], distance: 15 });
//     t.end();
// });

t.test('Path from U to N', (t) => {
	end = 'N';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'T', 'R', 'P', 'N'], distance: 14 });
	t.end();
});

t.test('Path from U to O', (t) => {
	end = 'O';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'S', 'Q', 'O'], distance: 13 });
	t.end();
});

t.test('Path from U to P', (t) => {
	end = 'P';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'T', 'R', 'P'], distance: 9 });
	t.end();
});

// Double Results: Q-S-U and Q-R-T-U (distance: 10)
// t.test('Path from U to Q', t => {
//     end = "Q";
//     const minPath = getDijkstraMinPath(distancesGraph, start, end);
//     t.same(minPath, { path: ['U', 'T', 'R', 'Q'], distance: 10 });
//     t.end();
// });

t.test('Path from U to R', (t) => {
	end = 'R';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'T', 'R'], distance: 5 });
	t.end();
});

t.test('Path from U to S', (t) => {
	end = 'S';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'S'], distance: 4 });
	t.end();
});

t.test('Path from U to T', (t) => {
	end = 'T';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'T'], distance: 3 });
	t.end();
});

t.test('Path from U to V', (t) => {
	end = 'V';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'V'], distance: 2 });
	t.end();
});

t.test('Path from U to W', (t) => {
	end = 'W';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'W'], distance: 5 });
	t.end();
});

t.test('Path from U to X', (t) => {
	end = 'X';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'V', 'X'], distance: 5 });
	t.end();
});

t.test('Path from U to Y', (t) => {
	end = 'Y';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'W', 'Y'], distance: 8 });
	t.end();
});

t.test('Path from U to Z', (t) => {
	end = 'Z';
	const minPath = getDijkstraMinPath(distancesGraph, start, end);
	t.same(minPath, { path: ['U', 'V', 'X', 'Z'], distance: 9 });
	t.end();
});
// =================================================================================================================
