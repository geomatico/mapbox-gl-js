
export function fixedNum(n, precision) {
    if (precision === undefined) precision = 10;
    const fixed = parseFloat(n.toFixed(precision), 10);
    // the `|| 0` converts -0 to 0
    return fixed || 0;
}

export function fixedLngLat(l, precision) {
    if (precision === undefined) precision = 9;
    return {
        lng: fixedNum(l.lng, precision),
        lat: fixedNum(l.lat, precision)
    };
}

export function fixedCoord(coord, precision) {
    if (precision === undefined) precision = 10;
    return {
        x: fixedNum(coord.x, precision),
        y: fixedNum(coord.y, precision),
        z: fixedNum(coord.z, precision)
    };
}
