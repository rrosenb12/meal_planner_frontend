export const setUser = token => {
    return (dispatch) => {
        fetch('http://localhost:3000/profile', {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(response => response.json())
      .then(data => {
          let token = localStorage.getItem("token")
          localStorage.setItem("user", JSON.stringify(data.user))
          dispatch({type: 'SET_USER', payload: token, currentUser: data.user})
      })
    }
}

export const createUser = userObj => {
    return (dispatch) => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              accepts: "application/json",
              "content-type": "application/json",
            },
            body: JSON.stringify(userObj),
          })
            .then((response) => response.json())
            .then((response) => {
              let token = localStorage.setItem("token", response.jwt);
              localStorage.setItem("user", JSON.stringify(response.user));
              dispatch({type: 'CREATE_USER', payload: token, currentUser: response.user})
            });
    }
}