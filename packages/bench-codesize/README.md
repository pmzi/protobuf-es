# Code size comparison

This is a simple code size comparison between protobuf-es and google-protobuf.

We are generating code for the module [buf.build/bufbuild/buf](https://buf.build/bufbuild/buf)
once with protoc's [built-in JavaScript generator](https://github.com/protocolbuffers/protobuf/blob/7ecf43f0cedc4320c1cb31ba787161011b62e741/src/google/protobuf/compiler/js/js_generator.cc), 
once with `protoc-gen-es`. Then we bundle a [snippet of code](./src) with [esbuild](https://esbuild.github.io/),
minify the bundle, and compress it like a web server would usually do.

| code generator    | bundle size             | minified               | gzip               |
|-------------------|------------------------:|-----------------------:|-------------------:|
| protobuf-es       | 160,152 b      | 86,291 b | 15,050 b |
| google-protobuf   | 368,167 b  | 270,731 b    | 43,609 b    |