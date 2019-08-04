// describe('HomeWork tasks if-else', () => {
//     describe('evenOrOddValue', () =>{
//         // GIVEN
//         const testData = [
//             {
//                 a: 2,
//                 b: 3,
//                 expected: 6,
//             },
//             {
//                 a: 1,
//                 b: 4,
//                 expected: 5,
//             },
//             {
//                 a: 0,
//                 b: 1,
//                 expected: 0,
//             }
//         ];
//
//         testData.forEach(data => {
//             const {a, b, expected} = data;
//             //WHEN
//             const actual = evenOrOddValue(a, b);
//
//             it(`should return ${expected} when a = ${a} and b = ${b}`, function () {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//
//
//         });
//     });
//     describe('valueCoordinates', () => {
//         //GIVEN
//         const testData = [
//             {
//                 x: 1,
//                 y: 1,
//                 expected: 1,
//             },
//             {
//                 x: -4,
//                 y: 6,
//                 expected: 2,
//             },
//             {
//                 x: -2,
//                 y: -6,
//                 expected: 3,
//             },
//             {
//                 x: 3,
//                 y: -3,
//                 expected: 4,
//             },
//             {
//                 x: 0,
//                 y: 0,
//                 expected: 0,
//             },
//             {
//                 x: 0,
//                 y: 2,
//                 expected: null,
//             },
//             {
//                 x: 3,
//                 y: 0,
//                 expected: null,
//             },
//             {
//                 x: -6,
//                 y: 0,
//                 expected: null,
//             },
//             {
//                 x: 0,
//                 y: -7,
//                 expected: null,
//             }
//         ];
//
//         testData.forEach(data => {
//             const {x, y, expected} = data;
//
//             const actual = valueCoordinates(x, y);
//             it(`should return ${expected} when x = ${x} , y = ${y}`, function () {
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
//     describe('summPositiveValues', () =>{
//         // GIVEN
//         const testData = [
//             {
//                 a: 2,
//                 b: 3,
//                 c: 4,
//                 expected: 9,
//             },
//             {
//                 a: 1,
//                 b: 4,
//                 c: 0,
//                 expected: 5,
//             },
//             {
//                 a: 0,
//                 b: 1,
//                 c: 2,
//                 expected: 3,
//             },
//             {
//                 a: 3,
//                 b: 0,
//                 c: 8,
//                 expected: 11,
//             },
//             {
//                 a: 0,
//                 b: 0,
//                 c: 8,
//                 expected: 8,
//             },
//             {
//                 a: 3,
//                 b: 0,
//                 c: 0,
//                 expected: 3,
//             },
//             {
//                 a: 0,
//                 b: 6,
//                 c: 0,
//                 expected: 6,
//             },
//             {
//                 a: 0,
//                 b: 0,
//                 c: 0,
//                 expected: 0,
//             },
//             {
//                 a: -4,
//                 b: -5,
//                 c: -6,
//                 expected: 0,
//             },
//             {
//                 a: -2,
//                 b: 2,
//                 c: 2,
//                 expected: 4,
//             },
//             {
//                 a: 3,
//                 b: -4,
//                 c: 3,
//                 expected: 6,
//             },
//             {
//                 a: 3,
//                 b: 0,
//                 c: -8,
//                 expected: 3,
//             },
//         ];
//
//         testData.forEach(data => {
//             const {a, b, c, expected} = data;
//             //WHEN
//             const actual = summPositiveValues(a, b, c);
//
//             it(`should return ${expected} when a = ${a} , b = ${b} and c = ${c}`, function () {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//
//
//         });
//     });
//     describe('searchMax', () =>{
//         // GIVEN
//         const testData = [
//             {
//                 a: 1,
//                 b: 1,
//                 c: 1,
//                 expected: 6,
//             },
//             {
//                 a: 0,
//                 b: 0,
//                 c: 0,
//                 expected: 3,
//             },
//             {
//                 a: 2,
//                 b: 3,
//                 c: 4,
//                 expected: 27,
//             },
//             {
//                 a: -2,
//                 b: -5,
//                 c: -1,
//                 expected: -5,
//             },
//             {
//                 a: -2,
//                 b: -5,
//                 c: 1,
//                 expected: 13,
//             },
//         ];
//
//         testData.forEach(data => {
//             const {a, b, c, expected} = data;
//             //WHEN
//             const actual = searchMax(a, b, c);
//
//             it(`should return ${expected} when a = ${a} and b = ${b} and c = ${c}`, function () {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//
//
//         });
//     });
//     describe('ballOfStudent', () =>{
//         // GIVEN
//         const testData = [
//             {
//                 mark: 0,
//                 expected: 'F',
//             },
//             {
//                 mark: -2,
//                 expected: 'F',
//             },
//             {
//                 mark: 19,
//                 expected: 'F',
//             },
//             {
//                 mark: 20,
//                 expected: 'E',
//             },
//             {
//                 mark: 30,
//                 expected: 'E',
//             },
//             {
//                 mark: 39,
//                 expected: 'E',
//             },
//             {
//                 mark: 40,
//                 expected: 'D',
//             },
//             {
//                 mark: 53,
//                 expected: 'D',
//             },
//             {
//                 mark: 59,
//                 expected: 'D',
//             },
//             {
//                 mark: 60,
//                 expected: 'C',
//             },
//             {
//                 mark: 70,
//                 expected: 'C',
//             },
//             {
//                 mark: 74,
//                 expected: 'C',
//             },
//             {
//                 mark: 75,
//                 expected: 'B',
//             },
//             {
//                 mark: 85,
//                 expected: 'B',
//             },
//             {
//                 mark: 89,
//                 expected: 'B',
//             },
//             {
//                 mark: 90,
//                 expected: 'A',
//             },
//             {
//                 mark: 100,
//                 expected: 'A',
//             },
//             {
//                 mark: 1000,
//                 expected: 'A',
//             },
//         ];
//
//         testData.forEach(data => {
//             const {mark, expected} = data;
//             //WHEN
//             const actual = ballOfStudent(mark);
//
//             it(`should return ${expected} when mark = ${mark}`, function () {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
// });
// describe('HomeWork tasks Arrays', () => {
//     describe('getMinValueInArray', () => {
//         //GIVEN
//         const testData = [
//             {
//                 array: [43, 2, 3, 1, -563, 9],
//                 expected: -563,
//             },
//             {
//                 array: [],
//                 expected: null,
//             },
//             {
//                 array: [4],
//                 expected: 4,
//             },
//             {
//                 array: [9, 0],
//                 expected: 0,
//             },
//         ];
//
//         testData.forEach(data => {
//             const {array, expected} = data;
//             //WHEN
//             const actual = getMinValueInArray(array);
//
//             it(`should return ${expected} when array = [${[array]}]`, () => {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
//     describe('getMaxValueArray', () => {
//         //GIVEN
//         const testData = [
//             {
//                 array: [43, 2, 345, 1, -563, 9],
//                 expected: 345,
//             },
//             {
//                 array: [],
//                 expected: null,
//             },
//             {
//                 array: [4],
//                 expected: 4,
//             },
//             {
//                 array: [9, 0],
//                 expected: 9,
//             },
//         ];
//
//         testData.forEach(data => {
//             const {array, expected} = data;
//             //WHEN
//             const actual = getMaxValueArray(array);
//
//             it(`should return ${expected} when array = [${[array]}]`, () => {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
//     describe('getMaxIndexValue', () => {
//         //GIVEN
//         const testData = [
//             {
//                 array: [43, 2, 345, 1, -563, 9],
//                 expected: 2,
//             },
//             {
//                 array: [],
//                 expected: null,
//             },
//             {
//                 array: [4],
//                 expected: 0,
//             },
//             {
//                 array: [9, 0],
//                 expected: 0,
//             },
//         ];
//
//         testData.forEach(data => {
//             const {array, expected} = data;
//             //WHEN
//             const actual = getMaxIndexValue(array);
//
//             it(`should return ${expected} when array = [${[array]}]`, () => {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
//     describe('getMinIndexValue', () => {
//         //GIVEN
//         const testData = [
//             {
//                 array: [43, 2, 345, 1, -563, 9],
//                 expected: 4,
//             },
//             {
//                 array: [],
//                 expected: null,
//             },
//             {
//                 array: [4],
//                 expected: 0,
//             },
//             {
//                 array: [9, 0],
//                 expected: 1,
//             },
//         ];
//
//         testData.forEach(data => {
//             const {array, expected} = data;
//             //WHEN
//             const actual = getMinIndexValue(array);
//
//             it(`should return ${expected} when array = [${[array]}]`, () => {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
//     describe('getSumOddValues', () => {
//         //GIVEN
//         const testData = [
//             {
//                 array: [43, 2, 345, 1, -563, 9],
//                 expected: 12,
//             },
//             {
//                 array: [],
//                 expected: null,
//             },
//             {
//                 array: [3],
//                 expected: 0,
//             },
//             {
//                 array: [9, 68],
//                 expected: 68,
//             },
//         ];
//
//         testData.forEach(data => {
//             const {array, expected} = data;
//             //WHEN
//             const actual = getSumOddValues(array);
//
//             it(`should return ${expected} when array = [${[array]}]`, () => {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
//     describe('getCountOddValues', () => {
//         //GIVEN
//         const testData = [
//             {
//                 array: [43, 2, 345, 1, -563, 9],
//                 expected: 5,
//             },
//             {
//                 array: [],
//                 expected: null,
//             },
//             {
//                 array: [3],
//                 expected: 1,
//             },
//             {
//                 array: [9, 68],
//                 expected: 1,
//             },
//         ];
//
//         testData.forEach(data => {
//             const {array, expected} = data;
//             //WHEN
//             const actual = getCountOddValues(array);
//
//             it(`should return ${expected} when array = [${[array]}]`, () => {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
//     describe('getReverseArray', () => {
//         //GIVEN
//         const testData = [
//             {
//                 array: [43, 2, 345, 1, -563, 9],
//                 expected: [9, -563, 1, 345, 2, 43],
//             },
//             {
//                 array: [],
//                 expected: null,
//             },
//             {
//                 array: [3],
//                 expected: [3],
//             },
//             {
//                 array: [9, 68],
//                 expected: [68, 9],
//             },
//         ];
//
//         testData.forEach(data => {
//             const {array, expected} = data;
//             //WHEN
//             const actual = getReverseArray(array);
//
//             it(`should return [${[expected]}] when array = [${[array]}]`, () => {
//                 //THEN
//                 assert.deepEqual(actual, expected);
//             })
//         });
//     });
//     describe('getChangePlaceArray', () => {
//         //GIVEN
//         const testData = [
//             {
//                 array: [43, 2, 345, 1, -563, 9],
//                 expected: [1, -563, 9, 43, 2, 345],
//             },
//             {
//                 array: [1, 2, -3, 5, -6],
//                 expected: [5, -6, -3, 1, 2],
//             },
//             {
//                 array: [],
//                 expected: null,
//             },
//             {
//                 array: [3],
//                 expected: [3],
//             },
//             {
//                 array: [9, 68],
//                 expected: [68, 9],
//             },
//         ];
//
//         testData.forEach(data => {
//             const {array, expected} = data;
//             //WHEN
//             const actual = getChangePlaceArray(array);
//
//             it(`should return [${[expected]}] when array = [${[array]}]`, () => {
//                 //THEN
//                 assert.deepEqual(actual, expected);
//             })
//         });
//     });
//     describe('getBubbleSort', () => {
//         //GIVEN
//         const testData = [
//             {
//                 array: [43, 2, 345, 1, -563, 9],
//                 expected: [-563, 1, 2, 9, 43, 345],
//             },
//             {
//                 array: [1, 2, -3, 5, -6],
//                 expected: [-6, -3, 1, 2, 5],
//             },
//             {
//                 array: [],
//                 expected: null,
//             },
//             {
//                 array: [3],
//                 expected: [3],
//             },
//             {
//                 array: [9, 68],
//                 expected: [9, 68],
//             },
//         ];
//
//         testData.forEach(data => {
//             const {array, expected} = data;
//             //WHEN
//             const actual = getBubbleSort(array);
//
//             it(`should return [${[expected]}] when array = [${[array]}]`, () => {
//                 //THEN
//                 assert.deepEqual(actual, expected);
//             })
//         });
//     });
// });
// describe('HomeWork tasks Cycles', () => {
//     describe('getSumEvenValues', () => {
//         //GIVEN
//         const testData = [
//             {
//                 expected: [2450, 49],
//             },
//         ];
//
//         testData.forEach(data => {
//             const {expected} = data;
//             //WHEN
//             const actual = getSumEvenValues();
//
//             it(`should return ${expected}`, () => {
//                 //THEN
//                 assert.deepEqual(actual, expected);
//             })
//         });
//     });
//     describe('getFactValue', () => {
//         //GIVEN
//         const testData = [
//             {
//                 a: 0,
//                 expected: 1,
//             },
//             {
//                 a: 1,
//                 expected: 1,
//             },
//             {
//                 a: 2,
//                 expected: 2,
//             },
//             {
//                 a: -3,
//                 expected: null,
//             },
//             {
//                 a: 4,
//                 expected: 24,
//             },
//         ];
//
//         testData.forEach(data => {
//             const {a, expected} = data;
//             //WHEN
//             const actual = getFactValue(a);
//
//             it(`should return ${expected} when a = ${a}`, () => {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
//     describe('getSimpleValue', () => {
//         //GIVEN
//         const testData = [
//             {
//                 a: 0,
//                 expected: null,
//             },
//             {
//                 a: 1,
//                 expected: true,
//             },
//             {
//                 a: 2,
//                 expected: true,
//             },
//             {
//                 a: -3,
//                 expected: null,
//             },
//             {
//                 a: 4,
//                 expected: false,
//             },
//             {
//                 a: 10,
//                 expected: false,
//             },
//             {
//                 a: 11,
//                 expected: true,
//             },
//         ];
//
//         testData.forEach(data => {
//             const {a, expected} = data;
//             //WHEN
//             const actual = getSimpleValue(a);
//
//             it(`should return ${expected} when a = ${a}`, () => {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
//     describe('getSumNumbersValue', () => {
//         //GIVEN
//         const testData = [
//             {
//                 a: 123,
//                 expected: 6,
//             },
//             {
//                 a: 0,
//                 expected: 0,
//             },
//             {
//                 a: 45,
//                 expected: 9,
//             },
//             {
//                 a: -3,
//                 expected: -3,
//             },
//         ];
//
//         testData.forEach(data => {
//             const {a, expected} = data;
//             //WHEN
//             const actual = getSumNumbersValue(a);
//
//             it(`should return ${expected} when a = ${a}`, () => {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
//     describe('getMirrorValue', () => {
//         //GIVEN
//         const testData = [
//             {
//                 a: 123,
//                 expected: 321,
//             },
//             {
//                 a: 0,
//                 expected: 0,
//             },
//             {
//                 a: 45,
//                 expected: 54,
//             },
//             {
//                 a: -39,
//                 expected: -93,
//             },
//         ];
//
//         testData.forEach(data => {
//             const {a, expected} = data;
//             //WHEN
//             const actual = getMirrorValue(a);
//
//             it(`should return ${expected} when a = ${a}`, () => {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
// });
// describe('HomeWork tasks Funct', () => {
//     describe('getDayOfWeek', () => {
//         //GIVEN
//         const testData = [
//             {
//                 day: 1,
//                 expected: 'Monday',
//             },
//             {
//                 day: 2,
//                 expected: 'Tuesday',
//             },
//             {
//                 day: 3,
//                 expected: 'Wednesday',
//             },
//             {
//                 day: 4,
//                 expected: 'Thursday',
//             },
//             {
//                 day: 5,
//                 expected: 'Friday',
//             },
//             {
//                 day: 6,
//                 expected: 'Saturday',
//             },
//             {
//                 day: 7,
//                 expected: 'Sunday',
//             },
//             {
//                 day: 0,
//                 expected: 'undefined',
//             },
//             {
//                 day: 8,
//                 expected: 'undefined',
//             },
//         ];
//
//         testData.forEach(data => {
//             const {day, expected} = data;
//             //WHEN
//             const actual = getDayOfWeek(day);
//
//             it(`should return ${expected} when day = ${day}`, () => {
//                 //THEN
//                 assert.strictEqual(actual, expected);
//             })
//         });
//     });
// });

