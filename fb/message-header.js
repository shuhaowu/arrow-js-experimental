"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
Object.defineProperty(exports, "__esModule", { value: true });
exports.unionListToMessageHeader = exports.unionToMessageHeader = exports.MessageHeader = void 0;
const dictionary_batch_js_1 = require("./dictionary-batch.js");
const record_batch_js_1 = require("./record-batch.js");
const schema_js_1 = require("./schema.js");
const sparse_tensor_js_1 = require("./sparse-tensor.js");
const tensor_js_1 = require("./tensor.js");
/**
 * ----------------------------------------------------------------------
 * The root Message type
 * This union enables us to easily send different message types without
 * redundant storage, and in the future we can easily add new message types.
 *
 * Arrow implementations do not need to implement all of the message types,
 * which may include experimental metadata types. For maximum compatibility,
 * it is best to send data using RecordBatch
 */
var MessageHeader;
(function (MessageHeader) {
    MessageHeader[MessageHeader["NONE"] = 0] = "NONE";
    MessageHeader[MessageHeader["Schema"] = 1] = "Schema";
    MessageHeader[MessageHeader["DictionaryBatch"] = 2] = "DictionaryBatch";
    MessageHeader[MessageHeader["RecordBatch"] = 3] = "RecordBatch";
    MessageHeader[MessageHeader["Tensor"] = 4] = "Tensor";
    MessageHeader[MessageHeader["SparseTensor"] = 5] = "SparseTensor";
})(MessageHeader = exports.MessageHeader || (exports.MessageHeader = {}));
function unionToMessageHeader(type, accessor) {
    switch (MessageHeader[type]) {
        case 'NONE': return null;
        case 'Schema': return accessor(new schema_js_1.Schema());
        case 'DictionaryBatch': return accessor(new dictionary_batch_js_1.DictionaryBatch());
        case 'RecordBatch': return accessor(new record_batch_js_1.RecordBatch());
        case 'Tensor': return accessor(new tensor_js_1.Tensor());
        case 'SparseTensor': return accessor(new sparse_tensor_js_1.SparseTensor());
        default: return null;
    }
}
exports.unionToMessageHeader = unionToMessageHeader;
function unionListToMessageHeader(type, accessor, index) {
    switch (MessageHeader[type]) {
        case 'NONE': return null;
        case 'Schema': return accessor(index, new schema_js_1.Schema());
        case 'DictionaryBatch': return accessor(index, new dictionary_batch_js_1.DictionaryBatch());
        case 'RecordBatch': return accessor(index, new record_batch_js_1.RecordBatch());
        case 'Tensor': return accessor(index, new tensor_js_1.Tensor());
        case 'SparseTensor': return accessor(index, new sparse_tensor_js_1.SparseTensor());
        default: return null;
    }
}
exports.unionListToMessageHeader = unionListToMessageHeader;

//# sourceMappingURL=message-header.js.map
