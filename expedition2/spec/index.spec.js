const {
  getRightRovers,
  getAllRover,
  getRightDoc,
  getRightCaptain,
  getAllEngineer,
  getRightRocket,
} = require('../src/functions');

describe('Экспедиция на Луну', () => {
  describe('Отбор кандидатов', () => {
    let crew;
    beforeEach(() => {
      crew = [
        'Уильям Блейк, м, Бортмеханик, 11',
        'Том Браун, м, Врач, 14',
        'Стив Джонсон, м, Капитан, 23',
        'Джуди Лестер, ж, Бортмеханик, 16',
        'Кэтерин Лоу, ж, Врач, 9',
        'Роберт Стивенсон, м, Капитан, 12',
        'Клара Томпсон, ж, Врач, 10',
      ];
    });
    it('позволяет выбрать самого опытного капитана', () => {
      const bestCaptain = getRightCaptain();
      expect(bestCaptain).toBe(crew[2]);
    });
    it('позволяет выбрать самого опытного врача', () => {
      const bestDoctor = getRightDoc();
      expect(bestDoctor).toEqual(crew[1]);
    });
    it('позволяет выбрать всех бортмехаников', () => {
      const allEngineer = getAllEngineer();
      expect(allEngineer).toEqual([crew[0], crew[3]]);
    });
  });
  describe('Отбор оборудования', () => {
    let equipment;
    beforeEach(() => {
      equipment = [
        'Исследователь-2, марсоход, 3',
        'Рейнджер‑4, луноход, 5',
        'Покоритель-3, луноход, 7',
        'Искатель-1, марсоход, 5',
        'Путник-3, марсоход, 8',
      ];
    });
    it('Позволяет отобрать все луноходы', () => {
      const allRover = getAllRover();
      expect(allRover).toEqual([equipment[1], equipment[2]]);
    });
    it('позволяет выбрать только те луноходы, которые смогут прослужить больше 5 лет', () => {
      const rightRovers = getRightRovers();
      expect(rightRovers).toEqual([equipment[2]]);
    });
  });
  describe('Выбор ракеты', () => {
    let rockets;
    beforeEach(() => {
      rockets = [
        'Атлантис, орбитальная, 30',
        'Колумбия, межзвездная, 1209',
        'SpaceX, межзвездная, 209456',
      ];
    });
    it('позволяет выбрать межзвездную ракету с не максимальной дальностью полёта', () => {
      const rocket = getRightRocket();
      expect(rocket).toBe(rockets[1]);
    });
  });
});
