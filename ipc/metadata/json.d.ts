import { Schema, Field } from '../../schema.js';
import { DataType } from '../../type.js';
import { DictionaryBatch, RecordBatch } from './message.js';
/** @ignore */
export declare function schemaFromJSON(_schema: any, dictionaries?: Map<number, DataType>): Schema<any>;
/** @ignore */
export declare function recordBatchFromJSON(b: any): RecordBatch;
/** @ignore */
export declare function dictionaryBatchFromJSON(b: any): DictionaryBatch;
/** @ignore */
export declare function fieldFromJSON(_field: any, dictionaries?: Map<number, DataType>): Field<any>;
