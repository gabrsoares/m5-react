import './App.css';
import Button from './Components/Button/Button';
import Display from './Components/Display/Display';

function App() {
  return (
    <div className="App">
      <Display />
      <div className="buttonList">
        <Button value =""/>
        <Button value =""/>
        <Button value ="C"/>
        <Button value ="/"/>
        <Button value ="7"/>
        <Button value ="8"/>
        <Button value ="9"/>
        <Button value ="*"/>
        <Button value ="4"/>
        <Button value ="5"/>
        <Button value ="6"/>
        <Button value ="-"/>
        <Button value ="1"/>
        <Button value ="2"/>
        <Button value ="3" />
        <Button value ="+" />
        <Button value ="" />
        <Button value ="0" />
        <Button value ="" />
        <Button value ="="/>
      </div>
    </div>
  );
}

export default App;
