import './App.css';
import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: '94.12',
            date: new Date()
        },
        {
            id: 'e2',
            title: 'Car Insurance',
            amount: '294.67',
            date: new Date()
        },
        {
            id: 'e3',
            title: 'New Tv',
            amount: '777.36',
            date: new Date()
        },
        {
            id: 'e4',
            title: 'New Desk',
            amount: '85.85',
            date: new Date()
        },
    ];
    return (
        <div className="App">
            <h2>
                Gets Started!
            </h2>
            <Expenses item={expenses} />
        </div>
    );
}

export default App;
