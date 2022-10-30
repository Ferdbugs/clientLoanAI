import axios from "axios"

var data = []

export function loadData() {
  data = []
  return async (dispatch) => {
    return await axios
      .get("http://universities.hipolabs.com/search?country=Australia")
      .then((response) => {
        data = response.data
        dispatch({ type: "GET", data: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function addData() {
  return async (dispatch) => {
    dispatch({ type: "ADD", data: data })
  }
}

export function deleteData() {
  return async (dispatch) => {
    dispatch({ type: "DELETE", data: data })
  }
}
