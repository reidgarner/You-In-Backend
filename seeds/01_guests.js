
exports.seed = (knex, Promise) => {
  return knex('guests').del()
    .then(() => {
      return knex('guests').insert([
        {
          first_name: 'Josh',
          last_name: 'Scala',
          email: 'joshscala@gmail.com',
          password: 'joshs2019',
          image_url: 'https://media.licdn.com/dms/image/C4E03AQF3bGM_mVBJ7A/profile-displayphoto-shrink_800_800/0?e=1553731200&v=beta&t=_Ok9fTOd6ItBeimZIOIMxa4Hn75xrkiwgQkOnX4-Rqo'
        },
        {
          first_name: 'DeBronis',
          last_name: 'Warren',
          email: 'debroniswarren@gmail.com',
          password: 'debronisw1988',
          image_url: 'https://media.licdn.com/dms/image/C5603AQHN3WwoEuuaRQ/profile-displayphoto-shrink_800_800/0?e=1553731200&v=beta&t=LYpJXaNVP5TN__Ii0uX74mMqHn5Rjb0vF74OXleSA04'
        },
        {
          first_name: 'Sonja',
          last_name: 'Chacon',
          email: 'sonjachacon@gmail.com',
          password: 'sonjac1987',
          image_url: 'https://media.licdn.com/dms/image/C4E03AQGEg5ZaDPyHCQ/profile-displayphoto-shrink_800_800/0?e=1553731200&v=beta&t=ppVLrLBhrOIXl-rF80pw_p3M0ln5h3joNoffQfjcUpo'
        },
        {
          first_name: 'Meredith',
          last_name: 'Fontana',
          email: 'meredithf@gmail.com',
          password: 'meredithf1988',
          image_url: ''
        },
        {
          first_name: 'Jimmy',
          last_name: 'Liang',
          email: 'jimmyliang@gmail.com',
          password: 'jimmyl1996',
          image_url: 'https://media.licdn.com/dms/image/C5103AQFEZJ2HnuAdGA/profile-displayphoto-shrink_800_800/0?e=1553731200&v=beta&t=5A-oN3LrBEVnCYQ44Kv1bvm5wUlhZLNeS6IlBYPOpBw'
        },
      ]);
    });
};
