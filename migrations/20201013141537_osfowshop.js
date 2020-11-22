

exports.up = function(knex) {
    return knex.schema.createTable('user', user =>{
        user.increments('id');
        user.string('name', 255).notNullable();
        user.string('email').notNullable().unique();
        user.string('password').notNullable();
        user.boolean('isAdmin');
        user.timestamp('created_at').defaultTo(knex.fn.now());

    
  
})
    .createTable('products', products =>{
        products.increments('id');
            products
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('user.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        products.string('name').notNullable()
        products.string('image').notNullable()
        products.string('brand').notNullable()
        products.string('category').notNullable()
        products.string('description').notNullable()
        products.integer('rating').notNullable()
        products.string('numReviews').notNullable()
        products.integer('price').notNullable()
        products.integer('countInStock').notNullable()
        products.timestamp('created_at').defaultTo(knex.fn.now());
    })

    .createTable('reviews', reviews =>{
        reviews.increments('id').notNullable()
        reviews.string('name').notNullable()
        reviews.integer('rating').notNullable()
        reviews.string('comment').notNullable()
        reviews.timestamp('created_at').defaultTo(knex.fn.now());
        reviews
        .integer('products_id')
        .unsigned()
        .notNullable()
        .references('products.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    .createTable('orders', orders =>{
        orders.increments('id');
            orders
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('user.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        orders.string('shippingaddress').notNullable()
        orders.string('paymentmethod').notNullable()
        orders.string('paymentresult').notNullable()
        orders.string('category').notNullable()
        orders.string('description').notNullable()
        orders.integer('rating').notNullable()
        orders.string('numReviews').notNullable()
        orders.integer('price').notNullable()
        orders.integer('countInStock').notNullable()
        orders.timestamp('created_at').defaultTo(knex.fn.now());

    })
    .createTable('paymentinfo', paymentinfo=>{
        paymentinfo.increments('id');
        paymentinfo.string('payid');
        paymentinfo.string('paystatus');
        paymentinfo.string('updatetime');
        paymentinfo.string('paymentemail')
        paymentinfo.integer('taxprice').notNullable()
        paymentinfo.integer('shippingprice').notNullable()
        paymentinfo.integer('totalprice').notNullable()
        paymentinfo.boolean('ispaid').notNullable
        paymentinfo.timestamp('timepaid').defaultTo(knex.fn.now())
        paymentinfo.boolean('isdeliverd').notNullable()
        paymentinfo.timestamp('timedeliverd').defaultTo(knex.fn.now())
        paymentinfo.timestamp('created_at').defaultTo(knex.fn.now());
            paymentinfo
                .integer('orders_id')
                .unsigned()
                .notNullable()
                .references('orders.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')


    })

    .createTable('shippingaddress', shippingaddress =>{

        shippingaddress.increments('id');
        shippingaddress.string('address').notNullable();
        shippingaddress.string('city').notNullable();
        shippingaddress.string('postalcode').notNullable();
        shippingaddress.string('state').notNullable()
        shippingaddress.string('country').notNullable()
        shippingaddress
            .integer('orders_id')
            .unsigned()
            .notNullable()
            .references('user.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

    })

    .createTable('orIeritems', orderItems =>{
        orderItems.increments('id')
        orderItems.string('name').notNullable
        orderItems.integer('quanity').notNullable
        orderItems.string('image').notNullable
        orderItems.integer('price').notNullable
        orderItems
        .integer('orders_id')
        .unsigned()
        .notNullable()
        .references('orders.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        orderItems
        .integer('product_id')
        .unsigned()
        .notNullable()
        .references('products.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableifExists('user')
        .dropTableifExists('products')
        .dropTableifExists('reviews')
        .dropTableifExists('orders')
        .dropTableifExists('paymentinfo')
        .dropTableifExists('shippingaddress')
        .dropTableifExists('orIeritems')
  
};
