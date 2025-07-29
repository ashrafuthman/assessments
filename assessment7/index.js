
function calulateRouteSteps(route) {
    const vericalLimit = route.split("\n").length
    const routeWithoutBreak = route.replaceAll("\n", "");
    const horizenLimit = routeWithoutBreak.length / vericalLimit;
    let location = routeWithoutBreak.indexOf("^");
    const breakPoints = routeWithoutBreak.spilt("").map((step, index) => {
        if(step === "#") {
            return index;
        }
        return;
    }).filter((point) => point !== undefined);

    const goUp = (postion) => location = postion - horizenLimit
 
    const goDown = (postion) => location = postion + horizenLimit

    const goRight = (postion) =>  location = postion + 1

    const goLeft = (postion) => location = postion - 1

    while(location>= 0 && location <= routeWithoutBreak.length - 1) {
        goUp(location);
        if (breakPoints.include(location)) {
            goRight()
        }
    }

    
}

// // 1 2 3 
// // 4 > *
// // 7 8 9
const ROUTE = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

console.log(ROUTE.split("\n").length);

// console.log(calulateRouteSteps(ROUTE));
