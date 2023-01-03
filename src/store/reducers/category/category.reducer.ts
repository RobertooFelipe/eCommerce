import Category from '../../../types/category.types'
import CategoryActionTypes from './category.action-types'

interface InitialState {
  categories: Category[]
  isLoading: boolean
}

const initialState: InitialState = {
  categories: [],
  isLoading: false
}

const categoryReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case CategoryActionTypes.categoriesFetchStart:
      return { ...state, isLoading: true }

    case CategoryActionTypes.categoriesFetchSuccess:
      return { ...state, isLoading: false, categories: action.payload }

    case CategoryActionTypes.categoriesFetchError:
      return { ...state, isLoading: false }

    default:
      return state
  }
}

export default categoryReducer
