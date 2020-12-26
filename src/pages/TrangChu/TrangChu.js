import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'
import { getDataPhimAction } from '../../redux/actions/QuanLyPhimActions'
import { NavLink } from 'react-router-dom'


export default function TrangChu(props) {
  // useSelector là hook reactredux cung cấp dùng để lấy state từ store về 
  const mangPhim = useSelector(state => state.QuanLyPhimReducer.mangPhim)
  // useDispatch là hook thay thế cho props.dispatch khi dùng redux connect
  const dispatch = useDispatch();
  console.log("props mang phim", mangPhim)
  const loadDataPhim = async () => {
    // const result = await Axios({
    //   url: 'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01',
    //   method: 'GET'
    // })
    // props.dispatch({
    //   type: 'GET_DATA_PHIM',
    //   dataFilm: result.data
    // })
    // props.dispatch(getDataPhimAction())
    dispatch(getDataPhimAction())
  }

  // useEffect thay thế cho các lifecycle (didMount,didUpdate,willMount)
  useEffect(() => {
    // chạy 1 lần duy nhất sau khi giao diện render ( ứng với componentDidmount)
    dispatch(getDataPhimAction());

  }, []);

  const renderFilm = () => {
    return mangPhim.map((phim, index) => {
      return <div className='col-2' key={index}>
        <div className='card'>
          <img className='card-img-top' src={phim.hinhAnh} alt={phim.hinhAnh} />
          <div className='card-body'>
            <h4 className='card-title'>{phim.tenPhim}</h4>
            <p className='card-text'>{phim.moTa}</p>
            <NavLink to={`/chitietphim/${phim.maPhim}`} className='btn btn-success'>Mua vé</NavLink>
          </div>
        </div>
      </div>
    })
  }
  return (
    <div>
      <button onClick={() => {
        loadDataPhim();
      }}>Load danh sách phim</button>
      <p className='text-red'>Trang chủ</p>

      <div className='row'>
        {renderFilm()}
      </div>

    </div>
  )
}


// const mapStateToProps = (state) => {
//   return {
//     mangPhim: state.QuanLyPhimReducer.mangPhim
//   }
// }


// export default connect(mapStateToProps)(TrangChu)