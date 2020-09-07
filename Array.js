const MemoryClass = require("./memory");

const memory = new MemoryClass();

class Array {
	constructor() {
		this.length = 0;
		this._capacity = 0;
		this.ptr = memory.allocate(this.length); // Points to the memory address of the array when initialized, so the 0 index
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return undefined;
		}
		return memory.get(this.ptr + index);
	}

	push(value) {
		// Make space for the new item
		this._resize((this.length + 1) * Array.SIZE_RATIO);
		// Because the memory is stored in contiguous order, you simply add the length to the initial pointer to find the array index that you want.
		memory.set(this.ptr + this.length, value);
		this.length++;
	}

	pop() {
		// O(1) constant time
		if (this.length == 0) {
			throw new Error("index error");
		}
		const value = memory.get(this.ptr + this.length - 1);
		this.length--;
		return value;
	}

	insert(index, value) {
		// Worst case O(n)
		if (index < 0 || index >= this.length) {
			throw new Error("Index error");
		}

		if (this.length >= this._capacity) {
			this._resize((this.length + 1) * Array.SIZE_RATIO);
		}

		memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
		memory.set(this.ptr + index, value);
		this.length++;
	}

	delete(index) {
		if (index < 0 || index >= this.length) {
			throw new Error("Index error");
		}

		// Shift all values left in the array
		memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
		this.length--;
	}

	_resize(size) {
		// O(n) linear time
		const oldPtr = this.ptr;
		this.ptr = memory.allocate(size);
		if (this.ptr === null) {
			throw Error("Out of memory!");
		}
		memory.copy(this.ptr, oldPtr, this.length);
		memory.free(oldPtr);
		this._capacity = size;
	}
}
Array.SIZE_RATIO = 3;



module.exports = Array;
