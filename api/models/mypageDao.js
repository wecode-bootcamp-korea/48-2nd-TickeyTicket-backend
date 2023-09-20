const appDataSource = require('./dataSource');

const checkTicket = async( userId, paymentCode, productOptionId ) => {
    try { 
        const [checkdate] = await appDataSource.query(
        `
        SELECT 
            CASE 
                WHEN po.start_date >= CURDATE() AND 
                CASE WHEN po.start_date = CURDATE()
                THEN po.start_time >= ADDTIME(CURTIME() , "3:00:00")
                ELSE po.start_time 
                END
                THEN 1
                ELSE 0
                END  AS checkticketdate
        FROM product_options po 
        LEFT JOIN
            payment_information pi ON pi.product_option_id = po.id
        WHERE 
            pi.user_id = ? AND 
            pi.payment_code = ? AND
            pi.product_option_id = ? 
        `,
        [userId, paymentCode, productOptionId]
    );
    return checkdate;
} catch {
    const error = new Error('dataSource Error');
    error.statusCode = 400;

    throw error;
}
};

const checkTicketList = async( userId, paymentCode, productOptionId ) => {
    try{
        const [checklist] = await appDataSource.query(
            `
            SELECT 
                id
            FROM payment_information
            WHERE 
                user_id = ? AND 
                payment_code = ? AND
                product_option_id = ? 
            `
            ,
            [ userId, paymentCode, productOptionId ]
        );
        return checklist
    } catch {
        const error = new Error('dataSource Error');
        error.statusCode = 400;
    
        throw error;
    };
};

const deleteBookingTicket = async( userId, paymentCode, productOptionId) => {
    const deleteRows = (await appDataSource.query(
        `
        UPDATE payment_information pi
        SET pi.deleted_at = CURRENT_TIMESTAMP()
        WHERE 
            pi.user_id = ? AND
            pi.payment_code = ? AND
            pi.product_option_id = ? 
        `,
        [ userId, paymentCode, productOptionId ]
    ))

	return deleteRows
};

module.exports = {
    checkTicket,
    checkTicketList,
    deleteBookingTicket
}