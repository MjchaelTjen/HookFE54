
import { GET_DATA_FILM } from '../const/QuanLyPhimConst'

const sateDefault = {
    mangPhim: [] // mảng phim sẽ chứa dữ liệu từ api trả về
}


export const QuanLyPhimReducer = (state = sateDefault, action) => {
    switch (action.type) {
        case GET_DATA_FILM: {
            // state.mangPhim = action.dataFilm
            return { ...state, mangPhim: action.dataFilm }
        }
    }

    return { ...state }
}