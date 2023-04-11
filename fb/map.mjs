// automatically generated by the FlatBuffers compiler, do not modify
import * as flatbuffers from 'flatbuffers';
/**
 * A Map is a logical nested type that is represented as
 *
 * List<entries: Struct<key: K, value: V>>
 *
 * In this layout, the keys and values are each respectively contiguous. We do
 * not constrain the key and value types, so the application is responsible
 * for ensuring that the keys are hashable and unique. Whether the keys are sorted
 * may be set in the metadata for this field.
 *
 * In a field with Map type, the field has a child Struct field, which then
 * has two children: key type and the second the value type. The names of the
 * child fields may be respectively "entries", "key", and "value", but this is
 * not enforced.
 *
 * Map
 * ```text
 *   - child[0] entries: Struct
 *     - child[0] key: K
 *     - child[1] value: V
 * ```
 * Neither the "entries" field nor the "key" field may be nullable.
 *
 * The metadata is structured so that Arrow systems without special handling
 * for Map can make Map an alias for List. The "layout" attribute for the Map
 * field must have the same contents as a List.
 */
export class Map {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsMap(bb, obj) {
        return (obj || new Map()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsMap(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new Map()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    /**
     * Set to true if the keys within each value are sorted
     */
    keysSorted() {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
    }
    static startMap(builder) {
        builder.startObject(1);
    }
    static addKeysSorted(builder, keysSorted) {
        builder.addFieldInt8(0, +keysSorted, +false);
    }
    static endMap(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createMap(builder, keysSorted) {
        Map.startMap(builder);
        Map.addKeysSorted(builder, keysSorted);
        return Map.endMap(builder);
    }
}

//# sourceMappingURL=map.mjs.map
