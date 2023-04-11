"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = void 0;
const tslib_1 = require("tslib");
const flatbuffers = tslib_1.__importStar(require("flatbuffers"));
const time_unit_js_1 = require("./time-unit.js");
class Duration {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsDuration(bb, obj) {
        return (obj || new Duration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsDuration(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Duration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    unit() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt16(this.bb_pos + offset) : time_unit_js_1.TimeUnit.MILLISECOND;
    }
    static startDuration(builder) {
        builder.startObject(1);
    }
    static addUnit(builder, unit) {
        builder.addFieldInt16(0, unit, time_unit_js_1.TimeUnit.MILLISECOND);
    }
    static endDuration(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createDuration(builder, unit) {
        Duration.startDuration(builder);
        Duration.addUnit(builder, unit);
        return Duration.endDuration(builder);
    }
}
exports.Duration = Duration;

//# sourceMappingURL=duration.js.map
