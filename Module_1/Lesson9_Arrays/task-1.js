// JS Array Hometask #9.1

// для выдачи посылки и удаления клиента из начала массива
function giveParcel(queueArray) {
    let servedClient = queueArray.shift();
    alert(` ${servedClient} получил(а) посылку. В очереди осталось ${queueArray.length} человек.`);
    // console.log(` ${servedClient} получил(а) посылку. В очереди осталось ${queueArray.length} человек.`);
}

// для удаления клиента, который не получил посылку из конца списка
function leaveQueueWithoutParcel(queueArray) {
    let unServedClient = queueArray.pop();
    alert(`${unServedClient} не получил(а) посылку и ушел(ла) из очереди`);
    // console.log(`${unServedClient} не получил(а) посылку и ушел(ла) из очереди`);
}

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

// Кристина и Олег получили посылки и ушли из очереди. Вам необходимо удалить их из массива.
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);

//Теперь подошла очередь к Кириллу. И неожиданно сотрудница почты говорит, что скоро у них обеденный перерыв, и она успеет обслужить только Кирилла. 
// Поэтому все остальные люди, стоящие за Кириллом, решили не ждать, когда закончится обед, и просто ушли из отделения почты. 
alert('Извините, офис закрывается на обед.\nОбслуживается последний клиент, остальным просьба приходить после перерыва!');
//console.log('Sorry, lunch break, the office is closing./\nLast client will be served but other please, leave the room.');

//Вам необходимо сначала удалить Кирилла из массива peopleWaiting, а затем удалить людей, которые не успели получить посылки.
giveParcel(peopleWaiting);

do {
    // Debug print
    //console.log('peopleWaiting.length', peopleWaiting.length)
    leaveQueueWithoutParcel(peopleWaiting);
} while (peopleWaiting.length > 0);
