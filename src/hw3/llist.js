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
    this.unshiftList = value => {
        if (!root) {
            root = new Node(value);
            return root;
        }

        let current = root;

        let temp = new Node(value);
        temp.next = current;
        root = temp;

        return root;

    };
    this.shiftList = () => {
        if (!root) {
            return null;
        }

        let value = root.value;

        if (root.next === null) {
            root = null;
        } else {
            root = root.next;
        }

        return value;
    };
    this.getList = index => {
        if (!root || index < 0) {
            return null;
        }

        let count = 0;
        let value = root.value;

        while (count !== index) {
            if (root.next === null) {
                return null;
            }

            root = root.next;
            count++;
        }

        value = root.value;

        return value;
    };
    this.setList = (index, value) => {
        if (!root || index < 0) {
            if (index === 0) {
                root = new Node(value);
            } else {
                return null;
            }
        }

        let count = 0;
        let current = root;

        if (index !== null) {
            while (count !== index) {
                if (current.next === null) {
                    return null;
                }

                current = current.next;
                count++;
            }

            current.value = value;
        }

        return root;
    };
    this.sortList = (first, second) => {
        if (!root || this.getSizeList() === 0) {
            return null;
        }

        if (this.getSizeList() === 1) {
            return root;
        }

        if (this.compare(first, second)) {
            let current = root;
            let temp = root;

            for(let i = this.getSizeList(); i > 0; i--){
                for(let j = 0; j < i; j++) {
                    if (current.next !== null) {
                        if (current.value > current.next.value) {
                            temp = current.value;
                            current.value = current.next.value;
                            current.next.value = temp;
                        }

                        current = current.next;
                    }
                }

                current = root;
                temp = root;
            }

            return root;
        } else {
            let current = root;
            let temp = root;

            for(let i = this.getSizeList(); i > 0; i--){
                for(let j = 0; j < i; j++) {
                    if (current.next !== null) {
                        if (current.value < current.next.value) {
                            temp = current.value;
                            current.value = current.next.value;
                            current.next.value = temp;
                        }

                        current = current.next;
                    }
                }

                current = root;
                temp = root;
            }

            return root;
        }
    };

    this.compare = (first, second) => {
        if (!first && !second) {
            return false;
        }

        return first <= second ? true : false;
    };
};