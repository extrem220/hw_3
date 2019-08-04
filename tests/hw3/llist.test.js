describe('HW3 LList', () => {
    describe('initList', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                expected: {
                        value: 1,
                        next: {
                                value: 2,
                                next: {
                                    value: 3,
                                    next: {
                                        value: 4,
                                        next: {
                                            value: 5,
                                            next: null
                                        }
                                    }
                                }
                        }
                        },
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
                expected: {
                    value: 1,
                    next: null
                },
            },
            {
                array: [1, 2],
                expected: {
                    value: 1,
                    next: {
                        value: 2,
                        next: null
                    }
                },
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, expected} = data;

            const init = new LList();
            const actual = init.initList(array);

            //THEN
            it(`should return ${expected} when array = [${[array]}]`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
    describe('getSizeList', () => {
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

            const size = new LList();
            size.initList(array);
            const actual = size.getSizeList();

            //THEN
            it(`should return ${expected} when array = [${[array]}]`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
    describe('pushList', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                value: -5,
                expected: {
                    value: 1,
                    next: {
                        value: 2,
                        next: {
                            value: 3,
                            next: {
                                value: 4,
                                next: {
                                    value: 5,
                                    next: {
                                        value: -5,
                                        next: null
                                    }
                                }
                            }
                        }
                    }
                },
            },
            {
                array: [],
                value: 1,
                expected: {value: 1, next: null},
            },
            {
                array: null,
                value: 0,
                expected: {value: 0, next: null},
            },
            {
                array: [1],
                value: 2,
                expected: {
                    value: 1,
                    next: {
                        value: 2,
                        next: null
                    }
                },
            },
            {
                array: [1, 2],
                value: 9,
                expected: {
                    value: 1,
                    next: {
                        value: 2,
                        next: {
                            value: 9,
                            next: null
                        }
                    }
                },
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, value, expected} = data;

            const pushL = new LList();
            pushL.initList(array);
            const actual = pushL.pushList(value);

            //THEN
            it(`should return ${expected} when array = [${[array]}] and value = ${value}`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
    describe('popList', () => {
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
                array: [1, 2],
                expected: 2,
            },
            {
                array: [1],
                expected: 1,
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, expected} = data;

            const popL = new LList();
            popL.initList(array);
            const actual = popL.popList();

            //THEN
            it(`should return ${expected} when array = [${[array]}]`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
});