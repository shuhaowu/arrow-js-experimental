"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.unionListToType = exports.unionToType = exports.Type = void 0;
const binary_js_1 = require("./binary.js");
const bool_js_1 = require("./bool.js");
const date_js_1 = require("./date.js");
const decimal_js_1 = require("./decimal.js");
const duration_js_1 = require("./duration.js");
const fixed_size_binary_js_1 = require("./fixed-size-binary.js");
const fixed_size_list_js_1 = require("./fixed-size-list.js");
const floating_point_js_1 = require("./floating-point.js");
const int_js_1 = require("./int.js");
const interval_js_1 = require("./interval.js");
const large_binary_js_1 = require("./large-binary.js");
const large_list_js_1 = require("./large-list.js");
const large_utf8_js_1 = require("./large-utf8.js");
const list_js_1 = require("./list.js");
const map_js_1 = require("./map.js");
const null_js_1 = require("./null.js");
const run_end_encoded_js_1 = require("./run-end-encoded.js");
const struct__js_1 = require("./struct-.js");
const time_js_1 = require("./time.js");
const timestamp_js_1 = require("./timestamp.js");
const union_js_1 = require("./union.js");
const utf8_js_1 = require("./utf8.js");
/**
 * ----------------------------------------------------------------------
 * Top-level Type value, enabling extensible type-specific metadata. We can
 * add new logical types to Type without breaking backwards compatibility
 */
var Type;
(function (Type) {
    Type[Type["NONE"] = 0] = "NONE";
    Type[Type["Null"] = 1] = "Null";
    Type[Type["Int"] = 2] = "Int";
    Type[Type["FloatingPoint"] = 3] = "FloatingPoint";
    Type[Type["Binary"] = 4] = "Binary";
    Type[Type["Utf8"] = 5] = "Utf8";
    Type[Type["Bool"] = 6] = "Bool";
    Type[Type["Decimal"] = 7] = "Decimal";
    Type[Type["Date"] = 8] = "Date";
    Type[Type["Time"] = 9] = "Time";
    Type[Type["Timestamp"] = 10] = "Timestamp";
    Type[Type["Interval"] = 11] = "Interval";
    Type[Type["List"] = 12] = "List";
    Type[Type["Struct_"] = 13] = "Struct_";
    Type[Type["Union"] = 14] = "Union";
    Type[Type["FixedSizeBinary"] = 15] = "FixedSizeBinary";
    Type[Type["FixedSizeList"] = 16] = "FixedSizeList";
    Type[Type["Map"] = 17] = "Map";
    Type[Type["Duration"] = 18] = "Duration";
    Type[Type["LargeBinary"] = 19] = "LargeBinary";
    Type[Type["LargeUtf8"] = 20] = "LargeUtf8";
    Type[Type["LargeList"] = 21] = "LargeList";
    Type[Type["RunEndEncoded"] = 22] = "RunEndEncoded";
})(Type = exports.Type || (exports.Type = {}));
function unionToType(type, accessor) {
    switch (Type[type]) {
        case 'NONE': return null;
        case 'Null': return accessor(new null_js_1.Null());
        case 'Int': return accessor(new int_js_1.Int());
        case 'FloatingPoint': return accessor(new floating_point_js_1.FloatingPoint());
        case 'Binary': return accessor(new binary_js_1.Binary());
        case 'Utf8': return accessor(new utf8_js_1.Utf8());
        case 'Bool': return accessor(new bool_js_1.Bool());
        case 'Decimal': return accessor(new decimal_js_1.Decimal());
        case 'Date': return accessor(new date_js_1.Date());
        case 'Time': return accessor(new time_js_1.Time());
        case 'Timestamp': return accessor(new timestamp_js_1.Timestamp());
        case 'Interval': return accessor(new interval_js_1.Interval());
        case 'List': return accessor(new list_js_1.List());
        case 'Struct_': return accessor(new struct__js_1.Struct_());
        case 'Union': return accessor(new union_js_1.Union());
        case 'FixedSizeBinary': return accessor(new fixed_size_binary_js_1.FixedSizeBinary());
        case 'FixedSizeList': return accessor(new fixed_size_list_js_1.FixedSizeList());
        case 'Map': return accessor(new map_js_1.Map());
        case 'Duration': return accessor(new duration_js_1.Duration());
        case 'LargeBinary': return accessor(new large_binary_js_1.LargeBinary());
        case 'LargeUtf8': return accessor(new large_utf8_js_1.LargeUtf8());
        case 'LargeList': return accessor(new large_list_js_1.LargeList());
        case 'RunEndEncoded': return accessor(new run_end_encoded_js_1.RunEndEncoded());
        default: return null;
    }
}
exports.unionToType = unionToType;
function unionListToType(type, accessor, index) {
    switch (Type[type]) {
        case 'NONE': return null;
        case 'Null': return accessor(index, new null_js_1.Null());
        case 'Int': return accessor(index, new int_js_1.Int());
        case 'FloatingPoint': return accessor(index, new floating_point_js_1.FloatingPoint());
        case 'Binary': return accessor(index, new binary_js_1.Binary());
        case 'Utf8': return accessor(index, new utf8_js_1.Utf8());
        case 'Bool': return accessor(index, new bool_js_1.Bool());
        case 'Decimal': return accessor(index, new decimal_js_1.Decimal());
        case 'Date': return accessor(index, new date_js_1.Date());
        case 'Time': return accessor(index, new time_js_1.Time());
        case 'Timestamp': return accessor(index, new timestamp_js_1.Timestamp());
        case 'Interval': return accessor(index, new interval_js_1.Interval());
        case 'List': return accessor(index, new list_js_1.List());
        case 'Struct_': return accessor(index, new struct__js_1.Struct_());
        case 'Union': return accessor(index, new union_js_1.Union());
        case 'FixedSizeBinary': return accessor(index, new fixed_size_binary_js_1.FixedSizeBinary());
        case 'FixedSizeList': return accessor(index, new fixed_size_list_js_1.FixedSizeList());
        case 'Map': return accessor(index, new map_js_1.Map());
        case 'Duration': return accessor(index, new duration_js_1.Duration());
        case 'LargeBinary': return accessor(index, new large_binary_js_1.LargeBinary());
        case 'LargeUtf8': return accessor(index, new large_utf8_js_1.LargeUtf8());
        case 'LargeList': return accessor(index, new large_list_js_1.LargeList());
        case 'RunEndEncoded': return accessor(index, new run_end_encoded_js_1.RunEndEncoded());
        default: return null;
    }
}
exports.unionListToType = unionListToType;

//# sourceMappingURL=type.js.map
