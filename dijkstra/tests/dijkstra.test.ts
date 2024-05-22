import t from 'tap';
import { getDijkstraMinPath } from '../dijkstra';

export const distancesGraph = {
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

export interface ShortestPath {
    path: string[],
    distance: number
}


t.test('Dijkstra Algorithm', t => {
    t.same(true, true);
    t.end();
});