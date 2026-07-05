// Загружаем опрос, отправляем голос и показываем результаты.
const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');

function renderResults(stat) {
  pollTitle.textContent = 'Результаты голосования:';
  pollAnswers.innerHTML = '';

  stat.forEach((item) => {
    const result = document.createElement('p');

    result.textContent = `${item.answer}: ${item.votes}`;
    pollAnswers.append(result);
  });
}

function sendVote(pollId, answerIndex) {
  const voteXhr = new XMLHttpRequest();

  voteXhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
  voteXhr.setRequestHeader(
    'Content-type',
    'application/x-www-form-urlencoded',
  );

  voteXhr.addEventListener('load', () => {
    // Сервер отвечает 201, это успешный статус.
    if (voteXhr.status < 200 || voteXhr.status >= 300) {
      alert(`Ошибка голосования: ${voteXhr.status}`);
      return;
    }

    const voteData = JSON.parse(voteXhr.responseText);

    renderResults(voteData.stat);
    alert('Спасибо, ваш голос засчитан!');
  });

  voteXhr.send(`vote=${pollId}&answer=${answerIndex}`);
}

function loadPoll() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

  xhr.addEventListener('load', () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      return;
    }

    const poll = JSON.parse(xhr.responseText);

    pollTitle.textContent = poll.data.title;
    pollAnswers.innerHTML = '';

    poll.data.answers.forEach((answer, index) => {
      const button = document.createElement('button');

      button.classList.add('poll__answer');
      button.textContent = answer;

      button.addEventListener('click', () => {
        sendVote(poll.id, index);
      });

      pollAnswers.append(button);
    });
  });

  xhr.send();
}

loadPoll();