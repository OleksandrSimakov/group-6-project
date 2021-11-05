import { Suspense } from "react";
import { Switch } from "react-router-dom";
import { MainContainer } from "./components/Container/Container.styled";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main.styled";

export default function App() {
  return (
    <MainContainer>
      <Header />
      <Main>
        <Switch>
          <Suspense fallback={<p>Загружаем...</p>}></Suspense>
        </Switch>
      </Main>
    </MainContainer>
  );
}
