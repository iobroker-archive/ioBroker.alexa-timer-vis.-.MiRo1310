"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var logging_exports = {};
__export(logging_exports, {
  errorLogging: () => errorLogging
});
module.exports = __toCommonJS(logging_exports);
const errorLogging = ({
  text,
  error,
  _this,
  value
}) => {
  _this.log.error(text + ": " + JSON.stringify(error || ""));
  _this.log.error(JSON.stringify(value || ""));
  _this.log.error(JSON.stringify(error.stack || ""));
  _this.log.error(JSON.stringify(error.message || ""));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  errorLogging
});
//# sourceMappingURL=logging.js.map
