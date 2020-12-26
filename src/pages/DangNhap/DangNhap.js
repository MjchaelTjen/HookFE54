import React, { useState } from 'react'
import { useDispatch } from 'react-redux' ///// install
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungActions'

export default function DangNhap() {

    // useDispatch là hook do reactredux cung cấp tương tự props.dispatch khi sử dụng connect
    const dispatch = useDispatch();
    // useState là thư viện thay thế this.state tron RE class component
    const [state, setState] = useState({
        taiKhoan: '',
        matKhau: ''
    })
    // useState nhận giá trị đầu vào là satetDefault
    // ứng với classComponent state = {taiKhoan:'',matKhau:''}


    console.log('state', state)
    const handleChangeInput = (event) => {
        //Lấy ra value từ thẻ input đăng nhập
        const { name, value } = event.target;
        console.log(name, value);

        // const newState = { ...state, [name]: value }
        // setState(newState)

        setState({ ...state, [name]: value })


        // setState({
        //     [name]: value
        // })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // cản sự kiện submit của browser (reload page)
        // GỌi API để xác thực đăng nhập
        dispatch(dangNhapAction(state))
    }
    return (
        <form className='container' onSubmit={handleSubmit}>
            <h3 style={{color:'orange', fontSize:'45',fontWeight:'bold'}}>Đăng nhập</h3>
            <div className='from-group'>
                <p style={{ color: 'blue', fontWeight: 'bold' }}>Tài khoản</p>
                <input className='from-control' name='taiKhoan' placeholder='Nhập tài khoản' onChange={handleChangeInput}></input>
            </div>
            <div className='from-group'>
                <p style={{ color: 'blue', fontWeight: 'bold' }}>Mật khẩu</p>
                <input className='from-control' name='matKhau' placeholder='Nhập mật khẩu' onChange={handleChangeInput}></input>
            </div>
            <div className='from-group'>
                <button className='btn btn-success mt-5' type='submit'>Đăng nhập</button>
            </div>
        </form>
    )
}
