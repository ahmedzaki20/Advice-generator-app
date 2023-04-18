async function logJSONData() {
  const response = await fetch('	https://api.adviceslip.com/advice');
  const jsonData = await response.json();
  adviceId.innerHTML = `advice #${jsonData.slip.id}`;
  adviceQuto.innerHTML = `" ${jsonData.slip.advice} "`;
  console.log(jsonData.slip);
}
const adviceId = document.querySelector('.advice-id');
const adviceQuto = document.querySelector('.advice-quto');
const qutoBtn = document.querySelector('.dice-icon');
qutoBtn.addEventListener('click', logJSONData);
