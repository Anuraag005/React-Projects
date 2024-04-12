import { Header } from "./Header";
import { Balance } from "./Balance";
import './styles.css'
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";





export default function ExpenseTracking(){
    return <div className="try">
        <Header/>
        <div className="container">
            <Balance/>
            <IncomeExpenses/>
            <TransactionList/>
            <AddTransaction/>
        </div>
    </div>
}
