import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './pages/Main';
import Header from './components/Header';
import PostList from './pages/post/PostList';
import Login from './pages/auth/Login';
import ChatList from './pages/chat/ChatList'
import Join from './pages/auth/Join';
import { AuthProvider } from './context/AuthContext';
import PostView from './pages/post/PostView';
import PostWrite from './pages/post/PostWrite';
import ChatRoom from './pages/chat/ChatRoom';

function App() {
  return (
    <AuthProvider>
      <Header></Header>
      <section className='container'>
        <Routes>
          <Route path='/'>
            <Route index element={<Main />}></Route>
          </Route>
          <Route path='post'>
            <Route path='list'>
              <Route index element={<PostList />}></Route>
              <Route path=':id' element={<PostView />}></Route>
            </Route>
            <Route path='write' element={<PostWrite />}></Route>
          </Route>
          <Route path='chat'>
            <Route path='list'>
              <Route index element={<ChatList />}></Route>
              <Route path=':id' element={<ChatRoom />}></Route>
            </Route>
          </Route>
          <Route path='auth'>
            <Route path='login' element={<Login />}>  </Route>
            <Route path='join' element={<Join />}>  </Route>
          </Route>
        </Routes>
      </section>
    </AuthProvider>
  );
}

export default App;
