const {newRobot, station, isWorkDay, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  const foreignRobot = newRobot(true, true, false);
  const expectedResult = 1;
  // act
  const result = station(foreignRobot);
  // assert
  expect(result).toEqual(expectedResult);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  const vintageRobot = newRobot(true, false, true );
  const expectedResult = 2;
  // act
  const result = station(vintageRobot);
  // assert
  expect(result).toEqual(expectedResult);
});

test('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange
  const regularRobot = newRobot(true, false, false);
  const expectedResult = 3;
  // act
  const result = station(regularRobot);
  // assert
  expect(result).toEqual(expectedResult);
});

test('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange
  const goodRobot = newRobot(false, false, false);
  const expectedResult = 4;
  // act
  const result = station(goodRobot);
  // assert
  expect(result).toEqual(expectedResult);
});

test('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange
  const todoRobot = newRobot(true, true, false, []);
  const expectedResult = -1;

  // act
  const result = prioritizeTasks(todoRobot);

  // assert
  expect(result).toEqual(expectedResult);
});

test('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange
  const lotsTodoRobot = newRobot(true, true, false);
  const expectedResult = 3;
  lotsTodoRobot.todos.push(1);
  lotsTodoRobot.todos.push(2);
  lotsTodoRobot.todos.push(3);

  // act
  const result = prioritizeTasks(lotsTodoRobot);

  // assert
  expect(result).toEqual(expectedResult);
});

test('test_workday_on_day_off_returns_false', () => {
  // arrange
  const dayOffBot = newRobot(false, true, false);
  dayOffBot.dayOff = 'Tuesday';
  const expectedResult = false;
  const today = 'Tuesday';

  // act
  const result = isWorkDay(dayOffBot, today);

  // assert
  expect(result).toEqual(expectedResult);
});

test('test_workday_not_day_off_returns_true', () => {
  // arrange
  const dayOffBotTrue = newRobot(false, true, false);
  dayOffBotTrue.dayOff = 'Tuesday';
  const expectedResult = true;
  // act
  const result = isWorkDay(dayOffBotTrue, 'Wednesday');

  // assert
  expect(result).toEqual(expectedResult);
});
