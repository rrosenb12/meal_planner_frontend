export const setUser = token => {
    return (dispatch) => {
        fetch('http://localhost:3000/profile', {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(response => response.json())
      .then(data => {
          let token = localStorage.getItem("token")
          console.log(data)
          localStorage.setItem("user", JSON.stringify(data.user))
          dispatch({type: 'SET_USER', payload: token, currentUser: data.user})
      })
    }
}