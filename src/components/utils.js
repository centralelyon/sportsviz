
import * as d3 from 'd3';

export function parseFrenchDate(dateString) {
    const parseDate = d3.timeParse("%d/%m/%y");

    return parseDate(dateString);
}