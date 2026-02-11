import type { ServicesState } from '../../domain/service/types'

const initialState: ServicesState = {
  list: {
    data: [],
    loading: false,
    error: null,
  },
  details: {
    data: null,
    loading: false,
    error: null,
  },
}
