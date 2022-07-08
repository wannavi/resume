import { Box, Code, Divider, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Decoder() {
  const [encoded, setEncoded] = useState(
    "PHBhcnQgbnVtYmVyPSIxOTc2Ij4KICA8bmFtZT5XaW5kc2NyZWVuIFdpcGVyPC9uYW1lPgogIDxkZXNjcmlwdGlvbj5UaGUgV2luZHNjcmVlbiB3aXBlcgogICAgYXV0b21hdGljYWxseSByZW1vdmVzIHJhaW4KICAgIGZyb20geW91ciB3aW5kc2NyZWVuLCBpZiBpdAogICAgc2hvdWxkIGhhcHBlbiB0byBzcGxhc2ggdGhlcmUuCiAgICBJdCBoYXMgYSBydWJiZXIgPHJlZiBwYXJ0PSIxOTc3Ij5ibGFkZTwvcmVmPgogICAgd2hpY2ggY2FuIGJlIG9yZGVyZWQgc2VwYXJhdGVseQogICAgaWYgeW91IG5lZWQgdG8gcmVwbGFjZSBpdC4KICA8L2Rlc2NyaXB0aW9uPgo8L3BhcnQ-Cg"
  );
  const [decoded, setDecoded] = useState({});

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    setEncoded(inputValue);

    fetch("/api/tools", {
      method: "POST",
      body: JSON.stringify({ encoded }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setDecoded(JSON.parse(data.decoded));
        }
      });
  };

  useEffect(() => {
    fetch("/api/tools", {
      method: "POST",
      body: JSON.stringify({ encoded }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setDecoded(JSON.parse(data.decoded));
        }
      });
  });

  return (
    <Box pt={4}>
      <Textarea
        value={encoded}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
      <Divider />
      <Code display={"flex"} fontSize="8px">
        <pre>{JSON.stringify(decoded, null, 2)} </pre>
      </Code>
    </Box>
  );
}
