// automatically generated by the FlatBuffers compiler, do not modify
import * as flatbuffers from 'flatbuffers';
import { TimeUnit } from './time-unit.mjs';
/**
 * Time is either a 32-bit or 64-bit signed integer type representing an
 * elapsed time since midnight, stored in either of four units: seconds,
 * milliseconds, microseconds or nanoseconds.
 *
 * The integer `bitWidth` depends on the `unit` and must be one of the following:
 * * SECOND and MILLISECOND: 32 bits
 * * MICROSECOND and NANOSECOND: 64 bits
 *
 * The allowed values are between 0 (inclusive) and 86400 (=24*60*60) seconds
 * (exclusive), adjusted for the time unit (for example, up to 86400000
 * exclusive for the MILLISECOND unit).
 * This definition doesn't allow for leap seconds. Time values from
 * measurements with leap seconds will need to be corrected when ingesting
 * into Arrow (for example by replacing the value 86400 with 86399).
 */
export class Time {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsTime(bb, obj) {
        return (obj || new Time()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsTime(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Time()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    unit() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.readInt16(this.bb_pos + offset) : TimeUnit.MILLISECOND;
    }
    bitWidth() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readInt32(this.bb_pos + offset) : 32;
    }
    static startTime(builder) {
        builder.startObject(2);
    }
    static addUnit(builder, unit) {
        builder.addFieldInt16(0, unit, TimeUnit.MILLISECOND);
    }
    static addBitWidth(builder, bitWidth) {
        builder.addFieldInt32(1, bitWidth, 32);
    }
    static endTime(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createTime(builder, unit, bitWidth) {
        Time.startTime(builder);
        Time.addUnit(builder, unit);
        Time.addBitWidth(builder, bitWidth);
        return Time.endTime(builder);
    }
}

//# sourceMappingURL=time.mjs.map
