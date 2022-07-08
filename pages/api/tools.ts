import type { NextApiRequest, NextApiResponse } from "next";
import { b64_to_utf8, xml_to_json } from "../../libs/utils";

type Data = {
  success?: boolean;
  message?: string;
  decoded?: string;
  error?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).send({
      message: "Only POST requests allowed",
    });
    return;
  }

  try {
    const xml = b64_to_utf8(req.body.encoded);
    const data = xml_to_json(xml);

    res.status(200).json({
      success: true,
      decoded: data,
    });
  } catch (e) {
    res.status(200).json({
      success: false,
    });
  }
}
