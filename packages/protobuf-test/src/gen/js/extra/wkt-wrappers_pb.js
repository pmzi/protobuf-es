// Copyright 2021-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.7.2 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/wkt-wrappers.proto (package spec, syntax proto3)
/* eslint-disable */

import { BoolValue, BytesValue, DoubleValue, FloatValue, Int32Value, Int64Value, proto3, StringValue, UInt32Value, UInt64Value } from "@bufbuild/protobuf";

/**
 * @generated from message spec.WrappersMessage
 */
export const WrappersMessage = proto3.makeMessageType(
  "spec.WrappersMessage",
  () => [
    { no: 1, name: "double_value_field", kind: "message", T: DoubleValue },
    { no: 2, name: "bool_value_field", kind: "message", T: BoolValue },
    { no: 3, name: "float_value_field", kind: "message", T: FloatValue },
    { no: 4, name: "int64_value_field", kind: "message", T: Int64Value },
    { no: 5, name: "uint64_value_field", kind: "message", T: UInt64Value },
    { no: 6, name: "int32_value_field", kind: "message", T: Int32Value },
    { no: 7, name: "uint32_value_field", kind: "message", T: UInt32Value },
    { no: 8, name: "string_value_field", kind: "message", T: StringValue },
    { no: 9, name: "bytes_value_field", kind: "message", T: BytesValue },
    { no: 11, name: "oneof_double_value_field", kind: "message", T: DoubleValue, oneof: "oneof_fields" },
    { no: 12, name: "oneof_bool_value_field", kind: "message", T: BoolValue, oneof: "oneof_fields" },
    { no: 13, name: "oneof_float_value_field", kind: "message", T: FloatValue, oneof: "oneof_fields" },
    { no: 14, name: "oneof_int64_value_field", kind: "message", T: Int64Value, oneof: "oneof_fields" },
    { no: 15, name: "oneof_uint64_value_field", kind: "message", T: UInt64Value, oneof: "oneof_fields" },
    { no: 16, name: "oneof_int32_value_field", kind: "message", T: Int32Value, oneof: "oneof_fields" },
    { no: 17, name: "oneof_uint32_value_field", kind: "message", T: UInt32Value, oneof: "oneof_fields" },
    { no: 18, name: "oneof_string_value_field", kind: "message", T: StringValue, oneof: "oneof_fields" },
    { no: 19, name: "oneof_bytes_value_field", kind: "message", T: BytesValue, oneof: "oneof_fields" },
    { no: 21, name: "repeated_double_value_field", kind: "message", T: DoubleValue, repeated: true },
    { no: 22, name: "repeated_bool_value_field", kind: "message", T: BoolValue, repeated: true },
    { no: 23, name: "repeated_float_value_field", kind: "message", T: FloatValue, repeated: true },
    { no: 24, name: "repeated_int64_value_field", kind: "message", T: Int64Value, repeated: true },
    { no: 25, name: "repeated_uint64_value_field", kind: "message", T: UInt64Value, repeated: true },
    { no: 26, name: "repeated_int32_value_field", kind: "message", T: Int32Value, repeated: true },
    { no: 27, name: "repeated_uint32_value_field", kind: "message", T: UInt32Value, repeated: true },
    { no: 28, name: "repeated_string_value_field", kind: "message", T: StringValue, repeated: true },
    { no: 29, name: "repeated_bytes_value_field", kind: "message", T: BytesValue, repeated: true },
    { no: 31, name: "map_double_value_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: DoubleValue} },
    { no: 32, name: "map_bool_value_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: BoolValue} },
    { no: 33, name: "map_float_value_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: FloatValue} },
    { no: 34, name: "map_int64_value_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Int64Value} },
    { no: 35, name: "map_uint64_value_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: UInt64Value} },
    { no: 36, name: "map_int32_value_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Int32Value} },
    { no: 37, name: "map_uint32_value_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: UInt32Value} },
    { no: 38, name: "map_string_value_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: StringValue} },
    { no: 39, name: "map_bytes_value_field", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: BytesValue} },
  ],
);

