import React from 'react'
import foto from "../assets/myfoto.jpg";
import { Box, Card, CardHeader, CardBody, CardFooter, Heading, Avatar } from "@chakra-ui/react";

function Profile() {
  return (
    <Card shadow="dark-lg" bgColor="blue.200" p={4}>
      <CardHeader>
        <Heading size="md">
          Meet the Developer
        </Heading>
      </CardHeader>
      <CardBody>
        <Avatar size="2xl" mb={6} src={foto} />
        <Box>
          <h2 className="font-bolder">
            <strong>
              Muhammad Rizkiansyah  
            </strong>
          </h2>
          I'm a Web Developer<br /><br />
          <Box>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nihil asperiores numquam, in saepe amet maxime temporibus quam facere. Est omnis laboriosam blanditiis sequi atque officia, quas alias consectetur nam.
          </Box>
        </Box>
      </CardBody>
    </Card>
  )
}

export default Profile