"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeBinary = void 0;
const tslib_1 = require("tslib");
const flatbuffers = tslib_1.__importStar(require("flatbuffers"));
/**
 * Same as Binary, but with 64-bit offsets, allowing to represent
 * extremely large data values.
 */
class LargeBinary {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsLargeBinary(bb, obj) {
        return (obj || new LargeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsLargeBinary(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new LargeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static startLargeBinary(builder) {
        builder.startObject(0);
    }
    static endLargeBinary(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createLargeBinary(builder) {
        LargeBinary.startLargeBinary(builder);
        return LargeBinary.endLargeBinary(builder);
    }
}
exports.LargeBinary = LargeBinary;

//# sourceMappingURL=large-binary.js.map