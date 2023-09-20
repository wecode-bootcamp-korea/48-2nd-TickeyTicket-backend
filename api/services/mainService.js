const mainDao = require('../models/mainDao');

const getProductByCategory = async ( 
    userId,
    lng, 
    lat,
    genreId,
    hashtagId,
    dateBy,
    sortBy
    ) => {
    const ordering = async(sortBy) => {
        switch(sortBy){
            case 'bookingTicketDESC':
                return `ORDER BY totalBookingTicket DESC`
            case 'bookingTicketASC':
                return `ORDER BY totalBookingTicket ASC`
            default: 
                return `ORDER BY p.id`
        }
    };

    const dateRange = async(dateBy) => {
        switch(dateBy){
            case 'dayOne':
                return `po.start_date >= CURDATE()  AND CASE WHEN po.start_date = CURDATE()
                THEN po.start_time >= ADDTIME(CURTIME() , "2:00:00")
                ELSE po.start_time
                END`
            case 'dayWeek':
                return `po.start_date BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 1 WEEK) AND
                CASE WHEN po.start_date = CURDATE()
                THEN po.start_time >= ADDTIME(CURTIME() , "2:00:00")
                ELSE po.start_time
                END`
            case 'dayMonth':
                return `po.start_date BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 1 MONTH) AND
                CASE WHEN po.start_date = CURDATE()
                THEN po.start_time >= ADDTIME(CURTIME() , "2:00:00")
                ELSE po.start_time
                END`
            default :
                return `po.start_date BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 1 MONTH) AND
                CASE WHEN po.start_date = CURDATE()
                THEN po.start_time >= ADDTIME(CURTIME() , "2:00:00")
                ELSE po.start_time
                END`
        }
    }; 

    const orderingQuery = await ordering(sortBy);
    const dateRangeQuery = await dateRange(dateBy);

    return await mainDao.getProductByCategory( userId, lng, lat, genreId, hashtagId, dateRangeQuery, orderingQuery)
};

const getAllProdctList = async() => {
    return await mainDao.getAllProdctList()
};



module.exports = {
    getProductByCategory,
    getAllProdctList
};