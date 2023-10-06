// Copyright 2021-2023 Buf Technologies, Inc.
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

// @generated by protoc-gen-es v1.3.3 with parameter "bootstrap_wkt=true,ts_nocheck=false,target=ts"
// @generated from file google/protobuf/source_context.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import type { PartialMessage, PlainMessage } from "../../message.js";
import { Message } from "../../message.js";
import { proto3 } from "../../proto3.js";
import type { FieldList } from "../../field-list.js";
import type { BinaryReadOptions } from "../../binary-format.js";
import type { JsonReadOptions, JsonValue } from "../../json-format.js";

/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 *
 * @generated from message google.protobuf.SourceContext
 */
export class SourceContext extends Message<SourceContext> {
  /**
   * The path-qualified name of the .proto file that contained the associated
   * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
   *
   * @generated from field: string file_name = 1;
   */
  fileName = "";

  constructor(data?: PartialMessage<SourceContext>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.SourceContext";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "file_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SourceContext {
    return new SourceContext().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SourceContext {
    return new SourceContext().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SourceContext {
    return new SourceContext().fromJsonString(jsonString, options);
  }

  static equals(a: SourceContext | PlainMessage<SourceContext> | undefined, b: SourceContext | PlainMessage<SourceContext> | undefined): boolean {
    return proto3.util.equals(SourceContext, a, b);
  }
}

