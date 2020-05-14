export function isWrong(wrongHighlight, coordinates) {

    return wrongHighlight.forEach(([xPos, yPos]) => xPos === coordinates.x && yPos === coordinates.y);

}