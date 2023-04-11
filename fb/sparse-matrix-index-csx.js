"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparseMatrixIndexCSX = void 0;
const tslib_1 = require("tslib");
const flatbuffers = tslib_1.__importStar(require("flatbuffers"));
const buffer_js_1 = require("./buffer.js");
const int_js_1 = require("./int.js");
const sparse_matrix_compressed_axis_js_1 = require("./sparse-matrix-compressed-axis.js");
/**
 * Compressed Sparse format, that is matrix-specific.
 */
class SparseMatrixIndexCSX {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsSparseMatrixIndexCSX(bb, obj) {
        return (obj || new SparseMatrixIndexCSX()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsSparseMatrixIndexCSX(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new SparseMatrixIndexCSX()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    /**
     * Which axis, row or column, is compressed
     */
    compressedAxis() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt16(this.bb_pos + offset) : sparse_matrix_compressed_axis_js_1.SparseMatrixCompressedAxis.Row;
    }
    /**
     * The type of values in indptrBuffer
     */
    indptrType(obj) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new int_js_1.Int()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    /**
     * indptrBuffer stores the location and size of indptr array that
     * represents the range of the rows.
     * The i-th row spans from `indptr[i]` to `indptr[i+1]` in the data.
     * The length of this array is 1 + (the number of rows), and the type
     * of index value is long.
     *
     * For example, let X be the following 6x4 matrix:
     * ```text
     *   X := [[0, 1, 2, 0],
     *         [0, 0, 3, 0],
     *         [0, 4, 0, 5],
     *         [0, 0, 0, 0],
     *         [6, 0, 7, 8],
     *         [0, 9, 0, 0]].
     * ```
     * The array of non-zero values in X is:
     * ```text
     *   values(X) = [1, 2, 3, 4, 5, 6, 7, 8, 9].
     * ```
     * And the indptr of X is:
     * ```text
     *   indptr(X) = [0, 2, 3, 5, 5, 8, 10].
     * ```
     */
    indptrBuffer(obj) {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? (obj || new buffer_js_1.Buffer()).__init(this.bb_pos + offset, this.bb) : null;
    }
    /**
     * The type of values in indicesBuffer
     */
    indicesType(obj) {
        const offset = this.bb.__offset(this.bb_pos, 10);
        return offset ? (obj || new int_js_1.Int()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    /**
     * indicesBuffer stores the location and size of the array that
     * contains the column indices of the corresponding non-zero values.
     * The type of index value is long.
     *
     * For example, the indices of the above X is:
     * ```text
     *   indices(X) = [1, 2, 2, 1, 3, 0, 2, 3, 1].
     * ```
     * Note that the indices are sorted in lexicographical order for each row.
     */
    indicesBuffer(obj) {
        const offset = this.bb.__offset(this.bb_pos, 12);
        return offset ? (obj || new buffer_js_1.Buffer()).__init(this.bb_pos + offset, this.bb) : null;
    }
    static startSparseMatrixIndexCSX(builder) {
        builder.startObject(5);
    }
    static addCompressedAxis(builder, compressedAxis) {
        builder.addFieldInt16(0, compressedAxis, sparse_matrix_compressed_axis_js_1.SparseMatrixCompressedAxis.Row);
    }
    static addIndptrType(builder, indptrTypeOffset) {
        builder.addFieldOffset(1, indptrTypeOffset, 0);
    }
    static addIndptrBuffer(builder, indptrBufferOffset) {
        builder.addFieldStruct(2, indptrBufferOffset, 0);
    }
    static addIndicesType(builder, indicesTypeOffset) {
        builder.addFieldOffset(3, indicesTypeOffset, 0);
    }
    static addIndicesBuffer(builder, indicesBufferOffset) {
        builder.addFieldStruct(4, indicesBufferOffset, 0);
    }
    static endSparseMatrixIndexCSX(builder) {
        const offset = builder.endObject();
        builder.requiredField(offset, 6); // indptrType
        builder.requiredField(offset, 8); // indptrBuffer
        builder.requiredField(offset, 10); // indicesType
        builder.requiredField(offset, 12); // indicesBuffer
        return offset;
    }
}
exports.SparseMatrixIndexCSX = SparseMatrixIndexCSX;

//# sourceMappingURL=sparse-matrix-index-csx.js.map
