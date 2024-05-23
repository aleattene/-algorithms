interface Graph {
    [key: string]: { [key: string]: number };
}


export function getDijkstraMinPath(distancesGraph: Graph, start: string, end: string) {
    const distances: { [key: string]: [number, string] } = {};

    for(const node in distancesGraph) {
        distances[node] = [ Infinity, ""];
    }
    distances[start] = [0, start]; // { A: [0, "A"], B: [Infinity, ""], ... , [Infinity, ""] }

    const nodes = Object.keys(distancesGraph); // [ 'A', 'B', ... , 'Z']

    while(nodes.length) {
        nodes.sort((a, b) => distances[a][0] - distances[b][0]);
        const currentNode = nodes[0]; // A, B, C, D, ... , Z
        const currentDistance = distances[currentNode][0];
        for (const neighbor in distancesGraph[currentNode]) {
            const newDistance = currentDistance + distancesGraph[currentNode][neighbor];
            if(newDistance < distances[neighbor][0]) {
                distances[neighbor][0] = newDistance;
                distances[neighbor][1] = currentNode;
            }
        }
        nodes.shift(); // Remove visited node
    }

    const minPath = {
        path : [end],
        distance : 0
    };

    while (end !== start) {
        end = distances[end][1];
        minPath.path.unshift(end);
    }

    // Calculate distance
    for(let i = 0; i < minPath.path.length - 1; i++) {
        minPath.distance += distancesGraph[minPath.path[i]][minPath.path[i + 1]];
    }

    return minPath;
}