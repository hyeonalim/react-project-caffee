import "./App.css";
import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmptyPage from "./component/EmptyPage";
import Create from "./component/Create";
import CreateItem from "./component/CreateItem";
import CreateEvent from "./component/CreateEvent";
import MenuIntroduce from "./component/MenuIntroduce";
import ItemList from "./component/ItemList";
import Item from "./component/Item";
import EventList from "./component/EventList";
import Event from "./component/Event";
import Notice from "./component/Notice";
import CreateNotice from "./component/CreateNotice";

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
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/create_item">
            <CreateItem />
          </Route>
          <Route path="/create_event">
            <CreateEvent />
          </Route>
          <Route path="/create_notice">
            <CreateNotice />
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
          <Route path="/menu_event">
            <EventList />
          </Route>
          <Route path="/event/:id">
            <Event />
          </Route>
          <Route path="/menu_notice">
            <Notice />
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
