import { LinkIcon } from "@chakra-ui/icons";
import {
  Divider,
  ListIcon,
  ListItem,
  Link,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export default function MyBackground() {
  return (
    <Stack
      mt={{ base: 4, md: 0 }}
      ml={{ base: 0, md: 4 }}
      p={10}
      borderWidth={1.25}
      borderRadius={"lg"}
    >
      <Text fontSize="2xl">Background</Text>
      <Divider />
      <Stack>
        <Text>ABOUT</Text>
        <UnorderedList pl={6}>
          <ListItem fontSize={"sm"}>Web application developer</ListItem>
          <ListItem fontSize={"sm"}>and noob hacker :-(</ListItem>
        </UnorderedList>
        <br />

        <Text>EXPERIENCE</Text>
        <UnorderedList pl={6}>
          <ListItem fontSize={"sm"}>
            Inha univ, Information and Communication Engineering (2018.03 ~ )
          </ListItem>
          <ListItem fontSize={"sm"}>
            Navy Cyber Operation Center (2020.05.04 ~ 2022.01.03)
          </ListItem>
        </UnorderedList>
        <br />

        <Text>SKILL</Text>
        <UnorderedList pl={6}>
          <ListItem fontSize={"sm"}>
            Frontend: React, Vue.js, Typescript, Recoil, SWR
          </ListItem>
          <ListItem fontSize={"sm"}>
            Backend: Node.js(Express, Koa, Nest.js), Flask, Django
          </ListItem>
          <ListItem fontSize={"sm"}>
            Database: MySQL, MariaDB, MongoDB, DBeaver, Compass
          </ListItem>
          <ListItem fontSize={"sm"}>
            Machine Learning: Familiar with Pytorch, and also possible
            Tensorflow.
          </ListItem>
          <ListItem fontSize={"sm"}>Devops: AWS(EC2 ,S3, Lambda), GCP</ListItem>
        </UnorderedList>
        <br />

        <Text>PROJECT & HACKATHON</Text>
        <UnorderedList pl={6}>
          <ListItem fontSize={"sm"}>
            <Link href="https://github.com/osamhack2021/ai_web_RISKOUT_BTS">
              <ListIcon as={LinkIcon} color="green.500" />
              Risk out - NLP Based Social Security Platform (🏅 국방부장관상 /
              Minister of National Defense Award)
            </Link>
          </ListItem>
          <ListItem fontSize={"sm"}>
            <Link href="https://github.com/mint-rare">
              <ListIcon as={LinkIcon} color="green.500" />
              멋쟁이 사자처럼 (NFT 교육), MINT RARE - 스마트 컨트랙트 기반의 NFT
              마켓 서비스
            </Link>
          </ListItem>
        </UnorderedList>
      </Stack>
    </Stack>
  );
}
