let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let index = 0; index < fish.length; index += 1) {
  console.log(fish[index]);
  if (fish[index] === 'Nemo') {
    break;
  }
}