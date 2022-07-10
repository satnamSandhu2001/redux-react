import './App.css';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from './state/index';
import Navbar from './Navbar';

function App() {
  const dispatch = useDispatch();
  const { withDrawMoney, depositMoney } = bindActionCreators(actions, dispatch);
  return (
    <div className="App">
      <Navbar />
      <button
        onClick={() => {
          withDrawMoney(100);
        }}
      >
        -
      </button>
      <div>Update Balance</div>
      <button
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
