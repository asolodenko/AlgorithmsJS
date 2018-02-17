/* Just Realization of queue via an array, without any tasks */
class Queue {
    constructor() {
        this._storage = [];
    }

    size() {
        return this._storage.length;
    }

    enqueue(data) {
        this._storage.push(data);
    }

    dequeue() {
        if (!this._storage.length) {
            return null;
        }
        return this._storage.shift();
    }
}
   