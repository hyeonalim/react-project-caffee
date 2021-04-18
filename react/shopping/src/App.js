import "./App.css";
import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmptyPage from "./component/EmptyPage";
import CreateItem from "./component/CreateItem";
import MenuIntroduce from "./component/MenuIntroduce";
import ItemList from "./component/ItemList";
import Item from "./component/Item";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_item">
            <CreateItem />
          </Route>
          <Route path="/menu_introduce">
            <MenuIntroduce/>
          </Route>
          <Route path="/menu_item">
            <ItemList />
          </Route>
          <Route path="/item/:no">
            <Item />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
