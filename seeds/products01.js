
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: '1',
          name: 'SQUARE WHISKEY GLASSES // SET OF 4',
          image: '/images/drinkingcup.jpg',
          description:
            'The first thing you’ll notice about the Aqua Vitae Collection Square Whiskey Glasses is the off-set base. They were handcrafted for folks who like to be unique. The thick lead-free crystal is mineralized for extra strength, and each square glass is 3” wide to take your favorite cubes, spheres, and whiskey stones.',
          brand: 'JOYJOLT',
          category: 'Home',
          price: 54.99,
          countInStock: 10,
          rating: 4.5,
          numReviews: 12,
          user_id: 1
        },
        {
          id: '2',
          name: 'QI WIRELESS CHARGER ',
          image: '/images/wirelesscharger.jpg',
          description:
            'Inspired by the geometric shapes and lines, this Qi wireless charger is handcrafted in solid walnut wood. Hand polished to attain a natural wood shine, it has a wonderfully organic and understated appeal',
          brand: 'OAKYWOOD',
          category: 'Electronics',
          price: 66.99,
          countInStock: 7,
          rating: 4.0,
          numReviews: 8,
          user_id: 1
        },
        {
          id: '3',
          name: 'Cannon EOS 80D DSLR Camera',
          image: '/images/light1.jpg',
          description:
            "The Heng Balance Lamp is a minimalist, eye catching lamp with a twist. Where most lamps have a standard switch, this clever light source is controlled by two magnetic spheres. When you lift the lower ball, it's effortlessly attracted to the hanging one, remaining suspended in mid-air and switching on the light. Combined with its simple, curved appearance, this innovative lamp elevates the atmosphere of any home or office.",
          brand: 'HENG LAMP',
          category: 'Electronics',
          price: 39.99,
          countInStock: 5,
          rating: 3,
          numReviews: 12,
          user_id: 1
        },
        {
          id: '4',
          name: 'EGLOO RED',
          image: '/images/miniheater.jpg',
          description:
            'Egloo is a convenient and eco-friendly way to heat, scent, and humidify your space— all while adding a gentle glow that enhances the ambiance, whether you set it indoors or outdoors. Like a personal fireplace you can take with you almost everywhere, each Egloo is handmade in Italy by master artisans to offer both style and function.',
          brand: 'EGLOO',
          category: 'Electronics',
          price: 109.99,
          countInStock: 11,
          rating: 5,
          numReviews: 12,
          user_id: 1
        },
        {
          id: '5',
          name: 'TREE OF LIGHT',
          image: '/images/treelight.jpg',
          description:
            "The Tree Of Light is a stunningly beautiful sculptural art piece, that replaces just about everything you'd normally keep on your nightstand. It's a sleek LED lamp with a thin, cherry wood shade, and brightness that can be smoothly adjusted via the touch controls on the base. The 'Sleep Mode' setting will even turn it off automatically after 30 minutes, so you don't have to worry about falling asleep with the lights on.",
          brand: 'HOMETREE TECHNOLOGY',
          category: 'Electronics',
          price: 139.99,
          countInStock: 7,
          rating: 3.5,
          numReviews: 10,
          user_id: 1
        },
        {
          id: '6',
          name: 'PHILADELPHIA EAGLES HOVER HELMET',
          image: '/images/helmet.jpg',
          description:
            'Offering an elevated way to show off your team spirit— literally— Hover Helmets bring bold and creative style to your desk, side table, and anywhere you enjoy catching the big game.',
          brand: 'HOVER HELMETS',
          category: 'Electronics',
          price: 29.99,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
          user_id: 1
        }
      ]);
    });
};
