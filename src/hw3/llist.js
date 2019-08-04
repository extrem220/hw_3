const Node = function (value) {
    this.value = value;
    this.next = null;
};

const LList = function () {
    let root = null;
    let size = 0;

    this.initList = array => {
        if (!array || array.length === 0) {
            return root;
        }

        if (!root) {
            root = new Node(array[0]);
        }

        let current = root;
        let temp = null;

        for (let i = 1; i < array.length; i++) {
            temp = new Node(array[i]);
            current.next = temp;
            current = current.next;
        }

        return root;
    };

    this.getSizeList = () => {
        if (!root) {
            return size;
        }

        let current = root;

        if (current !== null) {
            size++;
        }

        while (current.next !== null) {
            size++;
            current = current.next;
        }

        return size;
    };

    this.pushList = value => {

        if (!root) {
            root = new Node(value);
            return root;
        }

        let current = root;
        while (current.next !== null) {
            current = current.next;
        }

        let temp = new Node(value);
        current.next = temp;

        return root;
    };

    this.popList = () => {
        if (!root) {
            return null;
        }

        let current = root;
        let value = current.value;

        if (current.next) {
            while (current.next.next !== null) {
                current = current.next;
            }

            value = current.next.value;
            current.next = null;
        } else {
            current = null;
        }

        return value;

    }
};