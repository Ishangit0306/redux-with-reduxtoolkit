import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from '../store';
import classes from './Counter.module.css';



const Counter = () => {
  const counter=useSelector(state=>state.counter);
  const showToggle=useSelector(state=>state.showCounter);
  const dispatch=useDispatch();
  const enteredValue=(event)=>{return{ val:event.target.value}};
  const increment=(event)=>{
    dispatch(counterAction.increment(2));
  }
  const decrement=(event)=>{
    dispatch(counterAction.decrement(2));
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
   
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggle &&<div className={classes.value}>{counter}</div>}
      <div>
        
        <button onClick={increment}>Increment</button>

        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}; 

export default Counter;
