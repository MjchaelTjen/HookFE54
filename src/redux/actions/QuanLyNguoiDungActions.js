
import Axios from 'axios' // install
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from '../../util/settings' // import

// nguoiDung = {taiKhoan:'',matKhau:''}
export const dangNhapAction = (nguoiDung) => {
    return async dispatch => {
        try {
            const result = await Axios({
                url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
                method: 'POST',
                data: nguoiDung
            });


            
            // Đăng nhập thành công
            console.log(result.data)
            // Lấy token lưu vào localstore
            localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data)); //JSON.stringfy() chuyển về dạng chuổi để lưu được trên localstore
        }
        catch (err) {
            // đăng nhập thất bại
            console.log(err.response?.data)


        }

        // Cách dùng promies 
        const promies = Axios({

        })

    }
}