"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionaryBatch = void 0;
const tslib_1 = require("tslib");
const flatbuffers = tslib_1.__importStar(require("flatbuffers"));
const record_batch_js_1 = require("./record-batch.js");
/**
 * For sending dictionary encoding information. Any Field can be
 * dictionary-encoded, but in this case none of its children may be
 * dictionary-encoded.
 * There is one vector / column per dictionary, but that vector / column
 * may be spread across multiple dictionary batches by using the isDelta
 * flag
 */
class DictionaryBatch {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsDictionaryBatch(bb, obj) {
        return (obj || new DictionaryBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsDictionaryBatch(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new DictionaryBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    id() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt64(this.bb_pos + offset) : BigInt('0');
    }
    data(obj) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new record_batch_js_1.RecordBatch()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    /**
     * If isDelta is true the values in the dictionary are to be appended to a
     * dictionary with the indicated id. If isDelta is false this dictionary
     * should replace the existing dictionary.
     */
    isDelta() {
        const offset = this.bb.__offset(this.bb_pos, 8);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    static startDictionaryBatch(builder) {
        builder.startObject(3);
    }
    static addId(builder, id) {
        builder.addFieldInt64(0, id, BigInt('0'));
    }
    static addData(builder, dataOffset) {
        builder.addFieldOffset(1, dataOffset, 0);
    }
    static addIsDelta(builder, isDelta) {
        builder.addFieldInt8(2, +isDelta, +false);
    }
    static endDictionaryBatch(builder) {
        const offset = builder.endObject();
        return offset;
    }
}
exports.DictionaryBatch = DictionaryBatch;

//# sourceMappingURL=dictionary-batch.js.map
