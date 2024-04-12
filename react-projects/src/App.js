import logo from './logo.svg';
import './App.css';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import ExpenseTracking from './components/expense-tracking';
import { BrandPage } from './components/brand-page';
import { DiceGame } from './components/dice-game';

function App() {
  return (
    <div className="App">
    {/*<ExpenseTracking/>*/}
    {/*<StarRating noOfStars={10}/>*/}
    {/*<TreeView menus = {menus} />*/}
    {/*<BrandPage/>*/}
    <DiceGame/>
    </div>
  );
} 

export default App;
