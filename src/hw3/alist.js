const AList = function (num) {

    let array = [];
    let size = 0;

    this.init = arr => {
       array = [];

        if (!arr) {
            return [];
        }

        for (let i = 0; i < this.getSize(arr); i++) {
            array[i] = arr[i];
        }

        return array;
    };
    this.getSize = arr => {
        let i = 0;
        size = 0;

        while (arr[i]) {
            size++;
            i++;
        }

        return size;
    };
    this.push = value => {
        array[size] = value;
        size++;

        return array;
    };
    this.pop = () => {
        if (array.length === 0) {
            return null;
        }

        size--;

        let value = array[size];
        array.length = size;

        return value;
    };
    this.unshift = value => {
        size = array.length + 1;
        let i = size - 1;

        while (i >= 0) {
            array[i] = array[i-1];
            i--;
        }

        array[0] = value;

        return size;
    };
    this.shift = () => {

        if (array.length === 0) {
            return null;
        }

        let value = array[0];
        let i = 0;

        while (i < array.length-1) {
            array[i] = array[i+1];
            i++;
        }

        return value;

    };
    this.slice = (start, end) => {
        if (array.length === 0) {
            return null;
        }
    };

    this.get = index => {
        if (array.length === 0) {
            return null;
        }

        let value = null;

        for (let i = 0; i < array.length; i++) {
            if (i === index) {
                value = array[i];
            }
        }

        return value;

    };
    this.set = (index, value) => {
        if (index < 0) {
            return array;
        }

        array[index] = value;

        return array;
    };
    this.compare = (first, second) => {
        if (!first && !second) {
            return false;
        }

        return first <= second ? true : false;
    };

    this.sort = (first, second) => {
        if (this.compare(first, second)) {
            let temp = 0;

            for(let i = array.length-1; i > 0; i--){
                for(let j = 0; j < i; j++){
                    if(array[j] > array[j+1]){
                        temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }
            }

            return array;
        } else {
            let temp = 0;

            for(let i = array.length-1; i > 0; i--){
                for(let j = 0; j < i; j++){
                    if(array[j] < array[j+1]){
                        temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }
            }

            return array;
        }
    };
    this.toString = () => {
        let resp = '[';

        for (let i = 0; i < array.length; i++) {
            if (i === array.length-1) {
                resp += `${array[i]}`;
            } else {
                resp += `${array[i]}, `;
            }
        }

        resp += ']';

        return resp;
    };

};