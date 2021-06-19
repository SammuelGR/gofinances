import React from "react";

import HighlightCard from "../../components/HighlightCard";

import {
  Container,
  Header,
  HighlightCards,
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

      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}

export default Dashboard;