describe('HW3 AList', () => {
    describe('initArray', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                expected: [1, 2, 3, 4, 5],
            },
            {
                array: [],
                expected: [],
            },
            {
                array: null,
                expected: [],
            },
            {
                array: [1],
                expected: [1],
            },
            {
                array: [1, 2],
                expected: [1, 2],
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, expected} = data;

            const init = new AList(array);
            const actual = init.init(array);

            //THEN
            it(`should return ${expected} when array = [${[array]}]`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
    describe('getSize', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                expected: 5,
            },
            {
                array: [],
                expected: 0,
            },
            {
                array: null,
                expected: 0,
            },
            {
                array: [1],
                expected: 1,
            },
            {
                array: [1, 2],
                expected: 2,
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, expected} = data;

            const size = new AList(array);
            const actual = size.getSize(size.init(array));

            //THEN
            it(`should return ${expected} when array = [${[array]}]`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
    describe('push', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                value: 1,
                expected: [1, 2, 3, 4, 5, 1],
            },
            {
                array: [],
                value: 1,
                expected: [1],
            },
            {
                array: null,
                value: 1,
                expected: [1],
            },
            {
                array: [1],
                value: null,
                expected: [1, null],
            },
            {
                array: [1, 2],
                value: -3,
                expected: [1, 2, -3],
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, value, expected} = data;

            const init = new AList(array);
            init.init(array);
            const actual = init.push(value);

            //THEN
            it(`should return ${expected} when array = [${[array]}] and add value = ${value}`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
    describe('pop', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                expected: 5,
            },
            {
                array: [],
                expected: null,
            },
            {
                array: null,
                expected: null,
            },
            {
                array: [1],
                expected: 1,
            },
            {
                array: [1, 2],
                expected: 2,
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, value, expected} = data;

            const init = new AList(array);
            init.init(array);
            const actual = init.pop();

            //THEN
            it(`should return ${expected} when array = [${[array]}]`, () => {
                assert.strictEqual(actual, expected);
            })
        })
    });
    describe('unshift', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                value: 2,
                expected: 6,
            },
            {
                array: [],
                value: 0,
                expected: 1,
            },
            {
                array: null,
                value: null,
                expected: 1,
            },
            {
                array: [1],
                value: 0,
                expected: 2,
            },
            {
                array: [1, 2],
                value: undefined,
                expected: 3,
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, value, expected} = data;

            const init = new AList(array);
            init.init(array);
            const actual = init.unshift(value);

            //THEN
            it(`should return length ${expected} when array = [${[array]}] and value = ${value}`, () => {
                assert.strictEqual(actual, expected);
            })
        })
    });
    describe('shift', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                expected: 1,
            },
            {
                array: [],
                expected: null,
            },
            {
                array: null,
                expected: null,
            },
            {
                array: [1],
                expected: 1,
            },
            {
                array: [-5, 2],
                expected: -5,
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, expected} = data;

            const init = new AList(array);
            init.init(array);
            const actual = init.shift();

            //THEN
            it(`should return length ${expected} when array = [${[array]}]`, () => {
                assert.strictEqual(actual, expected);
            })
        })
    });
    describe('get', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                index: 3,
                expected: 4,
            },
            {
                array: [],
                index: 2,
                expected: null,
            },
            {
                array: null,
                index: 0,
                expected: null,
            },
            {
                array: [1],
                index: -3,
                expected: null,
            },
            {
                array: [-5, 2],
                index: 0,
                expected: -5,
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, index, expected} = data;

            const init = new AList(array);
            init.init(array);
            const actual = init.get(index);

            //THEN
            it(`should return value ${expected} when array = [${[array]}] and index = ${index}`, () => {
                assert.strictEqual(actual, expected);
            })
        })
    });
    describe('set', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                index: 3,
                value: 99,
                expected: [1, 2, 3, 99, 5],
            },
            {
                array: [],
                index: 2,
                value: -5,
                expected: [,,-5],
            },
            {
                array: null,
                index: 0,
                value: 4,
                expected: [4],
            },
            {
                array: [1],
                index: -3,
                value: -4,
                expected: [1],
            },
            {
                array: [-5, 2],
                index: 0,
                value: null,
                expected: [null, 2],
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, index, value, expected} = data;

            const init = new AList(array);
            init.init(array);
            const actual = init.set(index, value);

            //THEN
            it(`should return array ${expected} when array = [${[array]}] and index = ${index} and value = ${value}`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
    describe('sort', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                first: 2,
                second: 3,
                expected: [1, 2, 3, 4, 5],
            },
            {
                array: [1, 2, 3, 4, 5],
                first: 2,
                second: 1,
                expected: [5, 4, 3, 2, 1],
            },
            {
                array: [5, 4, 3, 2, 1],
                first: null,
                second: null,
                expected: [5, 4, 3, 2, 1],
            },
            {
                array: [1],
                first: 2,
                second: 3,
                expected: [1],
            },
            {
                array: [-5, 2],
                first: 1,
                second: -5,
                expected: [2, -5],
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, first, second, expected} = data;

            const init = new AList(array);
            init.init(array);
            const actual = init.sort(first, second);

            //THEN
            it(`should return array ${expected} when array = [${[array]}] and first = ${first} and second = ${second}`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
    describe('toString', () => {
        // GIVEN
        const testData = [
            {
                array: null,
                expected: "[]",
            },
            {
                array: [],
                expected: "[]",
            },
            {
                array: [1, 2, 3, 4, 5],
                expected: "[1, 2, 3, 4, 5]",
            },
            {
                array: [5, 4, 3, 2, 1],
                expected: "[5, 4, 3, 2, 1]",
            },
            {
                array: [1],
                expected: "[1]",
            },
            {
                array: [-5, 2],
                expected: "[-5, 2]",
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, expected} = data;

            const init = new AList(array);
            init.init(array);
            const actual = init.toString();

            //THEN
            it(`should return array ${expected} when array = [${[array]}]`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
});