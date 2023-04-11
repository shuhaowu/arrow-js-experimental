"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyCompression = void 0;
const tslib_1 = require("tslib");
const flatbuffers = tslib_1.__importStar(require("flatbuffers"));
const body_compression_method_js_1 = require("./body-compression-method.js");
const compression_type_js_1 = require("./compression-type.js");
/**
 * Optional compression for the memory buffers constituting IPC message
 * bodies. Intended for use with RecordBatch but could be used for other
 * message types
 */
class BodyCompression {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsBodyCompression(bb, obj) {
        return (obj || new BodyCompression()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsBodyCompression(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new BodyCompression()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    /**
     * Compressor library.
     * For LZ4_FRAME, each compressed buffer must consist of a single frame.
     */
    codec() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : compression_type_js_1.CompressionType.LZ4_FRAME;
    }
    /**
     * Indicates the way the record batch body was compressed
     */
    method() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt8(this.bb_pos + offset) : body_compression_method_js_1.BodyCompressionMethod.BUFFER;
    }
    static startBodyCompression(builder) {
        builder.startObject(2);
    }
    static addCodec(builder, codec) {
        builder.addFieldInt8(0, codec, compression_type_js_1.CompressionType.LZ4_FRAME);
    }
    static addMethod(builder, method) {
        builder.addFieldInt8(1, method, body_compression_method_js_1.BodyCompressionMethod.BUFFER);
    }
    static endBodyCompression(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createBodyCompression(builder, codec, method) {
        BodyCompression.startBodyCompression(builder);
        BodyCompression.addCodec(builder, codec);
        BodyCompression.addMethod(builder, method);
        return BodyCompression.endBodyCompression(builder);
    }
}
exports.BodyCompression = BodyCompression;

//# sourceMappingURL=body-compression.js.map