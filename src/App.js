import { Fragment } from 'react';
import HomeScreen from './screens/HomeScreen';
import TaskState from './context/Tasks/TaskState';

function App() {

  return (
    <TaskState>
      <Fragment>
        <HomeScreen />
      </Fragment>
    </TaskState>
  );
}

export default App;
