

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TrangChu from './pages/TrangChu/TrangChu';
import DangKy from './pages/DangKy/DangKy'
import DangNhap from './pages/DangNhap/DangNhap'
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim'
import Header from './components/Header/Header'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/trangchu" component={TrangChu} />
        <Route exact path="/dangky" component={DangKy}></Route>
        <Route exact path="/dangnhap" component={DangNhap}></Route>
        <Route exact path="/chitietphim/:maPhim" component={ChiTietPhim}></Route>
        <Route exact path="/" component={TrangChu} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
