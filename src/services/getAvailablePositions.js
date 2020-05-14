export function getAvailablePositions(position) {
    let positions = [];
    let x = position.x;
    let y = position.y;
    [[x, y], [y, x]].forEach((coordinates, index) => {
        [1, -1].forEach( num1 => {
            [2, -2].forEach( num2 => {
                if(index === 0) {
                    positions.push([+coordinates[0] + num1, +coordinates[1] + num2]);
                } else positions.push([+coordinates[1] + num2, +coordinates[0] + num1]);

            })
        })
    })

    return positions.filter(coordinates =>
        coordinates.every(position => position >= 0 && position < 8)
    );
}