console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {
  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'));
  });

  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'));
  });

  const addButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve('butter'));
  });

  const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('cold drinks'));
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband: we should go in now`);
  console.log(`Wife: "I am hungry"`);

  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
  console.log(`Husband: we should go in now`);
  console.log(`Wife: "I don't like popcorn without butter!"`);

  let butter = await addButter;
  console.log(`added ${butter}`);

  let drinks = await getColdDrinks;
  console.log(`Husband: and here are ${drinks}`);
  console.log(`Wife: "Thanks, dear"`);

  console.log(`Husband: anything else, darling?`);
  console.log(`Wife: let's go, we are going to miss the previews`);
  console.log(`Husband: thanks for the reminder *grin*`);

  return ticket;
};

preMovie().then((t) => console.log(`person3 shows ${t}`));
console.log('person3 shows ticket');
