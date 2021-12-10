import { createSelector } from "reselect";
import memoize from 'lodash.memoize';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsforPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])

);

export const selectCollection = collectionUrlParam => memoize(createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
)
);