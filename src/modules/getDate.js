import { format, formatDistanceToNow, isToday, compareAsc } from 'date-fns';

function getToday() {
  const div = document.createElement('div');
  div.classList.add('date-today');
  const today = format(new Date(), "cccc LLLL d, yyyy");
  div.textContent = today;
  
  return div;
}

function findDateDistance(date) {
  const splitDate = date.split('/');

  const month = splitDate[0]  - 1;
  const day = splitDate[1];
  const year = splitDate[2];

  const today = isToday(new Date(year, month, day));
  if(!today) {
    const dueDateDistance = formatDistanceToNow(new Date(year, month, day), { addSuffix: true });
    return dueDateDistance;
  }
  return 'DUE TODAY, BUDDY!!!';
}

function reformatDate(date) {
  const splitDate = date.split('-');

  const year = splitDate[0];
  const month = splitDate[1] - 1;
  const day = splitDate[2];

  const formattedDate = format(new Date(year,month, day),
  'MM/dd/yyyy');

  return formattedDate;
}

function unformatDate(aaa) {
  const splitDate = aaa.due.split('/');

    const month = splitDate[0]  - 1;
    const day = splitDate[1];
    const year = splitDate[2];

    const date = new Date(year, month, day);
    return date;
}

function sortDates(tasks) {
  let sortedDates = tasks.sort(function (a, b) {
    let formatA = unformatDate(a);
    let formatB = unformatDate(b);
    return formatA - formatB;
  });

  sortedDates.sort(compareAsc);
}

export { getToday, reformatDate, findDateDistance, sortDates }