/* Just Realization of stack via an array, without any tasks */
class Stack {
    constructor() {
        this._storage = [];
    }

    size() {
        return this._storage.length;
    }

    push(data) {
        this._storage.push(data);
    }

    pop() {
        if (!this._storage.length) {
            return null;
        }
        return this._storage.pop();
    }
}
   