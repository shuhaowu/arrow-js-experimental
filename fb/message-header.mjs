// automatically generated by the FlatBuffers compiler, do not modify
import { DictionaryBatch } from './dictionary-batch.mjs';
import { RecordBatch } from './record-batch.mjs';
import { Schema } from './schema.mjs';
import { SparseTensor } from './sparse-tensor.mjs';
import { Tensor } from './tensor.mjs';
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
export var MessageHeader;
(function (MessageHeader) {
    MessageHeader[MessageHeader["NONE"] = 0] = "NONE";
    MessageHeader[MessageHeader["Schema"] = 1] = "Schema";
    MessageHeader[MessageHeader["DictionaryBatch"] = 2] = "DictionaryBatch";
    MessageHeader[MessageHeader["RecordBatch"] = 3] = "RecordBatch";
    MessageHeader[MessageHeader["Tensor"] = 4] = "Tensor";
    MessageHeader[MessageHeader["SparseTensor"] = 5] = "SparseTensor";
})(MessageHeader || (MessageHeader = {}));
export function unionToMessageHeader(type, accessor) {
    switch (MessageHeader[type]) {
        case 'NONE': return null;
        case 'Schema': return accessor(new Schema());
        case 'DictionaryBatch': return accessor(new DictionaryBatch());
        case 'RecordBatch': return accessor(new RecordBatch());
        case 'Tensor': return accessor(new Tensor());
        case 'SparseTensor': return accessor(new SparseTensor());
        default: return null;
    }
}
export function unionListToMessageHeader(type, accessor, index) {
    switch (MessageHeader[type]) {
        case 'NONE': return null;
        case 'Schema': return accessor(index, new Schema());
        case 'DictionaryBatch': return accessor(index, new DictionaryBatch());
        case 'RecordBatch': return accessor(index, new RecordBatch());
        case 'Tensor': return accessor(index, new Tensor());
        case 'SparseTensor': return accessor(index, new SparseTensor());
        default: return null;
    }
}

//# sourceMappingURL=message-header.mjs.map
