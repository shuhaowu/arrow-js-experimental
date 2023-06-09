"use strict";
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFlatbuffersByteBuffer = exports.isReadableNodeStream = exports.isWritableNodeStream = exports.isReadableDOMStream = exports.isWritableDOMStream = exports.isFetchResponse = exports.isFSReadStream = exports.isFileHandle = exports.isUnderlyingSink = exports.isIteratorResult = exports.isArrayLike = exports.isArrowJSON = exports.isAsyncIterable = exports.isIterable = exports.isObservable = exports.isPromise = exports.isObject = exports.BigUint64ArrayAvailable = exports.BigUint64Array = exports.BigInt64ArrayAvailable = exports.BigInt64Array = void 0;
/** @ignore */
const [BigInt64ArrayCtor, BigInt64ArrayAvailable] = (() => {
    const BigInt64ArrayUnavailableError = () => { throw new Error('BigInt64Array is not available in this environment'); };
    class BigInt64ArrayUnavailable {
        static get BYTES_PER_ELEMENT() { return 8; }
        static of() { throw BigInt64ArrayUnavailableError(); }
        static from() { throw BigInt64ArrayUnavailableError(); }
        constructor() { throw BigInt64ArrayUnavailableError(); }
    }
    return typeof BigInt64Array !== 'undefined' ? [BigInt64Array, true] : [BigInt64ArrayUnavailable, false];
})();
exports.BigInt64Array = BigInt64ArrayCtor;
exports.BigInt64ArrayAvailable = BigInt64ArrayAvailable;
/** @ignore */
const [BigUint64ArrayCtor, BigUint64ArrayAvailable] = (() => {
    const BigUint64ArrayUnavailableError = () => { throw new Error('BigUint64Array is not available in this environment'); };
    class BigUint64ArrayUnavailable {
        static get BYTES_PER_ELEMENT() { return 8; }
        static of() { throw BigUint64ArrayUnavailableError(); }
        static from() { throw BigUint64ArrayUnavailableError(); }
        constructor() { throw BigUint64ArrayUnavailableError(); }
    }
    return typeof BigUint64Array !== 'undefined' ? [BigUint64Array, true] : [BigUint64ArrayUnavailable, false];
})();
exports.BigUint64Array = BigUint64ArrayCtor;
exports.BigUint64ArrayAvailable = BigUint64ArrayAvailable;
/** @ignore */ const isNumber = (x) => typeof x === 'number';
/** @ignore */ const isBoolean = (x) => typeof x === 'boolean';
/** @ignore */ const isFunction = (x) => typeof x === 'function';
/** @ignore */
// eslint-disable-next-line @typescript-eslint/ban-types
const isObject = (x) => x != null && Object(x) === x;
exports.isObject = isObject;
/** @ignore */
const isPromise = (x) => {
    return (0, exports.isObject)(x) && isFunction(x.then);
};
exports.isPromise = isPromise;
/** @ignore */
const isObservable = (x) => {
    return (0, exports.isObject)(x) && isFunction(x.subscribe);
};
exports.isObservable = isObservable;
/** @ignore */
const isIterable = (x) => {
    return (0, exports.isObject)(x) && isFunction(x[Symbol.iterator]);
};
exports.isIterable = isIterable;
/** @ignore */
const isAsyncIterable = (x) => {
    return (0, exports.isObject)(x) && isFunction(x[Symbol.asyncIterator]);
};
exports.isAsyncIterable = isAsyncIterable;
/** @ignore */
const isArrowJSON = (x) => {
    return (0, exports.isObject)(x) && (0, exports.isObject)(x['schema']);
};
exports.isArrowJSON = isArrowJSON;
/** @ignore */
const isArrayLike = (x) => {
    return (0, exports.isObject)(x) && isNumber(x['length']);
};
exports.isArrayLike = isArrayLike;
/** @ignore */
const isIteratorResult = (x) => {
    return (0, exports.isObject)(x) && ('done' in x) && ('value' in x);
};
exports.isIteratorResult = isIteratorResult;
/** @ignore */
const isUnderlyingSink = (x) => {
    return (0, exports.isObject)(x) &&
        isFunction(x['abort']) &&
        isFunction(x['close']) &&
        isFunction(x['start']) &&
        isFunction(x['write']);
};
exports.isUnderlyingSink = isUnderlyingSink;
/** @ignore */
const isFileHandle = (x) => {
    return (0, exports.isObject)(x) && isFunction(x['stat']) && isNumber(x['fd']);
};
exports.isFileHandle = isFileHandle;
/** @ignore */
const isFSReadStream = (x) => {
    return (0, exports.isReadableNodeStream)(x) && isNumber(x['bytesRead']);
};
exports.isFSReadStream = isFSReadStream;
/** @ignore */
const isFetchResponse = (x) => {
    return (0, exports.isObject)(x) && (0, exports.isReadableDOMStream)(x['body']);
};
exports.isFetchResponse = isFetchResponse;
const isReadableInterop = (x) => ('_getDOMStream' in x && '_getNodeStream' in x);
/** @ignore */
const isWritableDOMStream = (x) => {
    return (0, exports.isObject)(x) &&
        isFunction(x['abort']) &&
        isFunction(x['getWriter']) &&
        !isReadableInterop(x);
};
exports.isWritableDOMStream = isWritableDOMStream;
/** @ignore */
const isReadableDOMStream = (x) => {
    return (0, exports.isObject)(x) &&
        isFunction(x['cancel']) &&
        isFunction(x['getReader']) &&
        !isReadableInterop(x);
};
exports.isReadableDOMStream = isReadableDOMStream;
/** @ignore */
const isWritableNodeStream = (x) => {
    return (0, exports.isObject)(x) &&
        isFunction(x['end']) &&
        isFunction(x['write']) &&
        isBoolean(x['writable']) &&
        !isReadableInterop(x);
};
exports.isWritableNodeStream = isWritableNodeStream;
/** @ignore */
const isReadableNodeStream = (x) => {
    return (0, exports.isObject)(x) &&
        isFunction(x['read']) &&
        isFunction(x['pipe']) &&
        isBoolean(x['readable']) &&
        !isReadableInterop(x);
};
exports.isReadableNodeStream = isReadableNodeStream;
/** @ignore */
const isFlatbuffersByteBuffer = (x) => {
    return (0, exports.isObject)(x) &&
        isFunction(x['clear']) &&
        isFunction(x['bytes']) &&
        isFunction(x['position']) &&
        isFunction(x['setPosition']) &&
        isFunction(x['capacity']) &&
        isFunction(x['getBufferIdentifier']) &&
        isFunction(x['createLong']);
};
exports.isFlatbuffersByteBuffer = isFlatbuffersByteBuffer;

//# sourceMappingURL=compat.js.map
