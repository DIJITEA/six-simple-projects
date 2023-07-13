import { useAppDispatch } from "../../hooks";
import { SwitcherUpdate } from "../../app/actions/switcherHandler";
import "./header.scss";

function HeaderLiButton(Component: { title: string; id: number }) {
  const dispatch = useAppDispatch();
  return <button className="header__button" onClick={() => dispatch(SwitcherUpdate(Component.id))}>{Component.title}</button>;
}

function Header() {
  const headerLiData = [
    { title: "Counter", id: 1 },
    { title: "Modal window", id: 2 },
    { title: "Quiz", id: 3 },
    { title: "User list", id: 4 },
    { title: "Currency converter", id: 5 },
    { title: "Photo collection", id: 6 },
  ];
  return (
    <header className="header">
      <ul className="header__ul">
        {headerLiData.map((el) => (
          <li className="header__li" key={el.id}>
            <HeaderLiButton title={el.title} id={el.id} />
          </li>
        ))}
      </ul>
    </header>
  );
}
export default Header;
