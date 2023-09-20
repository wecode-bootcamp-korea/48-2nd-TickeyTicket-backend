const appDataSource = require('./dataSource');

const getProductByCategory = async ( userId, lng, lat, genreId, hashtagId, dateRangeQuery, orderingQuery) => {
    try {
        console.log(lng, lat)
        const locationByProduct =  await appDataSource.query(
        `
        SELECT 
            p.id AS productId,
            CASE WHEN ${userId} IS NOT NULL AND w.user_id = ${userId} 
            THEN 1 
            ELSE 0 
            END AS isLiked,
            cg.genre_name AS genreName,
            pc.category_genres_id AS genreId,
            p.name,
            p.description,
            p.price,
            p.place AS performPlace,
            p.film_rating AS filmRating,
            CASE WHEN COUNT(po.start_date) > 1
            THEN DATE_FORMAT(MIN(po.start_date), '%Y-%m-%d') 
            ELSE DATE_FORMAT(MIN(po.start_date), '%Y-%m-%d') 
            END 
            AS startDate,
            CASE WHEN COUNT(po.start_date) > 1
            THEN DATE_FORMAT(MAX(po.start_date), '%Y-%m-%d') 
            ELSE DATE_FORMAT(MAX(po.start_date), '%Y-%m-%d') 
            END 
            AS endDate,
            CASE WHEN COUNT(po.start_time) > 1
            THEN MAX(po.start_time)
            ELSE MAX(po.start_time)
            END
            AS startTime,
            CASE WHEN COUNT(po.running_time)
            THEN MAX(po.running_time)
            ELSE MAX(po.running_time)
            END 
            AS runningTime,
            ti.thumbnail_image_url AS thumbnailImageUrl,
            (SELECT 
                SUM(pi.payment_total_quantity) 
            FROM payment_information pi 
            LEFT JOIN product_options po 
                ON po.id = pi.product_option_id 
            WHERE pi.deleted_at IS NULL 
                AND pi.product_option_id = po.id 
                AND po.product_id = p.id) AS totalBookingTicket,
            JSON_OBJECT( "lat", mc.coordinate_x, "lng", mc.coordinate_y) AS latlng,
            (6371 * acos(cos(radians(${lat})) * cos(radians(mc.coordinate_x)) * cos(radians(mc.coordinate_y)- radians(${lng})) + sin(radians(${lat})) * sin(radians(mc.coordinate_x)))) AS distance
        FROM products p
        LEFT JOIN 
            product_options po ON p.id = po.product_id
        LEFT JOIN 
            thumbnail_images ti ON p.id = ti.product_id
        LEFT JOIN 
            product_category pc ON p.id = pc.product_id
        LEFT JOIN 
            map_coordinates mc ON p.id = mc.product_id
        LEFT JOIN 
            wishlists w ON p.id = w.product_id
        LEFT JOIN 
            category_genres cg ON pc.category_genres_id  = cg.id 
        WHERE 
            pc.category_genres_id = IFNULL(?, pc.category_genres_id) AND
            ${dateRangeQuery}
            GROUP BY p.id, w.id, ti.id, mc.id, pc.id
            HAVING distance < 2 
            ${orderingQuery};
            `,
            [genreId, hashtagId]
        );
    return locationByProduct;

    } catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    };
}; 

const getAllProdctList = async() => {
    try {
        const showAllProdcut = await appDataSource.query(
            `
            SELECT 
                p.id AS productId,
                p.name,
                p.description,
                p.price,
                p.place AS performPlace,
                p.film_rating AS filmRating,
                CASE WHEN COUNT(po.start_date) > 1
                THEN DATE_FORMAT(MIN(po.start_date), '%Y-%m-%d') 
                ELSE DATE_FORMAT(MIN(po.start_date), '%Y-%m-%d') 
                END 
                AS startDate,
                CASE WHEN COUNT(po.start_date) > 1
                THEN DATE_FORMAT(MAX(po.start_date), '%Y-%m-%d') 
                ELSE DATE_FORMAT(MAX(po.start_date), '%Y-%m-%d') 
                END 
                AS EndDate,
                CASE WHEN COUNT(po.start_time) > 1
                THEN MAX(po.start_time)
                ELSE MAX(po.start_time)
                END
                AS startTime,
                CASE WHEN COUNT(po.running_time)
                THEN MAX(po.running_time)
                ELSE MAX(po.running_time)
                END 
                AS runningTime,
                (SELECT 
                    SUM(pi.payment_total_quantity) 
                FROM payment_information pi 
                LEFT JOIN product_options po 
                    ON po.id = pi.product_option_id 
                WHERE pi.deleted_at IS NULL 
                    AND pi.product_option_id = po.id
                    AND po.product_id = p.id) AS totalBookingTicket,
                JSON_OBJECT( "lat", mc.coordinate_x, "lng", mc.coordinate_y) AS latlng,
                ti.thumbnail_image_url AS thumbnailImageUrl
            FROM products p
            LEFT JOIN 
                product_options po ON p.id = po.product_id
            LEFT JOIN 
                thumbnail_images ti ON p.id = ti.product_id
            LEFT JOIN 
                product_category pc ON p.id = pc.product_id
            LEFT JOIN 
                map_coordinates mc ON p.id = mc.product_id
            LEFT JOIN 
                wishlists w ON p.id = w.product_id 
            GROUP BY p.id, w.id, ti.id, mc.id;
            `
        )
        return showAllProdcut;
    } catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;

        throw error;
    };
}

module.exports = {
    getProductByCategory,
    getAllProdctList
};