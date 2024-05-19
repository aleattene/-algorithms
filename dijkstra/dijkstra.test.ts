import t from 'tap';
import { getDijkstraMinPath } from './dijkstra';

t.test('Dijkstra Algorithm', t => {
    const distancesGraph = {
        A: { B: 1, C: 4, D: 6 },
        B: { A: 1, C: 2, D: 4, E: 1 },
        C: { A: 4, B: 2, E: 2, F: 3 },
        D: { A: 6, B: 4, E: 4, F: 1, G: 7 },
        E: { B: 1, C: 2, D: 4, F: 3, G: 6 },
        F: { A: 8, D: 1, E: 3, G: 2, H: 5 },
        G: { D: 7, E: 6, F: 2, H: 4, I: 3 },
        H: { F: 5, G: 4, I: 2, J: 6 },
        I: { G: 3, H: 2, J: 4, K: 5 },
        J: { H: 6, I: 4, K: 3, L: 7 },
        K: { I: 5, J: 3, L: 2, M: 4 },
        L: { J: 7, K: 2, M: 5, N: 6 },
        M: { K: 4, L: 5, N: 3, O: 2 },
        N: { L: 6, M: 3, O: 4, P: 5 },
        O: { M: 2, N: 4, P: 6, Q: 3 },
        P: { N: 5, O: 6, Q: 2, R: 4 },
        Q: { O: 3, P: 2, R: 5, S: 6 },
        R: { P: 4, Q: 5, S: 3, T: 2 },
        S: { Q: 6, R: 3, T: 5, U: 4 },
        T: { R: 2, S: 5, U: 3, V: 6 },
        U: { S: 4, T: 3, V: 2, W: 5 },
        V: { T: 6, U: 2, W: 4, X: 3 },
        W: { U: 5, V: 4, X: 2, Y: 3 },
        X: { V: 3, W: 2, Y: 5, Z: 4 },
        Y: { W: 3, X: 5, Z: 2 },
        Z: { X: 4, Y: 2 }
    };

    interface ShortestPath {
        path: string[],
        distance: number
    }

    // Node A ==========================================================================================================
    let start: string  = "A";
    let end: string;

    t.test('Path from A to B', t => {
        end = "B";
        const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B'], distance: 1 });
        t.end();
    });

    t.test('Path from A to C', t => {
        end = "C";
        const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'C'], distance: 3 });
        t.end();
    });

    t.test('Path from A to D', t => {
        end = "D";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'D'], distance: 5 });
        t.end();
    });

    t.test('Path from A to E', t => {
        end = "E";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E'], distance: 2 });
        t.end();
    });

    t.test('Path from A to F', t => {
        end = "F";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F'], distance: 5 });
        t.end();
    });

    t.test('Path from A to G', t => {
        end = "G";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G'], distance: 7 });
        t.end();
    });

    t.test('Path from A to H', t => {
        end = "H";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F', 'H'], distance: 10 });
        t.end();
    });

    t.test('Path from A to I', t => {
        end = "I";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G', 'I'], distance: 10 });
        t.end();
    });

    t.test('Path from A to J', t => {
        end = "J";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G', 'I', 'J'], distance: 14 });
        t.end();
    });

    t.test('Path from A to K', t => {
        end = "K";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G', 'I', 'K'], distance: 15 });
        t.end();
    });

    // t.test('Path from a to l', t => {
    //     const start = "a";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'l'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from a to m', t => {
    //     const start = "a";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from a to n', t => {
    //     const start = "a";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'n'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from a to o', t => {
    //     const start = "a";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'o'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from a to p', t => {
    //     const start = "a";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'p'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from a to q', t => {
    //     const start = "a";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'o', 'q'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from a to r', t => {
    //     const start = "a";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'p', 'r'], distance: 32 });
    //     t.end();
    // });
    //
    // t.test('Path from a to s', t => {
    //     const start = "a";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'o', 'q', 's'], distance: 31 });
    //     t.end();
    // });
    //
    // t.test('Path from a to t', t => {
    //     const start = "a";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't'], distance: 34 });
    //     t.end();
    // });
    //
    // t.test('Path from a to u', t => {
    //     const start = "a";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u'], distance: 35 });
    //     t.end();
    // });
    //
    // t.test('Path from a to v', t => {
    //     const start = "a";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v'], distance: 40 });
    //     t.end();
    // });
    //
    // t.test('Path from a to w', t => {
    //     const start = "a";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w'], distance: 40 });
    //     t.end();
    // });
    //
    // t.test('Path from a to x', t => {
    //     const start = "a";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x'], distance: 43 });
    //     t.end();
    // });
    //
    // t.test('Path from a to y', t => {
    //     const start = "a";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y'], distance: 43 });
    //     t.end();
    // });
    //
    // t.test('Path from a to z', t => {
    //     const start = "a";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['a', 'b', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 47 });
    //     t.end();
    // });
    //
    // t.test('Path from b to a', t => {
    //     const start = "b";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'a'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from b to c', t => {
    //     const start = "b";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'c'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from b to d', t => {
    //     const start = "b";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'd'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from b to e', t => {
    //     const start = "b";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from b to f', t => {
    //     const start = "b";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from b to g', t => {
    //     const start = "b";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'g'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from b to h', t => {
    //     const start = "b";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'h'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from b to i', t => {
    //     const start = "b";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from b to j', t => {
    //     const start = "b";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'h', 'j'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from b to k', t => {
    //     const start = "b";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from b to l', t => {
    //     const start = "b";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'l'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from b to m', t => {
    //     const start = "b";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from b to n', t => {
    //     const start = "b";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'n'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from b to o', t => {
    //     const start = "b";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'o'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from b to p', t => {
    //     const start = "b";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'p'], distance: 27 });
    //     t.end();
    // });
    //
    // t.test('Path from b to q', t => {
    //     const start = "b";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'o', 'q'], distance: 24 });
    //     t.end();
    // });
    //
    // t.test('Path from b to r', t => {
    //     const start = "b";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'p', 'r'], distance: 31 });
    //     t.end();
    // });
    //
    // t.test('Path from b to s', t => {
    //     const start = "b";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'o', 'q', 's'], distance: 30 });
    //     t.end();
    // });
    //
    // t.test('Path from b to t', t => {
    //     const start = "b";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't'], distance: 33 });
    //     t.end();
    // });
    //
    // t.test('Path from b to u', t => {
    //     const start = "b";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u'], distance: 34 });
    //     t.end();
    // });
    //
    // t.test('Path from b to v', t => {
    //     const start = "b";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v'], distance: 39 });
    //     t.end();
    // });
    //
    // t.test('Path from b to w', t => {
    //     const start = "b";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w'], distance: 39 });
    //     t.end();
    // });
    //
    // t.test('Path from b to x', t => {
    //     const start = "b";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x'], distance: 42 });
    //     t.end();
    // });
    //
    // t.test('Path from b to y', t => {
    //     const start = "b";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y'], distance: 42 });
    //     t.end();
    // });
    //
    // t.test('Path from b to z', t => {
    //     const start = "b";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['b', 'e', 'f', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 46 });
    //     t.end();
    // });
    //
    // t.test('Path from c to a', t => {
    //     const start = "c";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'a'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from c to b', t => {
    //     const start = "c";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'b'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from c to d', t => {
    //     const start = "c";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'b', 'd'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from c to e', t => {
    //     const start = "c";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from c to f', t => {
    //     const start = "c";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'f'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from c to g', t => {
    //     const start = "c";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from c to h', t => {
    //     const start = "c";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'f', 'h'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from c to i', t => {
    //     const start = "c";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from c to j', t => {
    //     const start = "c";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'f', 'h', 'j'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from c to k', t => {
    //     const start = "c";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from c to l', t => {
    //     const start = "c";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'f', 'h', 'j', 'l'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from c to m', t => {
    //     const start = "c";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from c to n', t => {
    //     const start = "c";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'n'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from c to o', t => {
    //     const start = "c";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'o'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from c to p', t => {
    //     const start = "c";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'n', 'p'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from c to q', t => {
    //     const start = "c";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'o', 'q'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from c to r', t => {
    //     const start = "c";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'n', 'p', 'r'], distance: 32 });
    //     t.end();
    // });
    //
    // t.test('Path from c to s', t => {
    //     const start = "c";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'o', 'q', 's'], distance: 31 });
    //     t.end();
    // });
    //
    // t.test('Path from c to t', t => {
    //     const start = "c";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't'], distance: 34 });
    //     t.end();
    // });
    //
    // t.test('Path from c to u', t => {
    //     const start = "c";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u'], distance: 35 });
    //     t.end();
    // });
    //
    // t.test('Path from c to v', t => {
    //     const start = "c";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v'], distance: 40 });
    //     t.end();
    // });
    //
    // t.test('Path from c to w', t => {
    //     const start = "c";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w'], distance: 40 });
    //     t.end();
    // });
    //
    // t.test('Path from c to x', t => {
    //     const start = "c";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x'], distance: 43 });
    //     t.end();
    // });
    //
    // t.test('Path from c to y', t => {
    //     const start = "c";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y'], distance: 43 });
    //     t.end();
    // });
    //
    // t.test('Path from c to z', t => {
    //     const start = "c";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['c', 'e', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 47 });
    //     t.end();
    // });
    //
    // t.test('Path from d to a', t => {
    //     const start = "d";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'a'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from d to b', t => {
    //     const start = "d";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'b'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from d to c', t => {
    //     const start = "d";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'b', 'c'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from d to e', t => {
    //     const start = "d";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'e'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from d to f', t => {
    //     const start = "d";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'f'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from d to g', t => {
    //     const start = "d";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from d to h', t => {
    //     const start = "d";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'f', 'h'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from d to i', t => {
    //     const start = "d";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from d to j', t => {
    //     const start = "d";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'f', 'h', 'j'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from d to k', t => {
    //     const start = "d";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from d to l', t => {
    //     const start = "d";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'f', 'h', 'j', 'l'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from d to m', t => {
    //     const start = "d";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from d to n', t => {
    //     const start = "d";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'n'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from d to o', t => {
    //     const start = "d";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'o'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from d to p', t => {
    //     const start = "d";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'n', 'p'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from d to q', t => {
    //     const start = "d";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'o', 'q'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from d to r', t => {
    //     const start = "d";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'n', 'p', 'r'], distance: 29 });
    //     t.end();
    // });
    //
    // t.test('Path from d to s', t => {
    //     const start = "d";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'o', 'q', 's'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from d to t', t => {
    //     const start = "d";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't'], distance: 31 });
    //     t.end();
    // });
    //
    // t.test('Path from d to u', t => {
    //     const start = "d";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u'], distance: 32 });
    //     t.end();
    // });
    //
    // t.test('Path from d to v', t => {
    //     const start = "d";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v'], distance: 37 });
    //     t.end();
    // });
    //
    // t.test('Path from d to w', t => {
    //     const start = "d";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w'], distance: 37 });
    //     t.end();
    // });
    //
    // t.test('Path from d to x', t => {
    //     const start = "d";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x'], distance: 40 });
    //     t.end();
    // });
    //
    // t.test('Path from d to y', t => {
    //     const start = "d";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y'], distance: 40 });
    //     t.end();
    // });
    //
    // t.test('Path from d to z', t => {
    //     const start = "d";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['d', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 44 });
    //     t.end();
    // });
    //
    // t.test('Path from e to a', t => {
    //     const start = "e";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'b', 'a'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from e to b', t => {
    //     const start = "e";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'b'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from e to c', t => {
    //     const start = "e";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'c'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from e to d', t => {
    //     const start = "e";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'd'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from e to f', t => {
    //     const start = "e";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'f'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from e to g', t => {
    //     const start = "e";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from e to h', t => {
    //     const start = "e";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'f', 'h'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from e to i', t => {
    //     const start = "e";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from e to j', t => {
    //     const start = "e";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'f', 'h', 'j'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from e to k', t => {
    //     const start = "e";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from e to l', t => {
    //     const start = "e";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'f', 'h', 'j', 'l'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from e to m', t => {
    //     const start = "e";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from e to n', t => {
    //     const start = "e";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'n'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from e to o', t => {
    //     const start = "e";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'o'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from e to p', t => {
    //     const start = "e";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'n', 'p'], distance: 26 });
    //     t.end();
    // });
    //
    // t.test('Path from e to q', t => {
    //     const start = "e";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'o', 'q'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from e to r', t => {
    //     const start = "e";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'n', 'p', 'r'], distance: 30 });
    //     t.end();
    // });
    //
    // t.test('Path from e to s', t => {
    //     const start = "e";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'o', 'q', 's'], distance: 29 });
    //     t.end();
    // });
    //
    // t.test('Path from e to t', t => {
    //     const start = "e";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't'], distance: 32 });
    //     t.end();
    // });
    //
    // t.test('Path from e to u', t => {
    //     const start = "e";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u'], distance: 33 });
    //     t.end();
    // });
    //
    // t.test('Path from e to v', t => {
    //     const start = "e";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v'], distance: 38 });
    //     t.end();
    // });
    //
    // t.test('Path from e to w', t => {
    //     const start = "e";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w'], distance: 38 });
    //     t.end();
    // });
    //
    // t.test('Path from e to x', t => {
    //     const start = "e";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x'], distance: 41 });
    //     t.end();
    // });
    //
    // t.test('Path from e to y', t => {
    //     const start = "e";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y'], distance: 41 });
    //     t.end();
    // });
    //
    // t.test('Path from e to z', t => {
    //     const start = "e";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['e', 'g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 45 });
    //     t.end();
    // });
    //
    // t.test('Path from f to a', t => {
    //     const start = "f";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'c', 'a'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from f to b', t => {
    //     const start = "f";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'c', 'b'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from f to c', t => {
    //     const start = "f";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'c'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from f to d', t => {
    //     const start = "f";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'd'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from f to e', t => {
    //     const start = "f";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'e'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from f to g', t => {
    //     const start = "f";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'g'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from f to h', t => {
    //     const start = "f";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from f to i', t => {
    //     const start = "f";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from f to j', t => {
    //     const start = "f";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'j'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from f to k', t => {
    //     const start = "f";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from f to l', t => {
    //     const start = "f";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'j', 'l'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from f to m', t => {
    //     const start = "f";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from f to n', t => {
    //     const start = "f";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'n'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from f to o', t => {
    //     const start = "f";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'o'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from f to p', t => {
    //     const start = "f";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'n', 'p'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from f to q', t => {
    //     const start = "f";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'o', 'q'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from f to r', t => {
    //     const start = "f";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'n', 'p', 'r'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from f to s', t => {
    //     const start = "f";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'o', 'q', 's'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from f to t', t => {
    //     const start = "f";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'n', 'p', 'r', 't'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from f to u', t => {
    //     const start = "f";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'o', 'q', 's', 'u'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from f to v', t => {
    //     const start = "f";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from f to w', t => {
    //     const start = "f";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from f to x', t => {
    //     const start = "f";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x'], distance: 31 });
    //     t.end();
    // });
    //
    // t.test('Path from f to y', t => {
    //     const start = "f";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y'], distance: 31 });
    //     t.end();
    // });
    //
    // t.test('Path from f to z', t => {
    //     const start = "f";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['f', 'h', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 35 });
    //     t.end();
    // });
    //
    // t.test('Path from g to a', t => {
    //     const start = "g";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'h', 'f', 'c', 'a'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from g to b', t => {
    //     const start = "g";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'h', 'f', 'c', 'b'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from g to c', t => {
    //     const start = "g";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'h', 'f', 'c'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from g to d', t => {
    //     const start = "g";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'd'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from g to e', t => {
    //     const start = "g";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'e'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from g to f', t => {
    //     const start = "g";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'h', 'f'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from g to h', t => {
    //     const start = "g";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'h'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from g to i', t => {
    //     const start = "g";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from g to j', t => {
    //     const start = "g";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'h', 'j'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from g to k', t => {
    //     const start = "g";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from g to l', t => {
    //     const start = "g";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'h', 'j', 'l'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from g to m', t => {
    //     const start = "g";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from g to n', t => {
    //     const start = "g";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'n'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from g to o', t => {
    //     const start = "g";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'o'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from g to p', t => {
    //     const start = "g";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'n', 'p'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from g to q', t => {
    //     const start = "g";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'o', 'q'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from g to r', t => {
    //     const start = "g";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'n', 'p', 'r'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from g to s', t => {
    //     const start = "g";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'o', 'q', 's'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from g to t', t => {
    //     const start = "g";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'n', 'p', 'r', 't'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from g to u', t => {
    //     const start = "g";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'o', 'q', 's', 'u'], distance: 24 });
    //     t.end();
    // });
    //
    // t.test('Path from g to v', t => {
    //     const start = "g";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v'], distance: 29 });
    //     t.end();
    // });
    //
    // t.test('Path from g to w', t => {
    //     const start = "g";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w'], distance: 29 });
    //     t.end();
    // });
    //
    // t.test('Path from g to x', t => {
    //     const start = "g";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x'], distance: 32 });
    //     t.end();
    // });
    //
    // t.test('Path from g to y', t => {
    //     const start = "g";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y'], distance: 32 });
    //     t.end();
    // });
    //
    // t.test('Path from g to z', t => {
    //     const start = "g";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['g', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 36 });
    //     t.end();
    // });
    //
    // t.test('Path from h to a', t => {
    //     const start = "h";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'f', 'c', 'a'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from h to b', t => {
    //     const start = "h";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'f', 'c', 'b'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from h to c', t => {
    //     const start = "h";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'f', 'c'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from h to d', t => {
    //     const start = "h";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'd'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from h to e', t => {
    //     const start = "h";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'f', 'e'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from h to f', t => {
    //     const start = "h";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'f'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from h to g', t => {
    //     const start = "h";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'g'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from h to i', t => {
    //     const start = "h";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from h to j', t => {
    //     const start = "h";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'j'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from h to k', t => {
    //     const start = "h";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from h to l', t => {
    //     const start = "h";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'j', 'l'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from h to m', t => {
    //     const start = "h";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from h to n', t => {
    //     const start = "h";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'n'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from h to o', t => {
    //     const start = "h";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'o'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from h to p', t => {
    //     const start = "h";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'n', 'p'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from h to q', t => {
    //     const start = "h";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'o', 'q'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from h to r', t => {
    //     const start = "h";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'n', 'p', 'r'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from h to s', t => {
    //     const start = "h";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'o', 'q', 's'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from h to t', t => {
    //     const start = "h";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'n', 'p', 'r', 't'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from h to u', t => {
    //     const start = "h";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'o', 'q', 's', 'u'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from h to v', t => {
    //     const start = "h";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from h to w', t => {
    //     const start = "h";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from h to x', t => {
    //     const start = "h";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from h to y', t => {
    //     const start = "h";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from h to z', t => {
    //     const start = "h";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['h', 'i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 32 });
    //     t.end();
    // });
    //
    // t.test('Path from i to a', t => {
    //     const start = "i";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'h', 'f', 'c', 'a'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from i to b', t => {
    //     const start = "i";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'h', 'f', 'c', 'b'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from i to c', t => {
    //     const start = "i";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'h', 'f', 'c'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from i to d', t => {
    //     const start = "i";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'd'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from i to e', t => {
    //     const start = "i";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'e'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from i to f', t => {
    //     const start = "i";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'h', 'f'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from i to g', t => {
    //     const start = "i";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'g'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from i to h', t => {
    //     const start = "i";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'h'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from i to j', t => {
    //     const start = "i";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'h', 'j'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from i to k', t => {
    //     const start = "i";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from i to l', t => {
    //     const start = "i";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'h', 'j', 'l'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from i to m', t => {
    //     const start = "i";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from i to n', t => {
    //     const start = "i";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'n'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from i to o', t => {
    //     const start = "i";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'o'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from i to p', t => {
    //     const start = "i";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'n', 'p'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from i to q', t => {
    //     const start = "i";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'o', 'q'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from i to r', t => {
    //     const start = "i";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'n', 'p', 'r'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from i to s', t => {
    //     const start = "i";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'o', 'q', 's'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from i to t', t => {
    //     const start = "i";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'n', 'p', 'r', 't'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from i to u', t => {
    //     const start = "i";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'o', 'q', 's', 'u'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from i to v', t => {
    //     const start = "i";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'n', 'p', 'r', 't', 'v'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from i to w', t => {
    //     const start = "i";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'o', 'q', 's', 'u', 'w'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from i to x', t => {
    //     const start = "i";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from i to y', t => {
    //     const start = "i";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'o', 'q', 's', 'u', 'w', 'y'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from i to z', t => {
    //     const start = "i";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['i', 'k', 'm', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 32 });
    //     t.end();
    // });
    //
    // t.test('Path from j to a', t => {
    //     const start = "j";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'h', 'f', 'c', 'a'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from j to b', t => {
    //     const start = "j";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'h', 'f', 'c', 'b'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from j to c', t => {
    //     const start = "j";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'h', 'f', 'c'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from j to d', t => {
    //     const start = "j";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'd'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from j to e', t => {
    //     const start = "j";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'e'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from j to f', t => {
    //     const start = "j";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'h', 'f'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from j to g', t => {
    //     const start = "j";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'h', 'i', 'g'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from j to h', t => {
    //     const start = "j";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'h'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from j to i', t => {
    //     const start = "j";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'h', 'i'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from j to k', t => {
    //     const start = "j";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'k'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from j to l', t => {
    //     const start = "j";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from j to m', t => {
    //     const start = "j";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from j to n', t => {
    //     const start = "j";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'n'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from j to o', t => {
    //     const start = "j";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'o'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from j to p', t => {
    //     const start = "j";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'n', 'p'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from j to q', t => {
    //     const start = "j";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'o', 'q'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from j to r', t => {
    //     const start = "j";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'n', 'p', 'r'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from j to s', t => {
    //     const start = "j";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'o', 'q', 's'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from j to t', t => {
    //     const start = "j";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'n', 'p', 'r', 't'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from j to u', t => {
    //     const start = "j";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'o', 'q', 's', 'u'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from j to v', t => {
    //     const start = "j";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'n', 'p', 'r', 't', 'v'], distance: 27 });
    //     t.end();
    // });
    //
    // t.test('Path from j to w', t => {
    //     const start = "j";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'o', 'q', 's', 'u', 'w'], distance: 27 });
    //     t.end();
    // });
    //
    // t.test('Path from j to x', t => {
    //     const start = "j";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'n', 'p', 'r', 't', 'v', 'x'], distance: 30 });
    //     t.end();
    // });
    //
    // t.test('Path from j to y', t => {
    //     const start = "j";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'o', 'q', 's', 'u', 'w', 'y'], distance: 30 });
    //     t.end();
    // });
    //
    // t.test('Path from j to z', t => {
    //     const start = "j";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['j', 'l', 'm', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 34 });
    //     t.end();
    // });
    //
    // t.test('Path from k to a', t => {
    //     const start = "k";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'i', 'h', 'f', 'c', 'a'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from k to b', t => {
    //     const start = "k";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'i', 'h', 'f', 'c', 'b'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from k to c', t => {
    //     const start = "k";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'i', 'h', 'f', 'c'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from k to d', t => {
    //     const start = "k";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'd'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from k to e', t => {
    //     const start = "k";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'e'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from k to f', t => {
    //     const start = "k";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'i', 'h', 'f'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from k to g', t => {
    //     const start = "k";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'i', 'g'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from k to h', t => {
    //     const start = "k";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'i', 'h'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from k to i', t => {
    //     const start = "k";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'i'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from k to j', t => {
    //     const start = "k";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'l', 'j'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from k to l', t => {
    //     const start = "k";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'l'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from k to m', t => {
    //     const start = "k";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from k to n', t => {
    //     const start = "k";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'n'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from k to o', t => {
    //     const start = "k";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'o'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from k to p', t => {
    //     const start = "k";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'n', 'p'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from k to q', t => {
    //     const start = "k";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'o', 'q'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from k to r', t => {
    //     const start = "k";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'n', 'p', 'r'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from k to s', t => {
    //     const start = "k";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'o', 'q', 's'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from k to t', t => {
    //     const start = "k";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'n', 'p', 'r', 't'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from k to u', t => {
    //     const start = "k";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'o', 'q', 's', 'u'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from k to v', t => {
    //     const start = "k";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'n', 'p', 'r', 't', 'v'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from k to w', t => {
    //     const start = "k";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'o', 'q', 's', 'u', 'w'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from k to x', t => {
    //     const start = "k";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'n', 'p', 'r', 't', 'v', 'x'], distance: 26 });
    //     t.end();
    // });
    //
    // t.test('Path from k to y', t => {
    //     const start = "k";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'o', 'q', 's', 'u', 'w', 'y'], distance: 26 });
    //     t.end();
    // });
    //
    // t.test('Path from k to z', t => {
    //     const start = "k";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'm', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 30 });
    //     t.end();
    // });
    //
    // t.test('Path from l to a', t => {
    //     const start = "l";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'j', 'h', 'f', 'c', 'a'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from l to b', t => {
    //     const start = "l";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'j', 'h', 'f', 'c', 'b'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from l to c', t => {
    //     const start = "l";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'j', 'h', 'f', 'c'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from l to d', t => {
    //     const start = "l";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'd'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from l to e', t => {
    //     const start = "l";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'e'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from l to f', t => {
    //     const start = "l";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'j', 'h', 'f'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from l to g', t => {
    //     const start = "l";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'j', 'h', 'i', 'g'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from l to h', t => {
    //     const start = "l";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'j', 'h'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from l to i', t => {
    //     const start = "l";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'k', 'i'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from l to j', t => {
    //     const start = "l";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'j'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from l to k', t => {
    //     const start = "l";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'k'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from l to m', t => {
    //     const start = "l";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from l to n', t => {
    //     const start = "l";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'n'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from l to o', t => {
    //     const start = "l";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'o'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from l to p', t => {
    //     const start = "l";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'n', 'p'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from l to q', t => {
    //     const start = "l";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'o', 'q'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from l to r', t => {
    //     const start = "l";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'n', 'p', 'r'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from l to s', t => {
    //     const start = "l";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'o', 'q', 's'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from l to t', t => {
    //     const start = "l";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'n', 'p', 'r', 't'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from l to u', t => {
    //     const start = "l";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'o', 'q', 's', 'u'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from l to v', t => {
    //     const start = "l";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'n', 'p', 'r', 't', 'v'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from l to w', t => {
    //     const start = "l";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'o', 'q', 's', 'u', 'w'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from l to x', t => {
    //     const start = "l";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'n', 'p', 'r', 't', 'v', 'x'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from l to y', t => {
    //     const start = "l";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'o', 'q', 's', 'u', 'w', 'y'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from l to z', t => {
    //     const start = "l";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['l', 'm', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 32 });
    //     t.end();
    // });
    //
    // t.test('Path from m to a', t => {
    //     const start = "m";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'k', 'i', 'h', 'f', 'c', 'a'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from m to b', t => {
    //     const start = "m";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'k', 'i', 'h', 'f', 'c', 'b'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from m to c', t => {
    //     const start = "m";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'k', 'i', 'h', 'f', 'c'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from m to d', t => {
    //     const start = "m";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'd'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from m to e', t => {
    //     const start = "m";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'e'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from m to f', t => {
    //     const start = "m";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'h', 'f'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from m to g', t => {
    //     const start = "m";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'h', 'i', 'g'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from m to h', t => {
    //     const start = "m";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'h'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from m to i', t => {
    //     const start = "m";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'i'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from m to j', t => {
    //     const start = "m";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'l', 'j'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from m to k', t => {
    //     const start = "m";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'k'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from m to l', t => {
    //     const start = "m";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'l'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from m to n', t => {
    //     const start = "m";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'n'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from m to o', t => {
    //     const start = "m";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'o'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from m to p', t => {
    //     const start = "m";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'n', 'p'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from m to q', t => {
    //     const start = "m";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'o', 'q'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from m to r', t => {
    //     const start = "m";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'n', 'p', 'r'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from m to s', t => {
    //     const start = "m";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'o', 'q', 's'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from m to t', t => {
    //     const start = "m";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'n', 'p', 'r', 't'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from m to u', t => {
    //     const start = "m";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'o', 'q', 's', 'u'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from m to v', t => {
    //     const start = "m";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'n', 'p', 'r', 't', 'v'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from m to w', t => {
    //     const start = "m";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'o', 'q', 's', 'u', 'w'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from m to x', t => {
    //     const start = "m";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'n', 'p', 'r', 't', 'v', 'x'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from m to y', t => {
    //     const start = "m";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'o', 'q', 's', 'u', 'w', 'y'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from m to z', t => {
    //     const start = "m";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['m', 'n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 27 });
    //     t.end();
    // });
    //
    // t.test('Path from n to a', t => {
    //     const start = "n";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r', 't', 'v', 'x', 'z', 'a'], distance: 27 });
    //     t.end();
    // });
    //
    // t.test('Path from n to b', t => {
    //     const start = "n";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r', 't', 'v', 'x', 'z', 'a', 'b'], distance: 29 });
    //     t.end();
    // });
    //
    // t.test('Path from n to c', t => {
    //     const start = "n";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r', 't', 'v', 'x', 'z', 'a', 'c'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from n to d', t => {
    //     const start = "n";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'd'], distance: 24 });
    //     t.end();
    // });
    //
    // t.test('Path from n to e', t => {
    //     const start = "n";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'm', 'e'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from n to f', t => {
    //     const start = "n";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from n to g', t => {
    //     const start = "n";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'g'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from n to h', t => {
    //     const start = "n";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h'], distance: 24 });
    //     t.end();
    // });
    //
    // t.test('Path from n to i', t => {
    //     const start = "n";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'i'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from n to j', t => {
    //     const start = "n";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'm', 'l', 'j'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from n to k', t => {
    //     const start = "n";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'm', 'k'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from n to l', t => {
    //     const start = "n";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'm', 'l'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from n to m', t => {
    //     const start = "n";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'm'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from n to o', t => {
    //     const start = "n";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'o'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from n to p', t => {
    //     const start = "n";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from n to q', t => {
    //     const start = "n";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'o', 'q'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from n to r', t => {
    //     const start = "n";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from n to s', t => {
    //     const start = "n";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'o', 'q', 's'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from n to t', t => {
    //     const start = "n";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r', 't'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from n to u', t => {
    //     const start = "n";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'o', 'q', 's', 'u'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from n to v', t => {
    //     const start = "n";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r', 't', 'v'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from n to w', t => {
    //     const start = "n";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'o', 'q', 's', 'u', 'w'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from n to x', t => {
    //     const start = "n";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r', 't', 'v', 'x'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from n to y', t => {
    //     const start = "n";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'o', 'q', 's', 'u', 'w', 'y'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from n to z', t => {
    //     const start = "n";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['n', 'p', 'r', 't', 'v', 'x', 'z'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from o to a', t => {
    //     const start = "o";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a'], distance: 26 });
    //     t.end();
    // });
    //
    // t.test('Path from o to b', t => {
    //     const start = "o";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'b'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from o to c', t => {
    //     const start = "o";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'c'], distance: 24 });
    //     t.end();
    // });
    //
    // t.test('Path from o to d', t => {
    //     const start = "o";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'd'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from o to e', t => {
    //     const start = "o";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'e'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from o to f', t => {
    //     const start = "o";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from o to g', t => {
    //     const start = "o";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'g'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from o to h', t => {
    //     const start = "o";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from o to i', t => {
    //     const start = "o";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'i'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from o to j', t => {
    //     const start = "o";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from o to k', t => {
    //     const start = "o";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'k'], distance: 27 });
    //     t.end();
    // });
    //
    // t.test('Path from o to l', t => {
    //     const start = "o";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from o to m', t => {
    //     const start = "o";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm'], distance: 30 });
    //     t.end();
    // });
    //
    // t.test('Path from o to n', t => {
    //     const start = "o";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm', 'n'], distance: 33 });
    //     t.end();
    // });
    //
    // t.test('Path from o to p', t => {
    //     const start = "o";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 'p'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from o to q', t => {
    //     const start = "o";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from o to r', t => {
    //     const start = "o";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'r'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from o to s', t => {
    //     const start = "o";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from o to t', t => {
    //     const start = "o";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'r', 't'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from o to u', t => {
    //     const start = "o";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from o to v', t => {
    //     const start = "o";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'r', 't', 'v'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from o to w', t => {
    //     const start = "o";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from o to x', t => {
    //     const start = "o";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'r', 't', 'v', 'x'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from o to y', t => {
    //     const start = "o";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'u', 'w', 'y'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from o to z', t => {
    //     const start = "o";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['o', 'q', 's', 'r', 't', 'v', 'x', 'z'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from p to a', t => {
    //     const start = "p";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from p to b', t => {
    //     const start = "p";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'b'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from p to c', t => {
    //     const start = "p";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'c'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from p to d', t => {
    //     const start = "p";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'd'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from p to e', t => {
    //     const start = "p";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'e'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from p to f', t => {
    //     const start = "p";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from p to g', t => {
    //     const start = "p";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'g'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from p to h', t => {
    //     const start = "p";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from p to i', t => {
    //     const start = "p";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'i'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from p to j', t => {
    //     const start = "p";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from p to k', t => {
    //     const start = "p";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'k'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from p to l', t => {
    //     const start = "p";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'l'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from p to m', t => {
    //     const start = "p";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm'], distance: 24 });
    //     t.end();
    // });
    //
    // t.test('Path from p to n', t => {
    //     const start = "p";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm', 'n'], distance: 27 });
    //     t.end();
    // });
    //
    // t.test('Path from p to o', t => {
    //     const start = "p";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'q', 'o'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from p to q', t => {
    //     const start = "p";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'q'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from p to r', t => {
    //     const start = "p";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from p to s', t => {
    //     const start = "p";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'q', 's'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from p to t', t => {
    //     const start = "p";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from p to u', t => {
    //     const start = "p";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'q', 's', 'u'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from p to v', t => {
    //     const start = "p";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from p to w', t => {
    //     const start = "p";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'q', 's', 'u', 'w'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from p to x', t => {
    //     const start = "p";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from p to y', t => {
    //     const start = "p";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'q', 's', 'u', 'w', 'y'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from p to z', t => {
    //     const start = "p";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['p', 'r', 't', 'v', 'x', 'z'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from q to a', t => {
    //     const start = "q";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from q to b', t => {
    //     const start = "q";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'b'], distance: 27 });
    //     t.end();
    // });
    //
    // t.test('Path from q to c', t => {
    //     const start = "q";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'c'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from q to d', t => {
    //     const start = "q";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'd'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from q to e', t => {
    //     const start = "q";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'e'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from q to f', t => {
    //     const start = "q";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from q to g', t => {
    //     const start = "q";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'g'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from q to h', t => {
    //     const start = "q";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from q to i', t => {
    //     const start = "q";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'i'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from q to j', t => {
    //     const start = "q";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j'], distance: 24 });
    //     t.end();
    // });
    //
    // t.test('Path from q to k', t => {
    //     const start = "q";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'k'], distance: 26 });
    //     t.end();
    // });
    //
    // t.test('Path from q to l', t => {
    //     const start = "q";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l'], distance: 27 });
    //     t.end();
    // });
    //
    // t.test('Path from q to m', t => {
    //     const start = "q";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm'], distance: 29 });
    //     t.end();
    // });
    //
    // t.test('Path from q to n', t => {
    //     const start = "q";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm', 'n'], distance: 32 });
    //     t.end();
    // });
    //
    // t.test('Path from q to o', t => {
    //     const start = "q";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 'o'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from q to p', t => {
    //     const start = "q";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 'p'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from q to r', t => {
    //     const start = "q";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'r'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from q to s', t => {
    //     const start = "q";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from q to t', t => {
    //     const start = "q";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'r', 't'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from q to u', t => {
    //     const start = "q";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from q to v', t => {
    //     const start = "q";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'r', 't', 'v'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from q to w', t => {
    //     const start = "q";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from q to x', t => {
    //     const start = "q";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'r', 't', 'v', 'x'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from q to y', t => {
    //     const start = "q";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'u', 'w', 'y'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from q to z', t => {
    //     const start = "q";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['q', 's', 'r', 't', 'v', 'x', 'z'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from r to a', t => {
    //     const start = "r";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from r to b', t => {
    //     const start = "r";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'b'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from r to c', t => {
    //     const start = "r";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'c'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from r to d', t => {
    //     const start = "r";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'c', 'd'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from r to e', t => {
    //     const start = "r";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'e'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from r to f', t => {
    //     const start = "r";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'c', 'f'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from r to g', t => {
    //     const start = "r";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'g'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from r to h', t => {
    //     const start = "r";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from r to i', t => {
    //     const start = "r";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'i'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from r to j', t => {
    //     const start = "r";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from r to k', t => {
    //     const start = "r";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'k'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from r to l', t => {
    //     const start = "r";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'l'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from r to m', t => {
    //     const start = "r";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from r to n', t => {
    //     const start = "r";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm', 'n'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from r to o', t => {
    //     const start = "r";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z', 'a', 'q', 'o'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from r to p', t => {
    //     const start = "r";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 'p'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from r to q', t => {
    //     const start = "r";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 's', 'q'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from r to s', t => {
    //     const start = "r";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 's'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from r to t', t => {
    //     const start = "r";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from r to u', t => {
    //     const start = "r";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 's', 'u'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from r to v', t => {
    //     const start = "r";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from r to w', t => {
    //     const start = "r";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 's', 'u', 'w'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from r to x', t => {
    //     const start = "r";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from r to y', t => {
    //     const start = "r";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 's', 'u', 'w', 'y'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from r to z', t => {
    //     const start = "r";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['r', 't', 'v', 'x', 'z'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from s to a', t => {
    //     const start = "s";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a'], distance: 24 });
    //     t.end();
    // });
    //
    // t.test('Path from s to b', t => {
    //     const start = "s";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'b'], distance: 26 });
    //     t.end();
    // });
    //
    // t.test('Path from s to c', t => {
    //     const start = "s";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'c'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from s to d', t => {
    //     const start = "s";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'c', 'd'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from s to e', t => {
    //     const start = "s";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'e'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from s to f', t => {
    //     const start = "s";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'c', 'f'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from s to g', t => {
    //     const start = "s";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'g'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from s to h', t => {
    //     const start = "s";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from s to i', t => {
    //     const start = "s";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'i'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from s to j', t => {
    //     const start = "s";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from s to k', t => {
    //     const start = "s";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'k'], distance: 25 });
    //     t.end();
    // });
    //
    // t.test('Path from s to l', t => {
    //     const start = "s";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l'], distance: 26 });
    //     t.end();
    // });
    //
    // t.test('Path from s to m', t => {
    //     const start = "s";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm'], distance: 28 });
    //     t.end();
    // });
    //
    // t.test('Path from s to n', t => {
    //     const start = "s";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm', 'n'], distance: 31 });
    //     t.end();
    // });
    //
    // t.test('Path from s to o', t => {
    //     const start = "s";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'q', 'o'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from s to p', t => {
    //     const start = "s";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'q', 'p'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from s to q', t => {
    //     const start = "s";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'q'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from s to r', t => {
    //     const start = "s";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'r'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from s to t', t => {
    //     const start = "s";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'r', 't'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from s to u', t => {
    //     const start = "s";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from s to v', t => {
    //     const start = "s";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'r', 't', 'v'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from s to w', t => {
    //     const start = "s";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from s to x', t => {
    //     const start = "s";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'r', 't', 'v', 'x'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from s to y', t => {
    //     const start = "s";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'u', 'w', 'y'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from s to z', t => {
    //     const start = "s";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['s', 'r', 't', 'v', 'x', 'z'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from t to a', t => {
    //     const start = "t";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from t to b', t => {
    //     const start = "t";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'b'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from t to c', t => {
    //     const start = "t";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'c'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from t to d', t => {
    //     const start = "t";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'c', 'd'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from t to e', t => {
    //     const start = "t";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'c', 'f', 'e'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from t to f', t => {
    //     const start = "t";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'c', 'f'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from t to g', t => {
    //     const start = "t";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'c', 'f', 'g'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from t to h', t => {
    //     const start = "t";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'c', 'f', 'h'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from t to i', t => {
    //     const start = "t";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'i'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from t to j', t => {
    //     const start = "t";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from t to k', t => {
    //     const start = "t";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'k'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from t to l', t => {
    //     const start = "t";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'l'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from t to m', t => {
    //     const start = "t";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from t to n', t => {
    //     const start = "t";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm', 'n'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from t to o', t => {
    //     const start = "t";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z', 'a', 'q', 'o'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from t to p', t => {
    //     const start = "t";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'p'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from t to q', t => {
    //     const start = "t";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'p', 'q'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from t to r', t => {
    //     const start = "t";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'r'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from t to s', t => {
    //     const start = "t";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'r', 's'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from t to u', t => {
    //     const start = "t";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'u'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from t to v', t => {
    //     const start = "t";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from t to w', t => {
    //     const start = "t";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'w'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from t to x', t => {
    //     const start = "t";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from t to y', t => {
    //     const start = "t";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'w', 'y'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from t to z', t => {
    //     const start = "t";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['t', 'v', 'x', 'z'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from u to a', t => {
    //     const start = "u";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from u to b', t => {
    //     const start = "u";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'b'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from u to c', t => {
    //     const start = "u";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'c'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from u to d', t => {
    //     const start = "u";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'c', 'd'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from u to e', t => {
    //     const start = "u";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'c', 'f', 'e'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from u to f', t => {
    //     const start = "u";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'c', 'f'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from u to g', t => {
    //     const start = "u";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'c', 'f', 'g'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from u to h', t => {
    //     const start = "u";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'c', 'f', 'h'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from u to i', t => {
    //     const start = "u";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'i'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from u to j', t => {
    //     const start = "u";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from u to k', t => {
    //     const start = "u";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'k'], distance: 21 });
    //     t.end();
    // });
    //
    // t.test('Path from u to l', t => {
    //     const start = "u";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l'], distance: 22 });
    //     t.end();
    // });
    //
    // t.test('Path from u to m', t => {
    //     const start = "u";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm'], distance: 24 });
    //     t.end();
    // });
    //
    // t.test('Path from u to n', t => {
    //     const start = "u";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm', 'n'], distance: 27 });
    //     t.end();
    // });
    //
    // t.test('Path from u to o', t => {
    //     const start = "u";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'o'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from u to p', t => {
    //     const start = "u";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'p'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from u to q', t => {
    //     const start = "u";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'q'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from u to r', t => {
    //     const start = "u";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 's', 'r'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from u to s', t => {
    //     const start = "u";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 's'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from u to t', t => {
    //     const start = "u";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'v', 't'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from u to v', t => {
    //     const start = "u";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'v'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from u to w', t => {
    //     const start = "u";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from u to x', t => {
    //     const start = "u";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'v', 'x'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from u to y', t => {
    //     const start = "u";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'w', 'y'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from u to z', t => {
    //     const start = "u";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['u', 'v', 'x', 'z'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from v to a', t => {
    //     const start = "v";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from v to b', t => {
    //     const start = "v";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'b'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from v to c', t => {
    //     const start = "v";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'c'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from v to d', t => {
    //     const start = "v";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'c', 'd'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from v to e', t => {
    //     const start = "v";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'c', 'f', 'e'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from v to f', t => {
    //     const start = "v";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'c', 'f'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from v to g', t => {
    //     const start = "v";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'c', 'f', 'g'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from v to h', t => {
    //     const start = "v";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'c', 'f', 'h'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from v to i', t => {
    //     const start = "v";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'c', 'f', 'h', 'i'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from v to j', t => {
    //     const start = "v";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'c', 'f', 'h', 'j'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from v to k', t => {
    //     const start = "v";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'k'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from v to l', t => {
    //     const start = "v";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'l'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from v to m', t => {
    //     const start = "v";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from v to n', t => {
    //     const start = "v";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm', 'n'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from v to o', t => {
    //     const start = "v";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'q', 'o'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from v to p', t => {
    //     const start = "v";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'p'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from v to q', t => {
    //     const start = "v";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'q'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from v to r', t => {
    //     const start = "v";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'r'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from v to s', t => {
    //     const start = "v";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 't', 'r', 's'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from v to t', t => {
    //     const start = "v";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 't'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from v to u', t => {
    //     const start = "v";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'u'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from v to w', t => {
    //     const start = "v";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'w'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from v to x', t => {
    //     const start = "v";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from v to y', t => {
    //     const start = "v";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'w', 'y'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from v to z', t => {
    //     const start = "v";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['v', 'x', 'z'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from w to a', t => {
    //     const start = "w";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from w to b', t => {
    //     const start = "w";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'b'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from w to c', t => {
    //     const start = "w";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'c'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from w to d', t => {
    //     const start = "w";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'c', 'd'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from w to e', t => {
    //     const start = "w";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'c', 'f', 'e'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from w to f', t => {
    //     const start = "w";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'c', 'f'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from w to g', t => {
    //     const start = "w";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'c', 'f', 'g'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from w to h', t => {
    //     const start = "w";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'c', 'f', 'h'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from w to i', t => {
    //     const start = "w";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'c', 'f', 'h', 'i'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from w to j', t => {
    //     const start = "w";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'c', 'f', 'h', 'j'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from w to k', t => {
    //     const start = "w";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'k'], distance: 17 });
    //     t.end();
    // });
    //
    // t.test('Path from w to l', t => {
    //     const start = "w";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l'], distance: 18 });
    //     t.end();
    // });
    //
    // t.test('Path from w to m', t => {
    //     const start = "w";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm'], distance: 20 });
    //     t.end();
    // });
    //
    // t.test('Path from w to n', t => {
    //     const start = "w";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm', 'n'], distance: 23 });
    //     t.end();
    // });
    //
    // t.test('Path from w to o', t => {
    //     const start = "w";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'o'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from w to p', t => {
    //     const start = "w";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'p'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from w to q', t => {
    //     const start = "w";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'p', 'q'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from w to r', t => {
    //     const start = "w";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'v', 'r'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from w to s', t => {
    //     const start = "w";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'v', 't', 'r', 's'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from w to t', t => {
    //     const start = "w";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'v', 't'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from w to u', t => {
    //     const start = "w";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'u'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from w to v', t => {
    //     const start = "w";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'v'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from w to x', t => {
    //     const start = "w";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'v', 'x'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from w to y', t => {
    //     const start = "w";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from w to z', t => {
    //     const start = "w";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['w', 'y', 'z'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from x to a', t => {
    //     const start = "x";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from x to b', t => {
    //     const start = "x";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'b'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from x to c', t => {
    //     const start = "x";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'c'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from x to d', t => {
    //     const start = "x";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'c', 'd'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from x to e', t => {
    //     const start = "x";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'c', 'f', 'e'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from x to f', t => {
    //     const start = "x";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'c', 'f'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from x to g', t => {
    //     const start = "x";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'c', 'f', 'g'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from x to h', t => {
    //     const start = "x";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'c', 'f', 'h'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from x to i', t => {
    //     const start = "x";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'c', 'f', 'h', 'i'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from x to j', t => {
    //     const start = "x";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'c', 'f', 'h', 'j'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from x to k', t => {
    //     const start = "x";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'c', 'f', 'h', 'j', 'k'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from x to l', t => {
    //     const start = "x";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'c', 'f', 'h', 'j', 'l'], distance: 14 });
    //     t.end();
    // });
    //
    // t.test('Path from x to m', t => {
    //     const start = "x";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from x to n', t => {
    //     const start = "x";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm', 'n'], distance: 19 });
    //     t.end();
    // });
    //
    // t.test('Path from x to o', t => {
    //     const start = "x";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'o'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from x to p', t => {
    //     const start = "x";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'o', 'p'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from x to q', t => {
    //     const start = "x";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'o', 'q'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from x to r', t => {
    //     const start = "x";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'o', 'r'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from x to s', t => {
    //     const start = "x";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'o', 'r', 's'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from x to t', t => {
    //     const start = "x";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'v', 't'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from x to u', t => {
    //     const start = "x";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'v', 'u'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from x to v', t => {
    //     const start = "x";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'v'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from x to w', t => {
    //     const start = "x";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'v', 'w'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from x to y', t => {
    //     const start = "x";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z', 'y'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from x to z', t => {
    //     const start = "x";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['x', 'z'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from y to a', t => {
    //     const start = "y";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from y to b', t => {
    //     const start = "y";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'b'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from y to c', t => {
    //     const start = "y";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'c'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from y to d', t => {
    //     const start = "y";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'c', 'd'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from y to e', t => {
    //     const start = "y";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'c', 'f', 'e'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from y to f', t => {
    //     const start = "y";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'c', 'f'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from y to g', t => {
    //     const start = "y";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'c', 'f', 'g'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from y to h', t => {
    //     const start = "y";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'c', 'f', 'h'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from y to i', t => {
    //     const start = "y";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'c', 'f', 'h', 'i'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from y to j', t => {
    //     const start = "y";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'c', 'f', 'h', 'j'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from y to k', t => {
    //     const start = "y";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'c', 'f', 'h', 'j', 'k'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from y to l', t => {
    //     const start = "y";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'c', 'f', 'h', 'j', 'l'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from y to m', t => {
    //     const start = "y";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from y to n', t => {
    //     const start = "y";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'a', 'c', 'f', 'h', 'j', 'l', 'm', 'n'], distance: 15 });
    //     t.end();
    // });
    //
    // t.test('Path from y to o', t => {
    //     const start = "y";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'o'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from y to p', t => {
    //     const start = "y";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'o', 'p'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from y to q', t => {
    //     const start = "y";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'o', 'q'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from y to r', t => {
    //     const start = "y";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'o', 'r'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from y to s', t => {
    //     const start = "y";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'o', 'r', 's'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from y to t', t => {
    //     const start = "y";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'o', 'r', 't'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from y to u', t => {
    //     const start = "y";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'o', 'r', 'u'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from y to v', t => {
    //     const start = "y";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'o', 'r', 'v'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from y to w', t => {
    //     const start = "y";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'o', 'r', 'v', 'w'], distance: 12 });
    //     t.end();
    // });
    //
    // t.test('Path from y to x', t => {
    //     const start = "y";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z', 'x'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from y to z', t => {
    //     const start = "y";
    //     const end = "z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['y', 'z'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from z to a', t => {
    //     const start = "z";
    //     const end = "a";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a'], distance: 7 });
    //     t.end();
    // });
    //
    // t.test('Path from z to b', t => {
    //     const start = "z";
    //     const end = "b";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'b'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from z to c', t => {
    //     const start = "z";
    //     const end = "c";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'c'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from z to d', t => {
    //     const start = "z";
    //     const end = "d";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'c', 'd'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from z to e', t => {
    //     const start = "z";
    //     const end = "e";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'c', 'f', 'e'], distance: 1 });
    //     t.end();
    // });
    //
    // t.test('Path from z to f', t => {
    //     const start = "z";
    //     const end = "f";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'c', 'f'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from z to g', t => {
    //     const start = "z";
    //     const end = "g";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'c', 'f', 'g'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from z to h', t => {
    //     const start = "z";
    //     const end = "h";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'c', 'f', 'h'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from z to i', t => {
    //     const start = "z";
    //     const end = "i";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'c', 'f', 'h', 'i'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from z to j', t => {
    //     const start = "z";
    //     const end = "j";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'c', 'f', 'h', 'j'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from z to k', t => {
    //     const start = "z";
    //     const end = "k";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'c', 'f', 'h', 'j', 'k'], distance: 10 });
    //     t.end();
    // });
    //
    // t.test('Path from z to l', t => {
    //     const start = "z";
    //     const end = "l";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'c', 'f', 'h', 'j', 'l'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from z to m', t => {
    //     const start = "z";
    //     const end = "m";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'c', 'f', 'h', 'j', 'l', 'm'], distance: 13 });
    //     t.end();
    // });
    //
    // t.test('Path from z to n', t => {
    //     const start = "z";
    //     const end = "n";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'a', 'c', 'f', 'h', 'j', 'l', 'm', 'n'], distance: 16 });
    //     t.end();
    // });
    //
    // t.test('Path from z to o', t => {
    //     const start = "z";
    //     const end = "o";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'o'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from z to p', t => {
    //     const start = "z";
    //     const end = "p";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'o', 'p'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from z to q', t => {
    //     const start = "z";
    //     const end = "q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'o', 'q'], distance: 3 });
    //     t.end();
    // });
    //
    // t.test('Path from z to r', t => {
    //     const start = "z";
    //     const end = "r";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'o', 'r'], distance: 4 });
    //     t.end();
    // });
    //
    // t.test('Path from z to s', t => {
    //     const start = "z";
    //     const end = "s";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'o', 'r', 's'], distance: 5 });
    //     t.end();
    // });
    //
    // t.test('Path from z to t', t => {
    //     const start = "z";
    //     const end = "t";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'o', 'r', 't'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from z to u', t => {
    //     const start = "z";
    //     const end = "u";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'o', 'r', 'u'], distance: 8 });
    //     t.end();
    // });
    //
    // t.test('Path from z to v', t => {
    //     const start = "z";
    //     const end = "v";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'o', 'r', 'v'], distance: 9 });
    //     t.end();
    // });
    //
    // t.test('Path from z to w', t => {
    //     const start = "z";
    //     const end = "w";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'o', 'r', 'v', 'w'], distance: 11 });
    //     t.end();
    // });
    //
    // t.test('Path from z to x', t => {
    //     const start = "z";
    //     const end = "x";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'x'], distance: 2 });
    //     t.end();
    // });
    //
    // t.test('Path from z to y', t => {
    //     const start = "z";
    //     const end = "y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['z', 'y'], distance: 1 });
    //     t.end();
    // });
    t.end();
});