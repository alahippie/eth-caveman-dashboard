
const address = document.getElementById('address').textContent;
const balanceEl = document.getElementById('balance');

async function updateBalance() {
  const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/YOUR_INFURA_ID");
  const web3 = new Web3(provider);
  const wei = await web3.eth.getBalance(address);
  balanceEl.textContent = web3.utils.fromWei(wei, 'ether');
}

function openURL(url) {
  window.open(url, '_blank');
}

document.querySelectorAll('#checklist input[type=checkbox]').forEach(cb => {
  const key = 'caveman_' + cb.dataset.key;
  cb.checked = localStorage.getItem(key) === 'true';
  cb.addEventListener('change', () => {
    localStorage.setItem(key, cb.checked);
  });
});

updateBalance();
setInterval(updateBalance, 60000);
