
import './App.css';
import { Flowers } from './Flowers';
import { Add } from './Add';
import { Link, Route, Switch } from "react-router-dom";
import { Editbouquet } from './Editbouquet';
import { Bouquetdetail } from './Bouquetdetail';


export function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/bouquet">Bouquet</Link></li>
          <li><Link to="/newbouquet">Add New Bouquet</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/bouquet">
          <Flowers />
        </Route>
        <Route path="/newbouquet">
          <Add />
        </Route>
        <Route path="/bouquet/edit/:id">
          <Editbouquet />
        </Route>
        <Route path="/bouquet/detail/:id">
          <Bouquetdetail />
        </Route>
      </Switch>


    </div>
  );
}


