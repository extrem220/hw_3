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
    describe('unshiftList', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                value: -5,
                expected: {
                    value: -5,
                    next: {
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
                    value: 2,
                    next: {
                        value: 1,
                        next: null
                    }
                },
            },
            {
                array: [1, 2],
                value: 9,
                expected: {
                    value: 9,
                    next: {
                        value: 1,
                        next: {
                            value: 2,
                            next: null
                        }
                    }
                },
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, value, expected} = data;

            const unshiftL = new LList();
            unshiftL.initList(array);
            const actual = unshiftL.unshiftList(value);

            //THEN
            it(`should return ${expected} when array = [${[array]}] and value = ${value}`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
    describe('shiftList', () => {
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
                array: [1, 2],
                expected: 1,
            },
            {
                array: [1],
                expected: 1,
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, expected} = data;

            const shiftL = new LList();
            shiftL.initList(array);
            const actual = shiftL.shiftList();

            //THEN
            it(`should return ${expected} when array = [${[array]}]`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
    describe('getList', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                value: 0,
                expected: 1,
            },
            {
                array: [1, 2, 3, 4, 5],
                value: -2,
                expected: null,
            },
            {
                array: [],
                value: -7,
                expected: null,
            },
            {
                array: [],
                value: 7,
                expected: null,
            },
            {
                array: null,
                value: null,
                expected: null,
            },
            {
                array: [1, 2],
                value: 1,
                expected: 2,
            },
            {
                array: [1],
                value: 0,
                expected: 1,
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, value, expected} = data;

            const getL = new LList();
            getL.initList(array);
            const actual = getL.getList(value);

            //THEN
            it(`should return ${expected} when array = [${[array]}] and value = ${value}`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
    describe('setList', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                index: 3,
                value: 243,
                expected: {
                    value: 1,
                    next: {
                        value: 2,
                        next: {
                            value: 3,
                            next: {
                                value: 243,
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
                index: 0,
                value: 0,
                expected: {value: 0, next: null},
            },
            {
                array: null,
                index: null,
                value: null,
                expected: null,
            },
            {
                array: [1],
                index: 0,
                value: 6,
                expected: {
                    value: 6,
                    next: null
                },
            },
            {
                array: [1, 2],
                index: 8,
                value: 4,
                expected: null,
            },
            {
                array: [1, 2],
                index: -3,
                value: 4,
                expected: null,
            },
            {
                array: [1, 2],
                index: null,
                value: 4,
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
            const {array, index, value, expected} = data;

            const setL = new LList();
            setL.initList(array);
            const actual = setL.setList(index, value);

            //THEN
            it(`should return ${expected} when array = [${[array]}] , index = ${index}, and value = ${value}`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
    describe('sortList', () => {
        // GIVEN
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                first: 3,
                second: 243,
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
                                    next: null,
                                },
                            },
                        },
                    },
                },
            },
            {
                array: [],
                first: 1,
                second: 2,
                expected: null,
            },
            {
                array: null,
                first: 4,
                second: 5,
                expected: null,
            },
            {
                array: [1],
                first: 0,
                second: 0,
                expected: {
                    value: 1,
                    next: null,
                },
            },
            {
                array: [56, 2],
                first: 2,
                second: 5,
                expected: {
                    value: 56,
                    next: {
                        value: 2,
                        next: null,
                    },
                },
            },
            {
                array: [100, 2, 5, 1, 58, 136],
                first: -3,
                second: 4,
                expected: {
                    value: 1,
                    next: {
                        value: 2,
                        next: {
                            value: 5,
                            next: {
                                value: 58,
                                next: {
                                    value: 100,
                                    next: {
                                        value: 136,
                                        next: null,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            {
                array: [1, 2],
                first: null,
                second: 4,
                expected: {
                    value: 1,
                    next: {
                        value: 2,
                        next: null,
                    }
                },
            },
            {
                array: [100, 2, 5, 1, 58, 136],
                first: 16,
                second: 4,
                expected: {
                    value: 136,
                    next: {
                        value: 100,
                        next: {
                            value: 58,
                            next: {
                                value: 5,
                                next: {
                                    value: 2,
                                    next: {
                                        value: 1,
                                        next: null,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            {
                array: [1, 2],
                first: 4,
                second: null,
                expected: {
                    value: 2,
                    next: {
                        value: 1,
                        next: null,
                    },
                },
            },
            {
                array: [57],
                first: 7,
                second: 0,
                expected: {
                    value: 57,
                    next: null,
                },
            },
        ];

        //WHEN
        testData.forEach(data => {
            const {array, first, second, expected} = data;

            const sortL = new LList();
            sortL.initList(array);
            const actual = sortL.sortList(first, second);

            //THEN
            it(`should return ${expected} when array = [${[array]}] , first = ${index}, and second = ${value}`, () => {
                assert.deepEqual(actual, expected);
            })
        })
    });
});