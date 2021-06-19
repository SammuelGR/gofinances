import React from "react";

import {
  Container,
  Header,
  Icon,
  Photo,
  User,
  UserInfo,
  UserGreeting,
  UserName,
  UserWrapper,
} from "./styles";

function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/23316518?v=4",
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Sammuel</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  );
}

export default Dashboard;
