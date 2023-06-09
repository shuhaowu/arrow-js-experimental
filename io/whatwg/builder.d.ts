import { DataType } from '../../type.js';
import { Vector } from '../../vector.js';
import { Builder, BuilderOptions } from '../../builder.js';
/** @ignore */
export interface BuilderTransformOptions<T extends DataType = any, TNull = any> extends BuilderOptions<T, TNull> {
    queueingStrategy?: 'bytes' | 'count';
    dictionaryHashFunction?: (value: any) => string | number;
    readableStrategy?: {
        highWaterMark?: number;
        size?: any;
        type?: 'bytes';
    };
    writableStrategy?: {
        highWaterMark?: number;
        size?: any;
        type?: 'bytes';
    };
    valueToChildTypeId?: (builder: Builder<T, TNull>, value: any, offset: number) => number;
}
/** @ignore */
export declare function builderThroughDOMStream<T extends DataType = any, TNull = any>(options: BuilderTransformOptions<T, TNull>): BuilderTransform<T, TNull>;
/** @ignore */
export declare class BuilderTransform<T extends DataType = any, TNull = any> {
    readable: ReadableStream<Vector<T>>;
    writable: WritableStream<T['TValue'] | TNull>;
    _controller: ReadableStreamDefaultController<Vector<T>> | null;
    private _numChunks;
    private _finished;
    private _bufferedSize;
    private _builder;
    private _getSize;
    constructor(options: BuilderTransformOptions<T, TNull>);
    private _writeValueAndReturnChunkSize;
    private _maybeFlush;
    private _enqueue;
}
