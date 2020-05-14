export function isPossible(availablePositions, coordinates) {
    if (availablePositions.some(([xPos, yPos]) => xPos === coordinates.x && yPos === coordinates.y)){
        return true;
    } else return false;
}