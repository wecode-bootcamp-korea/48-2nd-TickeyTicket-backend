const wishlistDao = require('../models/wishlistDao');

const addWishList = async( userId, productId ) => {
        return await wishlistDao.addWishList( userId, productId );

};

const deleteWishList = async( userId, productId ) => {
    return await wishlistDao.deleteWishList( userId, productId );

};


module.exports = {
    addWishList,
    deleteWishList
}