import logo from './logo.svg';
import './App.css';
import SimpleCounter from './components/count';
import DisplayText from './components/text';
import LightSwitch from './components/svet';
import SimpleList from './components/list';
import PostList from './components/postList';
import Timer from './components/timer';
import UserProfile from './components/userProfile';

function App() {
  return (
    <div className="App">
      <SimpleCounter />
      <DisplayText />
      <LightSwitch />
      <SimpleList />
      <PostList />
      <Timer />
      <UserProfile />
    </div>
  );
}

export default App;
