import t from 'tap';
import { getDijkstraMinPath } from './dijkstra';

t.test('Dijkstra Algorithm', t => {
    const distancesGraph = {
        A: { B: 1, C: 4, D: 6, Y: 8 },
        B: { A: 1, C: 2, D: 4, E: 1 },
        C: { A: 4, B: 2, E: 2, F: 3 , Y: 2},
        D: { A: 6, B: 4, E: 4, F: 1, G: 7, U: 6 },
        E: { B: 1, C: 2, D: 4, F: 3, G: 6 },
        F: { A: 8, D: 1, E: 3, G: 2, H: 5, S: 1 },
        G: { D: 7, E: 6, F: 2, H: 4, I: 3 },
        H: { F: 5, G: 4, I: 2, J: 6 , Q: 4, V: 7},
        I: { G: 3, H: 2, J: 4, K: 5 },
        J: { H: 6, I: 4, K: 3, L: 7, Q: 4 },
        K: { I: 5, J: 3, L: 2, M: 4 },
        L: { J: 7, K: 2, M: 5, N: 6 },
        M: { K: 4, L: 5, N: 3, O: 2 },
        N: { L: 6, M: 3, O: 4, P: 5 },
        O: { M: 2, N: 4, P: 6, Q: 3 },
        P: { N: 5, O: 6, Q: 2, R: 4 },
        Q: { H: 4, J: 4, O: 3, P: 2, R: 5, S: 6 },
        R: { P: 4, Q: 5, S: 3, T: 2 },
        S: { F: 1, Q: 6, R: 3, T: 5, U: 4 },
        T: { R: 2, S: 5, U: 3, V: 6 },
        U: { D: 6, S: 4, T: 3, V: 2, W: 5 },
        V: { H: 7, T: 6, U: 2, W: 4, X: 3 },
        W: { U: 5, V: 4, X: 2, Y: 3 },
        X: { V: 3, W: 2, Y: 5, Z: 4 },
        Y: { A: 8, C: 2, W: 3, X: 5, Z: 2 },
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

    t.test('Path from A to L', t => {
        end = "L";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G', 'I', 'K', 'L'], distance: 17 });
        t.end();
    });

    t.test('Path from A to M', t => {
        end = "M";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G', 'I', 'K', 'M'], distance: 19 });
        t.end();
    });

    t.test('Path from A to N', t => {
        end = "N";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F', 'G', 'I', 'K', 'M', 'N'], distance: 22 });
        t.end();
    });

    // t.test('Path from A to O', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B', 'E', 'F', 'H', 'Q', 'O'], distance: 17 });
    //     t.end();
    // });

    // t.test('Path from A to P', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'Q', 'P'], distance: 14 });
    //     t.end();
    // });

    // t.test('Path from A to Q', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'Q'], distance: 14 });
    //     t.end();
    // });

    // t.test('Path from A to R', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'R'], distance: 9 });
    //     t.end();
    // });

    t.test('Path from A to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S'], distance: 6 });
        t.end();
    });

    t.test('Path from A to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'T'], distance: 11 });
        t.end();
    });

    t.test('Path from A to U', t => {
        end = "U";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'U'], distance: 10 });
        t.end();
    });

    t.test('Path from A to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'E', 'F', 'S', 'U', 'V'], distance: 12 });
        t.end();
    });

    t.test('Path from A to W', t => {
        end = "W";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'C', 'Y', 'W'], distance: 8 });
        t.end();
    });

    t.test('Path from A to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'C', 'Y', 'X'], distance: 10 });
        t.end();
    });

    t.test('Path from A to Y', t => {
        end = "Y";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'C', 'Y'], distance: 5 });
        t.end();
    });

    t.test('Path from A to Z', t => {
        end = "Z";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['A', 'B', 'C', 'Y', 'Z'], distance: 7 });
        t.end();
    });
    // =================================================================================================================


    // Node B ==========================================================================================================
    start = "B";
    // t.test('Path from A to B', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    t.test('Path from B to C', t => {
        end = "C";
        const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'C'], distance: 2 });
        t.end();
    });

    t.test('Path from B to D', t => {
        end = "D";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'D'], distance: 4 });
        t.end();
    });

    t.test('Path from B to E', t => {
        end = "E";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E'], distance: 1 });
        t.end();
    });

    t.test('Path from B to F', t => {
        end = "F";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F'], distance: 4 });
        t.end();
    });

    t.test('Path from B to G', t => {
        end = "G";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F', 'G'], distance: 6 });
        t.end();
    });

    t.test('Path from B to H', t => {
        end = "H";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F', 'H'], distance: 9 });
        t.end();
    });

    t.test('Path from B to I', t => {
        end = "I";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F', 'G', 'I'], distance: 9 });
        t.end();
    });

    t.test('Path from B to J', t => {
        end = "J";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F', 'G', 'I', 'J'], distance: 13 });
        t.end();
    });

    t.test('Path from B to K', t => {
        end = "K";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F', 'G', 'I', 'K'], distance: 14 });
        t.end();
    });

    t.test('Path from B to L', t => {
        end = "L";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F', 'G', 'I', 'K', 'L'], distance: 16 });
        t.end();
    });

    t.test('Path from B to M', t => {
        end = "M";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F', 'G', 'I', 'K', 'M'], distance: 18 });
        t.end();
    });

    t.test('Path from B to N', t => {
        end = "N";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F', 'G', 'I', 'K', 'M', 'N'], distance: 21 });
        t.end();
    });

    // t.test('Path from B to O', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'E', 'F', 'H', 'Q', 'O'], distance: 16 });
    //     t.end();
    // });

    // t.test('Path from B to P', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'E', 'F', 'S', 'Q', 'P'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from B to Q', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'E', 'F', 'S', 'Q'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from B to R', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'E', 'F', 'S', 'R'], distance: 8 });
    //     t.end();
    // });

    t.test('Path from B to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F', 'S'], distance: 5 });
        t.end();
    });

    t.test('Path from B to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F', 'S', 'T'], distance: 10 });
        t.end();
    });

    t.test('Path from B to U', t => {
        end = "U";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F', 'S', 'U'], distance: 9 });
        t.end();
    });

    t.test('Path from B to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'E', 'F', 'S', 'U', 'V'], distance: 11 });
        t.end();
    });

    t.test('Path from B to W', t => {
        end = "W";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'C', 'Y', 'W'], distance: 7 });
        t.end();
    });

    t.test('Path from B to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'C', 'Y', 'X'], distance: 9 });
        t.end();
    });

    t.test('Path from B to Y', t => {
        end = "Y";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'C', 'Y'], distance: 4 });
        t.end();
    });

    t.test('Path from B to Z', t => {
        end = "Z";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['B', 'C', 'Y', 'Z'], distance: 6 });
        t.end();
    });
    // =================================================================================================================


    // Node C ==========================================================================================================
    start = "C";
    // t.test('Path from C to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from C to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    t.test('Path from C to D', t => {
        end = "D";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
        t.end();
    });

    t.test('Path from C to E', t => {
        end = "E";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'E'], distance: 2 });
        t.end();
    });

    t.test('Path from C to F', t => {
        end = "F";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F'], distance: 3 });
        t.end();
    });

    t.test('Path from C to G', t => {
        end = "G";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'G'], distance: 5 });
        t.end();
    });

    t.test('Path from C to H', t => {
        end = "H";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'H'], distance: 8 });
        t.end();
    });

    t.test('Path from C to I', t => {
        end = "I";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'G', 'I'], distance: 8 });
        t.end();
    });

    t.test('Path from C to J', t => {
        end = "J";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'G', 'I', 'J'], distance: 12 });
        t.end();
    });

    t.test('Path from C to K', t => {
        end = "K";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'G', 'I', 'K'], distance: 13 });
        t.end();
    });

    t.test('Path from C to L', t => {
        end = "L";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'G', 'I', 'K', 'L'], distance: 15 });
        t.end();
    });

    t.test('Path from C to M', t => {
        end = "M";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'G', 'I', 'K', 'M'], distance: 17 });
        t.end();
    });

    t.test('Path from C to N', t => {
        end = "N";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'G', 'I', 'K', 'M', 'N'], distance: 20 });
        t.end();
    });

    // t.test('Path from C to O', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'H', 'Q', 'O'], distance: 16 });
    //     t.end();
    // });

    // t.test('Path from C to P', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'S', 'Q', 'P'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from C to Q', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'S', 'Q'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from C to R', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'S', 'R'], distance: 8 });
    //     t.end();
    // });

    t.test('Path from C to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'S'], distance: 4 });
        t.end();
    });

    t.test('Path from C to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'S', 'T'], distance: 9 });
        t.end();
    });

    t.test('Path from C to U', t => {
        end = "U";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'S', 'U'], distance: 8 });
        t.end();
    });

    t.test('Path from C to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'F', 'S', 'U', 'V'], distance: 10 });
        t.end();
    });

    t.test('Path from C to W', t => {
        end = "W";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'Y', 'W'], distance: 5 });
        t.end();
    });

    t.test('Path from C to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'Y', 'X'], distance: 7 });
        t.end();
    });

    t.test('Path from C to Y', t => {
        end = "Y";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'Y'], distance: 2 });
        t.end();
    });

    t.test('Path from C to Z', t => {
        end = "Z";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['C', 'Y', 'Z'], distance: 4 });
        t.end();
    });
    // =================================================================================================================


    // Node D ==========================================================================================================
    start = "D";
    // t.test('Path from D to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from D to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });
    // t.test('Path from D to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    t.test('Path from D to E', t => {
        end = "E";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'E'], distance: 4 });
        t.end();
    });

    t.test('Path from D to F', t => {
        end = "F";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'F'], distance: 1 });
        t.end();
    });

    t.test('Path from D to G', t => {
        end = "G";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'F', 'G'], distance: 3 });
        t.end();
    });

    t.test('Path from D to H', t => {
        end = "H";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'F', 'H'], distance: 6 });
        t.end();
    });

    t.test('Path from D to I', t => {
        end = "I";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'F', 'G', 'I'], distance: 6 });
        t.end();
    });

    t.test('Path from D to J', t => {
        end = "J";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'F', 'G', 'I', 'J'], distance: 10 });
        t.end();
    });

    t.test('Path from D to K', t => {
        end = "K";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'F', 'G', 'I', 'K'], distance: 11 });
        t.end();
    });

    t.test('Path from D to L', t => {
        end = "L";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'F', 'G', 'I', 'K', 'L'], distance: 13 });
        t.end();
    });

    t.test('Path from D to M', t => {
        end = "M";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'F', 'G', 'I', 'K', 'M'], distance: 15 });
        t.end();
    });

    t.test('Path from D to N', t => {
        end = "N";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'F', 'G', 'I', 'K', 'M', 'N'], distance: 18 });
        t.end();
    });

    // t.test('Path from D to O', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'H', 'Q', 'O'], distance: 16 });
    //     t.end();
    // });

    // t.test('Path from D to P', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'S', 'Q', 'P'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from D to Q', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'S', 'Q'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from D to R', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'S', 'R'], distance: 8 });
    //     t.end();
    // });

    t.test('Path from D to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'F', 'S'], distance: 2 });
        t.end();
    });

    t.test('Path from D to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'F', 'S', 'T'], distance: 7 });
        t.end();
    });

    t.test('Path from D to U', t => {
        end = "U";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'U'], distance: 6 });
        t.end();
    });

    t.test('Path from D to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'U', 'V'], distance: 8 });
        t.end();
    });

    // t.test('Path from D to W', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'F', 'C', 'Y', 'W'], distance: 11 });
    //     t.end();
    // });

    t.test('Path from D to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['D', 'U', 'V', 'X'], distance: 11 });
        t.end();
    });

    // t.test('Path from D to Y', t => {
    //     end = "Y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'F', 'C', 'Y'], distance: 6 });
    //     t.end();
    // });

    // t.test('Path from D to Z', t => {
    //     end = "Z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'F', 'C', 'Y', 'Z'], distance: 8 });
    //     t.end();
    // });
    // =================================================================================================================


    // Node E ==========================================================================================================
    start = "E";
    // t.test('Path from E to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from E to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from E to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from E to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    t.test('Path from E to F', t => {
        end = "F";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['E', 'F'], distance: 3 });
        t.end();
    });

    t.test('Path from E to G', t => {
        end = "G";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['E', 'F', 'G'], distance: 5 });
        t.end();
    });

    t.test('Path from E to H', t => {
        end = "H";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['E', 'F', 'H'], distance: 8 });
        t.end();
    });

    t.test('Path from E to I', t => {
        end = "I";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['E', 'F', 'G', 'I'], distance: 8 });
        t.end();
    });

    t.test('Path from E to J', t => {
        end = "J";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['E', 'F', 'G', 'I', 'J'], distance: 12 });
        t.end();
    });

    t.test('Path from E to K', t => {
        end = "K";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['E', 'F', 'G', 'I', 'K'], distance: 13 });
        t.end();
    });

    t.test('Path from E to L', t => {
        end = "L";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['E', 'F', 'G', 'I', 'K', 'L'], distance: 15 });
        t.end();
    });

    // t.test('Path from E to M', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'S', 'Q', 'O', 'M'], distance: 15 });
    //     t.end();
    // });

    // t.test('Path from E to N', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'S', 'Q', 'O', 'N'], distance: 17 });
    //     t.end();
    // });

    // t.test('Path from E to O', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'H', 'Q', 'O'], distance: 16 });
    //     t.end();
    // });

    // t.test('Path from E to P', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'S', 'Q', 'P'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from E to Q', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'S', 'Q'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from E to R', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'S', 'R'], distance: 8 });
    //     t.end();
    // });

    t.test('Path from E to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['E', 'F', 'S'], distance: 4 });
        t.end();
    });

    t.test('Path from E to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['E', 'F', 'S', 'T'], distance: 9 });
        t.end();
    });

    t.test('Path from E to U', t => {
        end = "U";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['E', 'F', 'S', 'U'], distance: 8 });
        t.end();
    });

    t.test('Path from E to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['E', 'F', 'S', 'U', 'V'], distance: 10 });
        t.end();
    });

    // t.test('Path from E to W', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'W'], distance: 11 });
    //     t.end();
    // });

    // t.test('Path from E to X', t => {
    //     end = "X";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'X'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from E to Y', t => {
    //     end = "Y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y'], distance: 8 });
    //     t.end();
    // });

    // t.test('Path from E to Z', t => {
    //     end = "Z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'Z'], distance: 10 });
    //     t.end();
    // });
    // =================================================================================================================


    // Node F ==========================================================================================================
    start = "F";
    // t.test('Path from F to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from F to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from F to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from F to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from F to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    t.test('Path from F to G', t => {
        end = "G";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['F', 'G'], distance: 2 });
        t.end();
    });

    t.test('Path from F to H', t => {
        end = "H";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['F', 'H'], distance: 5 });
        t.end();
    });

    t.test('Path from F to I', t => {
        end = "I";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['F', 'G', 'I'], distance: 5 });
        t.end();
    });

    t.test('Path from F to J', t => {
        end = "J";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['F', 'G', 'I', 'J'], distance: 9 });
        t.end();
    });

    t.test('Path from F to K', t => {
        end = "K";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['F', 'G', 'I', 'K'], distance: 10 });
        t.end();
    });

    t.test('Path from F to L', t => {
        end = "L";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['F', 'G', 'I', 'K', 'L'], distance: 12 });
        t.end();
    });

    // t.test('Path from F to M', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'S', 'Q', 'O', 'M'], distance: 15 });
    //     t.end();
    // });

    // t.test('Path from F to N', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'S', 'Q', 'O', 'N'], distance: 17 });
    //     t.end();
    // });

    // t.test('Path from F to O', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'H', 'Q', 'O'], distance: 16 });
    //     t.end();
    // });

    // t.test('Path from F to P', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'S', 'Q', 'P'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from F to Q', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'S', 'Q'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from F to R', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'S', 'R'], distance: 8 });
    //     t.end();
    // });

    t.test('Path from F to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['F', 'S'], distance: 1 });
        t.end();
    });

    t.test('Path from F to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['F', 'S', 'T'], distance: 6 });
        t.end();
    });

    t.test('Path from F to U', t => {
        end = "U";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['F', 'S', 'U'], distance: 5 });
        t.end();
    });

    t.test('Path from F to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['F', 'S', 'U', 'V'], distance: 7 });
        t.end();
    });

    // t.test('Path from F to W', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'W'], distance: 11 });
    //     t.end();
    // });

    // t.test('Path from F to X', t => {
    //     end = "X";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'X'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from F to Y', t => {
    //     end = "Y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y'], distance: 8 });
    //     t.end();
    // });

    // t.test('Path from F to Z', t => {
    //     end = "Z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'Z'], distance: 10 });
    //     t.end();
    // });
    // =================================================================================================================


    // Node G ==========================================================================================================
    start = "G";
    // t.test('Path from G to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from G to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from G to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from G to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from G to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from G to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    t.test('Path from G to H', t => {
        end = "H";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['G', 'H'], distance: 4 });
        t.end();
    });

    t.test('Path from G to I', t => {
        end = "I";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['G', 'I'], distance: 3 });
        t.end();
    });

    t.test('Path from G to J', t => {
        end = "J";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['G', 'I', 'J'], distance: 7 });
        t.end();
    });

    t.test('Path from G to K', t => {
        end = "K";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['G', 'I', 'K'], distance: 8 });
        t.end();
    });

    t.test('Path from G to L', t => {
        end = "L";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['G', 'I', 'K', 'L'], distance: 10 });
        t.end();
    });

    // t.test('Path from G to M', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'S', 'Q', 'O', 'M'], distance: 15 });
    //     t.end();
    // });

    // t.test('Path from G to N', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'S', 'Q', 'O', 'N'], distance: 17 });
    //     t.end();
    // });

    t.test('Path from G to O', t => {
        end = "O";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['G', 'H', 'Q', 'O'], distance: 11 });
        t.end();
    });

    t.test('Path from G to P', t => {
        end = "P";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['G', 'H', 'Q', 'P'], distance: 10 });
        t.end();
    });
    t.test('Path from G to Q', t => {
        end = "Q";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['G', 'H', 'Q'], distance: 8 });
        t.end();
    });


    t.test('Path from G to R', t => {
        end = "R";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['G', 'H', 'Q', 'R'], distance: 13 });
        t.end();
    });

    // t.test('Path from G to S', t => {
    //     end = "S";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'F', 'S'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from G to T', t => {
    //     end = "T";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'F', 'S', 'T'], distance: 8 });
    //     t.end();
    // });

    // t.test('Path from G to U', t => {
    //     end = "U";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'F', 'S', 'U'], distance: 7 });
    //     t.end();
    // });

    // t.test('Path from G to V', t => {
    //     end = "V";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'F', 'S', 'U', 'V'], distance: 9 });
    //     t.end();
    // });

    // t.test('Path from G to W', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'W'], distance: 11 });
    //     t.end();
    // });

    // t.test('Path from G to X', t => {
    //     end = "X";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'X'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from G to Y', t => {
    //     end = "Y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y'], distance: 8 });
    //     t.end();
    // });

    // t.test('Path from G to Z', t => {
    //     end = "Z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'Z'], distance: 10 });
    //     t.end();
    // });
    // =================================================================================================================


    // Node H ==========================================================================================================
    start = "H";
    // t.test('Path from H to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from H to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from H to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from H to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from H to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from H to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from H to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    t.test('Path from H to I', t => {
        end = "I";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['H', 'I'], distance: 2 });
        t.end();
    });

    t.test('Path from H to J', t => {
        end = "J";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['H', 'J'], distance: 6 });
        t.end();
    });

    t.test('Path from H to K', t => {
        end = "K";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['H', 'I', 'K'], distance: 7 });
        t.end();
    });

    t.test('Path from H to L', t => {
        end = "L";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['H', 'I', 'K', 'L'], distance: 9 });
        t.end();
    });

    // t.test('Path from H to M', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'S', 'Q', 'O', 'M'], distance: 15 });
    //     t.end();
    // });

    // t.test('Path from H to N', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'S', 'Q', 'O', 'N'], distance: 17 });
    //     t.end();
    // });

    t.test('Path from H to O', t => {
        end = "O";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['H', 'Q', 'O'], distance: 7 });
        t.end();
    });

    t.test('Path from H to P', t => {
        end = "P";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['H', 'Q', 'P'], distance: 6 });
        t.end();
    });
    t.test('Path from H to Q', t => {
        end = "Q";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['H', 'Q'], distance: 4 });
        t.end();
    });


    t.test('Path from H to R', t => {
        end = "R";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['H', 'Q', 'R'], distance: 9 });
        t.end();
    });

    // t.test('Path from G to S', t => {
    //     end = "S";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'F', 'S'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from G to T', t => {
    //     end = "T";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'F', 'S', 'T'], distance: 8 });
    //     t.end();
    // });

    // t.test('Path from G to U', t => {
    //     end = "U";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'F', 'S', 'U'], distance: 7 });
    //     t.end();
    // });

    // t.test('Path from G to V', t => {
    //     end = "V";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'F', 'S', 'U', 'V'], distance: 9 });
    //     t.end();
    // });

    // t.test('Path from G to W', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'W'], distance: 11 });
    //     t.end();
    // });

    // t.test('Path from G to X', t => {
    //     end = "X";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'X'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from G to Y', t => {
    //     end = "Y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y'], distance: 8 });
    //     t.end();
    // });

    // t.test('Path from G to Z', t => {
    //     end = "Z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'Z'], distance: 10 });
    //     t.end();
    // });
    // =================================================================================================================


    // Node I ==========================================================================================================
    start = "I";
    // t.test('Path from I to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from I to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from I to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from I to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from I to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from I to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from I to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from I to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    t.test('Path from I to J', t => {
        end = "J";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['I', 'J'], distance: 4 });
        t.end();
    });

    t.test('Path from I to K', t => {
        end = "K";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['I', 'K'], distance: 5 });
        t.end();
    });

    t.test('Path from I to L', t => {
        end = "L";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['I', 'K', 'L'], distance: 7 });
        t.end();
    });

    t.test('Path from I to M', t => {
        end = "M";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['I', 'K', 'M'], distance: 9 });
        t.end();
    });

    t.test('Path from I to N', t => {
        end = "N";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['I', 'K', 'M', 'N'], distance: 12 });
        t.end();
    });

    // t.test('Path from I to O', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'H', 'Q', 'O'], distance: 9 });
    //     t.end();
    // });

    // t.test('Path from I to P', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'H', 'Q', 'P'], distance: 8 });
    //     t.end();
    // });

    // t.test('Path from I to Q', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'H', 'Q'], distance: 6 });
    //     t.end();
    // });

    // t.test('Path from I to R', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'H', 'Q', 'R'], distance: 11 });
    //     t.end();
    // });

    // t.test('Path from I to S', t => {
    //     end = "S";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'G', 'F', 'S'], distance: 6 });
    //     t.end();
    // });

    // t.test('Path from I to T', t => {
    //     end = "T";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'F', 'S', 'T'], distance: 8 });
    //     t.end();
    // });

    // t.test('Path from I to U', t => {
    //     end = "U";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'F', 'S', 'U'], distance: 7 });
    //     t.end();
    // });

    // t.test('Path from I to V', t => {
    //     end = "V";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'F', 'S', 'U', 'V'], distance: 9 });
    //     t.end();
    // });

    // t.test('Path from I to W', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'W'], distance: 11 });
    //     t.end();
    // });

    // t.test('Path from I to X', t => {
    //     end = "X";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'X'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from I to Y', t => {
    //     end = "Y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y'], distance: 8 });
    //     t.end();
    // });

    // t.test('Path from I to Z', t => {
    //     end = "Z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F', 'C', 'Y', 'Z'], distance: 10 });
    //     t.end();
    // });
    // =================================================================================================================


    // Node J ==========================================================================================================
    start = "J";
    // t.test('Path from J to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from J to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from J to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from J to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from J to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from J to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from J to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from J to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from J to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    t.test('Path from J to K', t => {
        end = "K";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'K'], distance: 3 });
        t.end();
    });

    t.test('Path from J to L', t => {
        end = "L";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'K', 'L'], distance: 5 });
        t.end();
    });

    t.test('Path from J to M', t => {
        end = "M";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'K', 'M'], distance: 7 });
        t.end();
    });

    t.test('Path from J to N', t => {
        end = "N";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'K', 'M', 'N'], distance: 10 });
        t.end();
    });

    t.test('Path from J to O', t => {
        end = "O";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'Q', 'O'], distance: 7 });
        t.end();
    });

    t.test('Path from J to P', t => {
        end = "P";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'Q', 'P'], distance: 6 });
        t.end();
    });

    t.test('Path from I to Q', t => {
        end = "Q";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'Q'], distance: 4 });
        t.end();
    });

    t.test('Path from J to R', t => {
        end = "R";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'Q', 'R'], distance: 9 });
        t.end();
    });

    t.test('Path from J to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'Q', 'S'], distance: 10 });
        t.end();
    });

    t.test('Path from J to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'Q', 'R', 'T'], distance: 11 });
        t.end();
    });

    t.test('Path from J to U', t => {
        end = "U";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'Q', 'S', 'U'], distance: 14 });
        t.end();
    });

    t.test('Path from J to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'Q', 'S', 'U', 'V'], distance: 16 });
        t.end();
    });

    // t.test('Path from J to W', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'H', 'F', 'C', 'Y', 'W'], distance: 19 });
    //     t.end();
    // });

    t.test('Path from I to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'Q', 'S', 'U', 'V', 'X'], distance: 19 });
        t.end();
    });

    // t.test('Path from I to Y', t => {
    //     end = "Y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'H', 'F', 'C', 'Y'], distance: 16 });
    //     t.end();
    // });

    t.test('Path from I to Z', t => {
        end = "Z";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['J', 'Q', 'S', 'U', 'V', 'X', 'Z'], distance: 23  });
        t.end();
    });
    // =================================================================================================================


    // Node K ==========================================================================================================
    start = "K";
    // t.test('Path from K to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from K to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from K to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from K to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from K to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from K to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from K to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from K to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from K to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from K to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    t.test('Path from K to L', t => {
        end = "L";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['K', 'L'], distance: 2 });
        t.end();
    });

    t.test('Path from K to M', t => {
        end = "M";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['K', 'M'], distance: 4 });
        t.end();
    });

    t.test('Path from K to N', t => {
        end = "N";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['K', 'M', 'N'], distance: 7 });
        t.end();
    });

    t.test('Path from K to O', t => {
        end = "O";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['K', 'M', 'O'], distance: 6 });
        t.end();
    });

    // t.test('Path from K to P', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'J', 'Q', 'P'], distance: 9 });
    //     t.end();
    // });

    // t.test('Path from K to Q', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'J', 'Q'], distance: 7 });
    //     t.end();
    // });

    // t.test('Path from K to R', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'J', 'Q', 'R'], distance: 12 });
    //     t.end();
    // });

    // t.test('Path from K to S', t => {
    //     end = "S";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'J', 'Q', 'S'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from K to T', t => {
    //     end = "T";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'J', 'Q', 'R', 'T'], distance: 14 });
    //     t.end();
    // });

    // t.test('Path from K to U', t => {
    //     end = "U";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'I', 'H', 'V', 'U'], distance: 16 });
    //     t.end();
    // });

    // t.test('Path from K to V', t => {
    //     end = "V";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'I', 'H', 'V', ], distance: 14 });
    //     t.end();
    // });

    // t.test('Path from K to W', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'H', 'F', 'C', 'Y', 'W'], distance: 19 });
    //     t.end();
    // });

    // t.test('Path from K to X', t => {
    //     end = "X";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'I', 'H', 'V', 'X'], distance: 19 });
    //     t.end();
    // });

    // t.test('Path from K to Y', t => {
    //     end = "Y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'H', 'F', 'C', 'Y'], distance: 16 });
    //     t.end();
    // });

    // t.test('Path from K to Z', t => {
    //     end = "Z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'J', 'Q', 'S', 'U', 'V', 'X', 'Z'], distance: 26  });
    //     t.end();
    // });
    // =================================================================================================================

    // Node L ==========================================================================================================
    start = "L";
    // t.test('Path from L to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from L to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from L to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from L to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from L to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from L to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from L to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from L to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from L to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from L to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from L to K', t => {
    //     end = "L";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'L'], distance: 2 });
    //     t.end();
    // });

    t.test('Path from L to M', t => {
        end = "M";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['L', 'M'], distance: 5 });
        t.end();
    });

    t.test('Path from L to N', t => {
        end = "N";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['L', 'N'], distance: 6 });
        t.end();
    });

    t.test('Path from L to O', t => {
        end = "O";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['L', 'M', 'O'], distance: 7 });
        t.end();
    });

    t.test('Path from L to P', t => {
        end = "P";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['L', 'N', 'P'], distance: 11 });
        t.end();
    });

    // t.test('Path from L to Q', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['L', 'J', 'Q'], distance: 7 });
    //     t.end();
    // });

    // t.test('Path from L to R', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'J', 'Q', 'R'], distance: 12 });
    //     t.end();
    // });

    // t.test('Path from L to S', t => {
    //     end = "S";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'J', 'Q', 'S'], distance: 13 });
    //     t.end();
    // });

    // t.test('Path from L to T', t => {
    //     end = "T";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'J', 'Q', 'R', 'T'], distance: 14 });
    //     t.end();
    // });

    // t.test('Path from L to U', t => {
    //     end = "U";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['k', 'I', 'H', 'V', 'U'], distance: 16 });
    //     t.end();
    // });

    // t.test('Path from L to V', t => {
    //     end = "V";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'I', 'H', 'V', ], distance: 14 });
    //     t.end();
    // });

    // t.test('Path from L to W', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'H', 'F', 'C', 'Y', 'W'], distance: 19 });
    //     t.end();
    // });

    // t.test('Path from L to X', t => {
    //     end = "X";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'I', 'H', 'V', 'X'], distance: 19 });
    //     t.end();
    // });

    // t.test('Path from L to Y', t => {
    //     end = "Y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'H', 'F', 'C', 'Y'], distance: 16 });
    //     t.end();
    // });

    // t.test('Path from L to Z', t => {
    //     end = "Z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'J', 'Q', 'S', 'U', 'V', 'X', 'Z'], distance: 26  });
    //     t.end();
    // });
    // =================================================================================================================


    // Node M ==========================================================================================================
    start = "M";
    // t.test('Path from M to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from M to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from M to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from M to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from M to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from M to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from M to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from M to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from M to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from M to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from M to K', t => {
    //     end = "L";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'L'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from M to L', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['L', 'M'], distance: 5 });
    //     t.end();
    // });

    t.test('Path from M to N', t => {
        end = "N";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['M', 'N'], distance: 3 });
        t.end();
    });

    t.test('Path from M to O', t => {
        end = "O";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['M', 'O'], distance: 2 });
        t.end();
    });

    t.test('Path from M to P', t => {
        end = "P";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['M', 'O', 'Q', 'P'], distance: 7 });
        t.end();
    });

    t.test('Path from M to Q', t => {
        end = "Q";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['M', 'O', 'Q'], distance: 5 });
        t.end();
    });

    t.test('Path from M to R', t => {
        end = "R";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['M', 'O', 'Q', 'R'], distance: 10 });
        t.end();
    });

    t.test('Path from M to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['M', 'O', 'Q', 'S'], distance: 11 });
        t.end();
    });

    t.test('Path from M to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['M', 'O', 'Q', 'R', 'T'], distance: 12 });
        t.end();
    });

    // t.test('Path from M to U', t => {
    //     end = "U";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['M', 'O', 'Q', 'R', 'T', 'U'], distance: 15 });
    //     t.end();
    // });

    // t.test('Path from L to V', t => {
    //     end = "V";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'I', 'H', 'V', ], distance: 14 });
    //     t.end();
    // });

    // t.test('Path from L to W', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'H', 'F', 'C', 'Y', 'W'], distance: 19 });
    //     t.end();
    // });

    // t.test('Path from L to X', t => {
    //     end = "X";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'I', 'H', 'V', 'X'], distance: 19 });
    //     t.end();
    // });

    // t.test('Path from L to Y', t => {
    //     end = "Y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'H', 'F', 'C', 'Y'], distance: 16 });
    //     t.end();
    // });

    // t.test('Path from L to Z', t => {
    //     end = "Z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'J', 'Q', 'S', 'U', 'V', 'X', 'Z'], distance: 26  });
    //     t.end();
    // });
    // =================================================================================================================


    // Node N ==========================================================================================================
    start = "N";
    // t.test('Path from N to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from N to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from N to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from N to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from N to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from N to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from N to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from N to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from N to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from N to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from N to K', t => {
    //     end = "L";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'L'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from N to L', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['L', 'M'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from N to M', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['M', 'N'], distance: 3 });
    //     t.end();
    // });

    t.test('Path from N to O', t => {
        end = "O";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['N', 'O'], distance: 4 });
        t.end();
    });

    t.test('Path from N to P', t => {
        end = "P";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['N', 'P'], distance: 5 });
        t.end();
    });

    // t.test('Path from N to Q', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['N', 'O', 'Q'], distance: 5 });
    //     t.end();
    // });

    t.test('Path from N to R', t => {
        end = "R";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['N', 'P', 'R'], distance: 9 });
        t.end();
    });

    t.test('Path from N to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['N', 'P', 'R', 'S'], distance: 12 });
        t.end();
    });

    t.test('Path from N to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['N', 'P', 'R', 'T'], distance: 11 });
        t.end();
    });

    t.test('Path from N to U', t => {
        end = "U";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['N', 'P', 'R', 'T', 'U'], distance: 14 });
        t.end();
    });

    t.test('Path from N to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['N', 'P', 'R', 'T', 'U', 'V'], distance: 16 });
        t.end();
    });

    t.test('Path from N to W', t => {
        end = "W";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['N', 'P', 'R', 'T', 'U', 'W'], distance: 19 });
        t.end();
    });

    t.test('Path from N to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['N', 'P', 'R', 'T', 'U', 'V', 'X'], distance: 19 });
        t.end();
    });

    t.test('Path from N to Y', t => {
        end = "Y";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['N', 'P', 'R', 'T', 'U', 'W', 'Y'], distance: 22 });
        t.end();
    });

    t.test('Path from N to Z', t => {
        end = "Z";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['N', 'P', 'R', 'T', 'U', 'V', 'X', 'Z'], distance: 23  });
        t.end();
    });
    // =================================================================================================================

    // Node O ==========================================================================================================
    start = "O";
    // t.test('Path from O to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from O to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from O to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from O to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from O to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from O to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from O to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from O to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from O to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from O to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from O to K', t => {
    //     end = "L";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'L'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from O to L', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['L', 'M'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from O to M', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['M', 'N'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from O to N', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['N', 'O'], distance: 4 });
    //     t.end();
    // });

    t.test('Path from O to P', t => {
        end = "P";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
        t.end();
    });

    t.test('Path from O to Q', t => {
        end = "Q";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['O', 'Q'], distance: 3 });
        t.end();
    });

    t.test('Path from O to R', t => {
        end = "R";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['O', 'Q', 'R'], distance: 8 });
        t.end();
    });

    t.test('Path from O to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['O', 'Q', 'S'], distance: 9 });
        t.end();
    });

    t.test('Path from O to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['O', 'Q', 'R', 'T'], distance: 10 });
        t.end();
    });

    t.test('Path from O to U', t => {
        end = "U";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['O', 'Q', 'S', 'U'], distance: 13 });
        t.end();
    });

    t.test('Path from O to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['O', 'Q', 'S', 'U', 'V'], distance: 15 });
        t.end();
    });

    t.test('Path from O to W', t => {
        end = "W";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['O', 'Q', 'S', 'U', 'W'], distance: 18 });
        t.end();
    });

    t.test('Path from O to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['O', 'Q', 'S', 'U', 'V', 'X'], distance: 18 });
        t.end();
    });

    t.test('Path from O to Y', t => {
        end = "Y";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['O', 'Q', 'S', 'U', 'W', 'Y'], distance: 21 });
        t.end();
    });

    t.test('Path from O to Z', t => {
        end = "Z";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['O', 'Q', 'S', 'U', 'V', 'X', 'Z'], distance: 22  });
        t.end();
    });
    // =================================================================================================================


    // Node P ==========================================================================================================
    start = "P";
    // t.test('Path from P to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from P to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from P to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from P to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from P to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from P to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from P to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from P to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from P to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from P to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from P to K', t => {
    //     end = "L";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'L'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from P to L', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['L', 'M'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from P to M', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['M', 'N'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from P to N', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['N', 'O'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from P to O', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
    //     t.end();
    // });

    t.test('Path from P to Q', t => {
        end = "Q";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['P', 'Q'], distance: 2 });
        t.end();
    });

    t.test('Path from P to R', t => {
        end = "R";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['P', 'R'], distance: 4 });
        t.end();
    });

    t.test('Path from P to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['P', 'R', 'S'], distance: 7 });
        t.end();
    });

    t.test('Path from P to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['P', 'R', 'T'], distance: 6 });
        t.end();
    });

    t.test('Path from P to U', t => {
        end = "U";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['P', 'R', 'T', 'U'], distance: 9 });
        t.end();
    });

    t.test('Path from P to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['P', 'R', 'T', 'U', 'V'], distance: 11 });
        t.end();
    });

    t.test('Path from P to W', t => {
        end = "W";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['P', 'R', 'T', 'U', 'W'], distance: 14 });
        t.end();
    });

    t.test('Path from P to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['P', 'R', 'T', 'U', 'V', 'X'], distance: 14 });
        t.end();
    });

    t.test('Path from P to Y', t => {
        end = "Y";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['P', 'R', 'T', 'U', 'W', 'Y'], distance: 17 });
        t.end();
    });

    t.test('Path from P to Z', t => {
        end = "Z";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['P', 'R', 'T', 'U', 'V', 'X', 'Z'], distance: 18 });
        t.end();
    });
    // =================================================================================================================


    // Node Q ==========================================================================================================
    start = "Q";
    // t.test('Path from Q to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from Q to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from Q to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from Q to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from Q to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from Q to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from Q to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from Q to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from Q to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from Q to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from Q to K', t => {
    //     end = "L";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'L'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from Q to L', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['L', 'M'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from Q to M', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['M', 'N'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from Q to N', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['N', 'O'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from Q to O', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from Q to P', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['P', 'Q'], distance: 2 });
    //     t.end();
    // });

    t.test('Path from Q to R', t => {
        end = "R";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['Q', 'R'], distance: 5 });
        t.end();
    });

    t.test('Path from Q to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['Q', 'S'], distance: 6 });
        t.end();
    });

    t.test('Path from Q to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['Q', 'R', 'T'], distance: 7 });
        t.end();
    });

    // t.test('Path from Q to U', t => {
    //     end = "U";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['Q', 'S', 'U'], distance: 9 });
    //     t.end();
    // });

    // t.test('Path from Q to V', t => {
    //     end = "V";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['Q', 'R', 'T', 'U', 'V'], distance: 15 });
    //     t.end();
    // });

    // t.test('Path from P to W', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['P', 'R', 'T', 'U', 'W'], distance: 18 });
    //     t.end();
    // });

    // t.test('Path from P to X', t => {
    //     end = "X";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['P', 'R', 'T', 'U', 'V', 'X'], distance: 18 });
    //     t.end();
    // });

    // t.test('Path from P to Y', t => {
    //     end = "Y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['P', 'R', 'T', 'U', 'W', 'Y'], distance: 21 });
    //     t.end();
    // });

    // t.test('Path from P to Z', t => {
    //     end = "Z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['P', 'R', 'T', 'U', 'V', 'X', 'Z'], distance: 18 });
    //     t.end();
    // });
    // =================================================================================================================


    // Node R ==========================================================================================================
    start = "R";
    // t.test('Path from R to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from R to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from R to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from R to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from R to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from R to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from R to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from R to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from R to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from R to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from R to K', t => {
    //     end = "L";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'L'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from R to L', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['L', 'M'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from R to M', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['M', 'N'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from R to N', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['N', 'O'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from R to O', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from R to P', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['P', 'Q'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from R to Q', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['Q', 'R'], distance: 5 });
    //     t.end();
    // });

    t.test('Path from R to S', t => {
        end = "S";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['R', 'S'], distance: 3 });
        t.end();
    });

    t.test('Path from R to T', t => {
        end = "T";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['R', 'T'], distance: 2 });
        t.end();
    });

    t.test('Path from R to U', t => {
        end = "U";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['R', 'T', 'U'], distance: 5 });
        t.end();
    });

    t.test('Path from R to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['R', 'T', 'U', 'V'], distance: 7 });
        t.end();
    });

    t.test('Path from R to W', t => {
        end = "W";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['R', 'T', 'U', 'W'], distance: 10 });
        t.end();
    });

    t.test('Path from R to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['R', 'T', 'U', 'V', 'X'], distance: 10 });
        t.end();
    });

    t.test('Path from R to Y', t => {
        end = "Y";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['R', 'T', 'U', 'W', 'Y'], distance: 13 });
        t.end();
    });

    t.test('Path from R to Z', t => {
        end = "Z";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['R', 'T', 'U', 'V', 'X', 'Z'], distance: 14 });
        t.end();
    });
    // =================================================================================================================


    // Node S ==========================================================================================================
    start = "S";
    // t.test('Path from S to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from S to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from S to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from S to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from S to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from S to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from S to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from S to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from S to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from S to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from S to K', t => {
    //     end = "L";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'L'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from S to L', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['L', 'M'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from S to M', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['M', 'N'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from S to N', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['N', 'O'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from S to O', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from S to P', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['P', 'Q'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from S to Q', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['Q', 'R'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from S to R', t => {
    //     end = "S";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['R', 'S'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from S to T', t => {
    //     end = "T";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['S', 'R', 'T'], distance: 2 });
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

    // t.test('Path from S to W', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['S', 'U', 'W'], distance: 9 });
    //     t.end();
    // });

    t.test('Path from S to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['S', 'U', 'V', 'X'], distance: 9 });
        t.end();
    });

    // t.test('Path from S to Y', t => {
    //     end = "Y";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['S', 'F', 'C', 'Y'], distance: 6 });
    //     t.end();
    // });
    //
    // t.test('Path from S to Z', t => {
    //     end = "Z";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['S', 'F', 'C', 'Y', 'Z'], distance: 8 });
    //     t.end();
    // });
    // =================================================================================================================

    // Node T ==========================================================================================================
    start = "T";
    // t.test('Path from T to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from T to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from T to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from T to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from T to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from T to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from T to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from T to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from T to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from T to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from T to K', t => {
    //     end = "L";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'L'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from T to L', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['L', 'M'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from T to M', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['M', 'N'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from T to N', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['N', 'O'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from T to O', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from T to P', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['P', 'Q'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from T to Q', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['Q', 'R'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from T to R', t => {
    //     end = "S";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['R', 'S'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from T to S', t => {
    //     end = "T";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['S', 'R', 'T'], distance: 2 });
    //     t.end();
    // });

    t.test('Path from T to U', t => {
        end = "U";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['T', 'U'], distance: 3 });
        t.end();
    });

    t.test('Path from T to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['T', 'U', 'V'], distance: 5 });
        t.end();
    });

    t.test('Path from T to W', t => {
        end = "W";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['T', 'U', 'W'], distance: 8 });
        t.end();
    });

    t.test('Path from T to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['T', 'U', 'V', 'X'], distance: 8 });
        t.end();
    });

    t.test('Path from T to Y', t => {
        end = "Y";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['T', 'U', 'W', 'Y'], distance: 11 });
        t.end();
    });

    t.test('Path from T to Z', t => {
        end = "Z";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['T', 'U', 'V', 'X', 'Z'], distance: 12 });
        t.end();
    });
    // =================================================================================================================


    // Node U ==========================================================================================================
    start = "U";
    // t.test('Path from U to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from U to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from U to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from U to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from U to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from U to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from U to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from U to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from U to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from U to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from U to K', t => {
    //     end = "L";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'L'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from U to L', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['L', 'M'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from U to M', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['M', 'N'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from U to N', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['N', 'O'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from U to O', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from U to P', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['P', 'Q'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from U to Q', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['Q', 'R'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from U to R', t => {
    //     end = "S";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['R', 'S'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from U to S', t => {
    //     end = "T";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['S', 'R', 'T'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from U to T', t => {
    //     end = "U";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['T', 'U'], distance: 3 });
    //     t.end();
    // });

    t.test('Path from U to V', t => {
        end = "V";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['U', 'V'], distance: 2 });
        t.end();
    });

    t.test('Path from U to W', t => {
        end = "W";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['U', 'W'], distance: 5 });
        t.end();
    });

    t.test('Path from U to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['U', 'V', 'X'], distance: 5 });
        t.end();
    });

    t.test('Path from U to Y', t => {
        end = "Y";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['U', 'W', 'Y'], distance: 8 });
        t.end();
    });

    t.test('Path from U to Z', t => {
        end = "Z";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['U', 'V', 'X', 'Z'], distance: 9 });
        t.end();
    });
    // =================================================================================================================


    // Node V ==========================================================================================================
    start = "V";
    // t.test('Path from V to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from V to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from V to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from V to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from V to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from V to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from V to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from V to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from V to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from V to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from V to K', t => {
    //     end = "L";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'L'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from V to L', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['L', 'M'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from V to M', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['M', 'N'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from V to N', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['N', 'O'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from V to O', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from V to P', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['P', 'Q'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from V to Q', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['Q', 'R'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from V to R', t => {
    //     end = "S";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['R', 'S'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from V to S', t => {
    //     end = "T";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['S', 'R', 'T'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from V to T', t => {
    //     end = "U";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['T', 'U'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from V to U', t => {
    //     end = "V";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['U', 'V'], distance: 2 });
    //     t.end();
    // });

    t.test('Path from V to W', t => {
        end = "W";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['V', 'W'], distance: 4 });
        t.end();
    });

    t.test('Path from V to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['V', 'X'], distance: 3 });
        t.end();
    });

    t.test('Path from V to Y', t => {
        end = "Y";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['V', 'W', 'Y'], distance: 7 });
        t.end();
    });

    t.test('Path from V to Z', t => {
        end = "Z";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['V', 'X', 'Z'], distance: 7 });
        t.end();
    });
    // =================================================================================================================

    // Node W ==========================================================================================================
    start = "W";
    // t.test('Path from W to A', t => {
    //     end = "A";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['A', 'B'], distance: 1 });
    //     t.end();
    // });

    // t.test('Path from W to B', t => {
    //     end = "C";
    //     const minPath: ShortestPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['B', 'C'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from W to C', t => {
    //     end = "D";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['C', 'F', 'D'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from W to D', t => {
    //     end = "E";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['D', 'E'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from W to E', t => {
    //     end = "F";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['E', 'F'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from W to F', t => {
    //     end = "G";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['F', 'G'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from W to G', t => {
    //     end = "H";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['G', 'H'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from W to H', t => {
    //     end = "I";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['H', 'I'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from W to I', t => {
    //     end = "J";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['I', 'J'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from W to J', t => {
    //     end = "K";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['J', 'K'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from W to K', t => {
    //     end = "L";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['K', 'L'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from W to L', t => {
    //     end = "M";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['L', 'M'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from W to M', t => {
    //     end = "N";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['M', 'N'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from W to N', t => {
    //     end = "O";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['N', 'O'], distance: 4 });
    //     t.end();
    // });

    // t.test('Path from W to O', t => {
    //     end = "P";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['O', 'Q', 'P'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from W to P', t => {
    //     end = "Q";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['P', 'Q'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from W to Q', t => {
    //     end = "R";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['Q', 'R'], distance: 5 });
    //     t.end();
    // });

    // t.test('Path from W to R', t => {
    //     end = "S";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['R', 'S'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from W to S', t => {
    //     end = "T";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['S', 'R', 'T'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from W to T', t => {
    //     end = "U";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['T', 'U'], distance: 3 });
    //     t.end();
    // });

    // t.test('Path from W to U', t => {
    //     end = "V";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['U', 'V'], distance: 2 });
    //     t.end();
    // });

    // t.test('Path from W to V', t => {
    //     end = "W";
    //     const minPath = getDijkstraMinPath(distancesGraph, start, end);
    //     t.same(minPath, { path: ['V', 'W'], distance: 4 });
    //     t.end();
    // });

    t.test('Path from W to X', t => {
        end = "X";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['W', 'X'], distance: 2 });
        t.end();
    });

    t.test('Path from W to Y', t => {
        end = "Y";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['W', 'Y'], distance: 3 });
        t.end();
    });

    t.test('Path from W to Z', t => {
        end = "Z";
        const minPath = getDijkstraMinPath(distancesGraph, start, end);
        t.same(minPath, { path: ['W', 'Y', 'Z'], distance: 5 });
        t.end();
    });
    // =================================================================================================================

    t.end();
});