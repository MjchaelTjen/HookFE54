
import { GET_DATA_FILM } from '../const/QuanLyPhimConst'
import Axios from 'axios'
import { DOMAIN } from '../../util/settings'
// Đây là file chứa các hàm action

export const getDataPhimAction = () => {  // action reator

    return async (dispatch) => {
        const result = await Axios({
            url: `${DOMAIN}/api/quanlyphim/laydanhsachphim?manhom=GP01`,
            method: 'GET'
        })
        // gọi ajax
        dispatch({
            type: GET_DATA_FILM,
            dataFilm: result.data
        })
    }
}