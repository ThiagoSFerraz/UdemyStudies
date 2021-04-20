const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/1 * 16 * * 2", function () {
  console.log("Executando Tarefa 1!", new Date().getSeconds());
});

setTimeout(() => {
  tarefa1.cancel();
  console.log("Cancelando Tarefa1");
}, 60000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)];
regra.hour = 16;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log("Executando Tarefa 2!", new Date().getSeconds());
});
