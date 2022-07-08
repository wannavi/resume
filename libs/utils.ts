import * as parser from "xml2json";

export function utf8_to_b64(s: string) {
  return Buffer.from(s).toString("base64");
}

export function b64_to_utf8(s: string) {
  return Buffer.from(s, "base64").toString();
}

export function xml_to_json(xml: string) {
  return parser.toJson(xml);
}
