import './App.css';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import ChannelContainer from './components/ChannelContainer/ChannelContainer';
import ChannelListContainer from './components/ChannelListContainer/ChannelListContainer';
function App() {

  const apiKey='yu57yyvzf3xe';
  const client=StreamChat.getInstance(apiKey);
  return (
    <div className="app__Container">
      <Chat client={client} theme="team light" >
        <ChannelContainer />
        <ChannelListContainer />
      </Chat>
    </div>
  );
}

export default App;
