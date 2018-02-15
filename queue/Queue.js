/* Just Realization of queue using class declaration, without any tasks */
class Queue {
    constructor() {
        this._oldestIndex = 0;
        this._newestIndex = 0;
        this._storage = {};
    }

    size() {
        return this._newestIndex - this._oldestIndex + 1;
    }

    enqueue(data) {
        this._storage[this._newestIndex++] = data;
    }

    dequeue() {
        if (this._oldestIndex !== this._newestIndex) {
            var oldestIndex = this._oldestIndex,
            deletedData = this._storage[oldestIndex];
            
            delete this._storage[oldestIndex];
            this._oldestIndex++;
            
            return deletedData;
        }
    }
}
   