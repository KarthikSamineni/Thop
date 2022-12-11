import './App.css';
//import gimage from './gimage.jpeg';
const message = () => 
{
  var time=new Date();
  const op = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  var hour=op.slice(0,2);
  var ans="";
  if ( hour >=0 && hour<12)
    ans="Good Morning";
  else if ( hour >=12 && hour<16)
    ans="Good Afternoon";
  else if( hour >=16 && hour<19)
    ans="Good Evening";
  else
    ans="Good Night";
  return ans;
}

function App() {
  return (
    <div className="App">
      <h1>{message()}</h1>
    </div>
  );
}

export default App;
