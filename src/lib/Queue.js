import BeeQ from 'bee-queue';
import CancellationMail from '../app/jobs/CancellationMail';
import { redisConfig } from '../config/database';

const jobs = [CancellationMail];

/*
 Queue p/ background jobs:
   Para cada job uma fila é criada e dentro dessa fila é armazenado o beeq,
  que é a instancia que conecta com o Raidis e consegue armazenar e recuperar
  valor do banco de dados.
   O Handle processa as filas, recebe as variaveis de dentro do contexto, e
  armazena o job dentro da fila.
   O process vai pegar cada um dos jobs e ficar processando em tempo real.
  Cada vez que tem uma adição de jobs dentro do Raids, o process queue
   entra em ação e processa o job em background.
*/
class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        beeq: new BeeQ(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(queue, job) {
    return this.queues[queue].beeq.createJob(job).save();
  }

  proccessQueue() {
    jobs.forEach(job => {
      const { beeq, handle } = this.queues[job.key];

      beeq.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job, error) {
    console.log(`Queue ${job.queue.name}: FAILED`, error);
  }
}

export default new Queue();
