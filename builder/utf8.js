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
exports.Utf8Builder = void 0;
const utf8_js_1 = require("../util/utf8.js");
const binary_js_1 = require("./binary.js");
const buffer_js_1 = require("./buffer.js");
const builder_js_1 = require("../builder.js");
/** @ignore */
class Utf8Builder extends builder_js_1.VariableWidthBuilder {
    constructor(opts) {
        super(opts);
        this._values = new buffer_js_1.BufferBuilder(new Uint8Array(0));
    }
    get byteLength() {
        let size = this._pendingLength + (this.length * 4);
        this._offsets && (size += this._offsets.byteLength);
        this._values && (size += this._values.byteLength);
        this._nulls && (size += this._nulls.byteLength);
        return size;
    }
    setValue(index, value) {
        return super.setValue(index, (0, utf8_js_1.encodeUtf8)(value));
    }
    // @ts-ignore
    _flushPending(pending, pendingLength) { }
}
exports.Utf8Builder = Utf8Builder;
Utf8Builder.prototype._flushPending = binary_js_1.BinaryBuilder.prototype._flushPending;

//# sourceMappingURL=utf8.js.map
