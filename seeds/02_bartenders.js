
exports.seed = (knex, Promise) => {
  return knex('bartenders').del()
    .then(() => {
      return knex('bartenders').insert([
        {
          first_name: 'Reid',
          last_name: 'Garner',
          email: 'reidbgarner@gmail.com',
          password: 'reidg1990',
          workplace: 'Five Bar',
          image_url: 'https://media.licdn.com/dms/image/C4E03AQGXrKgm_tnF2w/profile-displayphoto-shrink_200_200/0?e=1553731200&v=beta&t=Ipv6sQ-VRjCcM_9hoJujPS8IirF6UXcsZkcN0hWv7xw'
        },
        {
          first_name: 'Andrew',
          last_name: 'Pederson',
          email: 'andrewpederson@gmail.com',
          password: 'andrewp2019',
          workplace: 'Foundry',
          image_url: 'https://media.licdn.com/dms/image/C4E03AQEpxR0WN9GdcQ/profile-displayphoto-shrink_800_800/0?e=1553731200&v=beta&t=oiOQvx3RNjfSSIDt8WZPY2KxHzdU5mZt77ru6btBE0o'
        },
        {
          first_name: 'Dane',
          last_name: 'Parke',
          email: 'danepark@gmail.com',
          password: 'danep1992',
          workplace: '10 Barrel Brewing',
          image_url: 'https://media.licdn.com/dms/image/C5603AQEJLplududPZg/profile-displayphoto-shrink_800_800/0?e=1553731200&v=beta&t=QXOSVOFTejZkf2b02V9CQliFKCFvOJRk025h_CO1De4'
        }
      ]);
    });
};
