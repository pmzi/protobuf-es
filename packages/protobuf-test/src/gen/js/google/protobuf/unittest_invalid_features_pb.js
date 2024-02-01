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
// @generated from file google/protobuf/unittest_invalid_features.proto (package pb, syntax proto2)
/* eslint-disable */

import { FeatureSet, proto2 } from "@bufbuild/protobuf";

/**
 * @generated from message pb.TestInvalidFeatures
 */
export const TestInvalidFeatures = proto2.makeMessageType(
  "pb.TestInvalidFeatures",
  () => [
    { no: 1, name: "repeated_feature", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
  ],
);

/**
 * @generated from extension: optional pb.TestInvalidFeatures test_invalid = 9996;
 */
export const test_invalid = proto2.makeExtension(
  "pb.test_invalid", 
  FeatureSet, 
  () => ({ no: 9996, kind: "message", T: TestInvalidFeatures, opt: true }),
);

