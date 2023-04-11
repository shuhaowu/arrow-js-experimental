// automatically generated by the FlatBuffers compiler, do not modify
/**
 * ----------------------------------------------------------------------
 * A Buffer represents a single contiguous memory segment
 */
export class Buffer {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    /**
     * The relative offset into the shared memory page where the bytes for this
     * buffer starts
     */
    offset() {
        return this.bb.readInt64(this.bb_pos);
    }
    /**
     * The absolute length (in bytes) of the memory buffer. The memory is found
     * from offset (inclusive) to offset + length (non-inclusive). When building
     * messages using the encapsulated IPC message, padding bytes may be written
     * after a buffer, but such padding bytes do not need to be accounted for in
     * the size here.
     */
    length() {
        return this.bb.readInt64(this.bb_pos + 8);
    }
    static sizeOf() {
        return 16;
    }
    static createBuffer(builder, offset, length) {
        builder.prep(8, 16);
        builder.writeInt64(BigInt(length !== null && length !== void 0 ? length : 0));
        builder.writeInt64(BigInt(offset !== null && offset !== void 0 ? offset : 0));
        return builder.offset();
    }
}

//# sourceMappingURL=buffer.mjs.map
