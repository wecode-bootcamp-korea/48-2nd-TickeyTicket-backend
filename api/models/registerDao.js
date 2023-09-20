const appDataSource = require('./dataSource');

const insertRegister = async (
  userId,
  registrationImageUrl,
  name,
  productDescription,
  importantNotice,
  discountInformation,
  placeName,
  address,
  addressDetail,
  price,
  sequence,
  startDate,
  startTime,
  runningTime,
  availableTicket,
  thumbnailImageUrl,
  performerName,
  performerDescription,
  actorImageUrl,
  categoryGenresId,
  coordinateX,
  coordinateY
) => {
  const queryRunner = await appDataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    await queryRunner.query(
      `INSERT INTO business_registration_images (
        user_id,
        registration_image_url
      ) VALUES (?, ?)`,
      [userId, registrationImageUrl]
    );

    const productResult = await queryRunner.query(
      `INSERT INTO products (
        user_id,
        name,
        description,
        important_notice,
        discount_information,
        place,
        address,
        region_1depth,
        region_2depth,
        zip_code,
        price
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        userId,
        name,
        productDescription,
        importantNotice,
        discountInformation,
        placeName,
        address,
        addressDetail,
        price,
      ]
    );

    const productId = productResult.insertId;

    await queryRunner.query(
      `INSERT INTO product_options (
        product_id,
        sequence,
        start_date,
        start_time,
        running_time,
        available_ticket
      ) VALUES (?, ?, ?, ?, ?, ?)
    `,
      [productId, sequence, startDate, startTime, runningTime, availableTicket]
    );

    const productOptionResult = await queryRunner.query(
      `SELECT id FROM product_options WHERE product_id = ?`,
      [productId]
    );

    const productOptionId = productOptionResult[0].id;

    await queryRunner.query(
      `INSERT INTO performers (
        product_option_id,
        performer_name,
        performer_description
      ) VALUES (?, ?, ?)`,
      [productOptionId, performerName, performerDescription]
    );

    await queryRunner.query(
      `INSERT INTO thumbnail_images (
        product_id,
        thumbnail_image_url
      ) VALUES (?, ?)`,
      [productId, thumbnailImageUrl]
    );

    const performerResult = await queryRunner.query(
      `SELECT id FROM performers WHERE product_option_id = ?`,
      [productOptionId]
    );

    const performerId = performerResult[0].id;

    await queryRunner.query(
      `INSERT INTO actor_images (
        performer_id,
        actor_image_url
      ) VALUES (?, ?)`,
      [performerId, actorImageUrl]
    );

    await queryRunner.query(
      `INSERT INTO product_category (
        product_id,
        category_genres_id
      ) VALUES (?, ?)`,
      [productId, categoryGenresId]
    );

    await queryRunner.query(
      `INSERT INTO map_coordinates (
        product_id,
        coordinate_x,
        coordinate_y
      ) VALUES (?, ?, ?)`,
      [productId, coordinateX, coordinateY]
    );

    await queryRunner.commitTransaction();

    return productId;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    throw error;
  } finally {
    await queryRunner.release();
  }
};

module.exports = {
  insertRegister,
};
