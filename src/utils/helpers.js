// Garder en memooire l'utilisateur connecté
export const setCurrentUser = (user) => {
  try {
    if (user) {
      sessionStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("currentUser");
    }
  } catch (error) {
    console.log(error);
  }
};

// Obtenir l'utilisateur connecté
export const getCurrentUser = () => {
  let user = null;
  try {
    user =
      sessionStorage.getItem("currentUser") != null
        ? JSON.parse(sessionStorage.getItem("currentUser"))
        : null;
  } catch (error) {
    console.log(error);
    user = null;
  }
  return user;
};
