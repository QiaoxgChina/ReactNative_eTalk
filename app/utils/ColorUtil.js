export const ColorList = [
    '#1e6f82',
    '#0288d1',
    '#3a4fce',
    '#3B3563',
    '#BF360C',
    '#049c80',
    '#0BA084',
    '#3A4FCE',
    '#0288D1',
    '#f88203',
];

export function getColor() {
    var index = (Math.random() * 10).toString().slice(0,1);
    return ColorList[index];
}
