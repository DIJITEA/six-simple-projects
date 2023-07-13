import React from "react";
import { useAppSelector } from "./hooks";

import Header from "./components/header/Header";
import Counter from "./components/Counter/Counter";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import Quiz from "./components/Quiz/Quiz";
import UserList from "./components/UserList/UserList";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import PhotoCollection from "./components/PhotoCollection/PhotoCollection";

function App() {
  const currentSwitchState: number = useAppSelector(
    (state) => state.SwitcherR.value
  );
  // idk why i use id when i can use names # need 2 fix
  function Switch() {
    switch (currentSwitchState) {
      case 1:
        return <Counter />;
      case 2:
        return <ModalWindow />;
      case 3:
        return <Quiz />;
      case 4:
        return <UserList />;
      case 5:
        return <CurrencyConverter />;
      case 6:
        return <PhotoCollection />;
      default:
        return <Counter />;
    }
  }
  return (
    <div className="App">
      <Header />
      {Switch()}
    </div>
  );
}

export default App;
