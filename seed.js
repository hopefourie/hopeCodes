// const { db, Experience, Project } = require('./server/db');

// const seedExperiences = [
//   {
//     title: 'Costume Designer',
//     company: 'Dating (York Avenue Productions)',
//     description: 'November 2019',
//   },
// ];

// const seedProjects = [
//   {
//     title: "Newt's Quest",
//     description: 'Venture through a magical wood to get your gnome hat back',
//     deployedUrl: 'https://newts-quest.herokuapp.com/',
//     githubUrl: 'https://github.com/hopefourie/Newts-Quest',
//   },
// ];

// const seed = async () => {
//   try {
//     await db.sync({ force: true });
//     await Promise.all(
//       seedExperiences.map((experience) => Experience.create(experience))
//     );
//     await Promise.all(seedProjects.map((project) => Project.create(project)));
//     console.log('Database successfully seeded 🍪');
//     db.close();
//     // seed your database here!
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports = seed;
// // If this module is being required from another module, then we just export the
// // function, to be used as necessary. But it will run right away if the module
// // is executed directly (e.g. `node seed.js` or `npm run seed`)
// if (require.main === module) {
//   seed()
//     .then(() => {
//       console.log('Seeding success!');
//       db.close();
//     })
//     .catch((err) => {
//       console.error('Oh noes! Something went wrong!');
//       console.error(err);
//       db.close();
//     });
// }
