const { log } = require('console');
const fs = require('fs');

const PATH = './src';

const crewInfo = fs.readFileSync(PATH + '/crew.txt', 'utf-8').split('\r\n').slice(1).map((el) => el.split(', '));
const roverInfo = fs.readFileSync('./src/equipment.txt', 'utf-8').split('\r\n').slice(1).map((el) => el.split(', '));
const rocketInfo = fs.readFileSync('./src/rockets.txt', 'utf-8').split('\r\n').slice(1).map((el) => el.split(', '));

// позволяет выбрать самого опытного капитана
function getRightCaptain() {
  const bestCaptain = crewInfo.filter(([, , position,]) => position === 'Капитан').sort((a, b) => b[3] - a[3]);
  return bestCaptain[0].join(', ');
}

// позволяет выбрать самого опытного врача
function getRightDoc() {
  const bestFemaleDoctor = crewInfo.filter(([, , position,]) => position === 'Врач').sort((a, b) => +b[3] - +a[3]);
  return bestFemaleDoctor[0].join(', ');
}

// позволяет выбрать всех бортмехаников
function getAllEngineer() {
  return crewInfo.filter(([, , position,]) => position === 'Бортмеханик').map((el) => el.join(', '));
}

// Позволяет отобрать все луноходы
function getAllRover() {
  return roverInfo.filter(([, type, ]) => type === 'луноход').map((el) => el.join(', '));
}

// позволяет выбрать только те луноходы, которые смогут прослужить больше 5 лет
function getRightRovers() {
  return roverInfo.filter(([, type, age]) => type === 'луноход' && age > 5).map((el) => el.join(', '));
}

// позволяет выбрать межзвездную ракету с не максимальной дальностью полёта
function getRightRocket() {
  const bestRocket = rocketInfo.filter(([, type, ]) => type === 'межзвездная').sort((a, b) => a[2] - b[2]);
  return bestRocket[0].join(', ');
}

module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket,
};
