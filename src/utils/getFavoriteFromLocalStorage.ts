export function getFavoriteFromLocalStorage() {
  const favorite = localStorage.getItem('favorite');

  const favoriteItems = favorite ? JSON.parse(favorite) : [];
  const isEmptyFavorite = favoriteItems.length === 0;
  const favoriteItemsCount = favoriteItems.length;

  return {
    isEmptyFavorite,
    favoriteItems,
    favoriteItemsCount,
  };
}
