export const getFavFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
};

export const setFavInStorage = (odontologo) => {
    const storageFavs = getFavFromStorage();
    const isFavOnList = storageFavs.filter(fav => {
        return fav.id === odontologo.id
    });
    if (isFavOnList.length === 0) {
        storageFavs.push(odontologo)
        localStorage.setItem("favs", JSON.stringify(storageFavs));
        alert("Dentist added successfully");
        return true;
    }
    else {
        alert("Dentist already on the list");
        return false;
    }
}