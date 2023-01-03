import { collection, getDocs } from 'firebase/firestore'
import { Dispatch } from 'redux'

import { db } from '../../../config/firebase.config'
import { categoryConverter } from '../../../converters/firestore.converters'
import Category from '../../../types/category.types'
import CategoryActionTypes from './category.action-types'

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: CategoryActionTypes.categoriesFetchStart })

    try {
      const categoriesFromFirestore: Category[] = []

      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })

      dispatch({
        type: CategoryActionTypes.categoriesFetchSuccess,
        payload: categoriesFromFirestore
      })
    } catch (error) {
      dispatch({
        type: CategoryActionTypes.categoriesFetchError
      })
    }
  }
}
