import { useContext } from "react";
import Button from "./components/Button";
import { GlobalContext } from "./context/GlobalState";

function App() {
  // get context
  const {count,increaseCount,decreaseCount,setCount} = useContext(GlobalContext);

  // onchange of input value, update the count
  function onCountValueChange(e){
    if(e.target.value){
      setCount(parseInt(e.target.value));
    }else{
      setCount(0);
    }
  }
  return (
    <div className="w-1/2 m-auto font-Ubuntu">
      <h1 className="font-bold text-3xl mt-40 mb-10 text-center">Counter App</h1>
      <input 
        type="text" 
        value={count} 
        onChange={(e)=>{onCountValueChange(e)}}
        className="shadow-sm block m-auto border-solid border-2 rounded-md text-center text-2xl"
      />

      <div className="flex justify-center">
        <Button func={()=>{increaseCount(count+1)}} value="Increase"/>
        <Button func={()=>{decreaseCount(count-1)}} value="Decrease"/>
      </div>
    </div>
  );
}

export default App;
