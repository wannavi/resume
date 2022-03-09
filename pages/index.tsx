import { Box, Link, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Profile from "../components/Profile";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box pt={4} display={{ md: "flex" }}>
        <Box
          flex={1}
          sx={useBreakpointValue({
            md: {
              position: "sticky",
              alignSelf: "flex-start",
              top: 20,
            },
          })}
        >
          <Profile />
        </Box>

        <Box flex={2}>
          <Stack
            mt={{ base: 4, md: 0 }}
            ml={{ base: 0, md: 4 }}
            p={10}
            borderWidth={1.25}
            borderRadius={"lg"}
          >
            <Text fontSize="2xl">Background</Text>
            <Text>
              Irure est do sunt incididunt aliqua ullamco est voluptate. Nostrud
              aliqua tempor sit proident nisi quis eiusmod ea cupidatat id eu
              eiusmod minim do. Minim in deserunt aliquip adipisicing sunt
              aliquip cupidatat esse cupidatat. Aliqua reprehenderit consequat
              consequat sunt culpa consequat et non est eu reprehenderit tempor
              esse exercitation. Mollit do reprehenderit laborum eiusmod ea do
              eu officia nisi aliqua esse. Minim elit magna tempor fugiat
              adipisicing reprehenderit quis officia do veniam est aute Lorem
              pariatur. Voluptate laborum exercitation enim dolor ipsum duis
              culpa enim voluptate eiusmod sunt. Incididunt dolor incididunt
              magna in. Pariatur eu ut sit fugiat est ex cupidatat reprehenderit
              aliqua sint. Amet laborum aute amet duis. Aliqua nisi aliqua aute
              veniam commodo magna ipsum sint minim velit do. Ullamco irure
              Lorem commodo excepteur dolore ex laboris reprehenderit aliqua
              laborum aliquip. Tempor id enim cillum proident et commodo mollit
              enim amet mollit. Excepteur esse anim pariatur adipisicing. Do
              nisi consectetur eu occaecat. Anim velit voluptate eiusmod amet eu
              exercitation proident dolor proident culpa. Excepteur tempor do ex
              ullamco consectetur. Ad excepteur ea reprehenderit aliqua
              consequat. Lorem quis sit sunt Lorem aliquip elit aliquip
              incididunt nulla proident magna pariatur aute deserunt. Qui labore
              amet non cupidatat excepteur Lorem nostrud quis anim eu dolore ad.
              Mollit aliqua ut officia ad veniam ullamco do. Velit amet
              incididunt excepteur laborum enim. Nulla dolore esse sit nisi
              aliquip aute. Eiusmod dolore elit cillum elit proident nulla.
              Adipisicing adipisicing ullamco proident aute ad proident proident
              proident fugiat mollit culpa esse in laboris. Magna cillum culpa
              culpa quis eiusmod ipsum magna commodo dolor officia nulla
              exercitation esse ullamco. Dolore commodo aliquip nisi ea
              consectetur nulla eu ullamco cupidatat ipsum magna. Exercitation
              quis eiusmod ea qui fugiat excepteur id laborum magna. Ex ut magna
              exercitation sit excepteur anim incididunt in ullamco minim et
              exercitation qui. Sint elit deserunt nostrud ad ad. Sint officia
              labore enim et nisi nostrud qui ea aliquip. Id dolor sint nostrud
              proident dolor in incididunt velit id. Laboris minim dolor ea
              aliqua Lorem excepteur non ad fugiat duis. Occaecat sunt cupidatat
              mollit velit adipisicing do ea. Exercitation pariatur labore enim
              anim ad eiusmod magna excepteur esse. Pariatur laboris irure non
              sint cupidatat laborum occaecat nisi voluptate consectetur veniam
              aliqua.
            </Text>
          </Stack>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
