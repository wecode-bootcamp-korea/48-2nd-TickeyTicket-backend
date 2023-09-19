const appDataSource = require('./dataSource');

const addWishList = async( userId, productId ) => {
    try{
        const addWishProduct = await appDataSource.query(
            `
            INSERT INTO wishlists (
                user_id, 
                product_id
            ) VALUES (
                ?,
                ?
            )
            `,
            [userId, productId]
        );
        return addWishProduct
    } catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;
    
        throw error;
    };
};

const deleteWishList = async( userId, productId  ) => {
    const deleteRows = (await appDataSource.query(
        `
        DELETE FROM wishlists 
        WHERE 
            user_id = ? AND
            product_id = ? 
        `,
        [ userId, productId  ]
    ))

	return deleteRows
};

module.exports = {
    addWishList,
    deleteWishList
}