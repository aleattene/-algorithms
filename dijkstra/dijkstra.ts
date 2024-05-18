interface Graph {
    [key: string]: { [key: string]: number };
}

export function getDijkstraMinPath(distancesGraph: Graph, start:string, end:string) {
    const distances: { [key: string]: [number, string] } = {};

    for(const node in distancesGraph) {
        distances[node] = [ Infinity, ""];
    }
    distances[start] = [0, "a"];

    const nodes = Object.keys(distancesGraph);

    while(nodes.length) {
        const currentNode = nodes[0];
        const currentDistance = distances[currentNode][0];
        for (const neighbor in distancesGraph[currentNode]) {
            const newDistance = currentDistance + distancesGraph[currentNode][neighbor];
            if(newDistance < distances[neighbor][0]) {
                distances[neighbor][0] = newDistance;
                distances[neighbor][1] = currentNode;
            }
        }
        nodes.shift();
    }

    const minPath = { path : [end], distance : distances[end][0]};
    while (end !== start) {
        end = distances[end][1];
        minPath.path.unshift(end);
    }

    return minPath;
}