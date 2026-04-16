const notifyBtn = document.getElementById('notifyBtn');
const statusOutput = document.getElementById('statusOutput');

if (notifyBtn) {
  notifyBtn.addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    statusOutput.innerHTML = `
      <strong>Driver alert sent.</strong><br>
      Assistance requested at <strong>${timeString}</strong>.<br>
      Call the mail room at <strong>317-738-8077</strong> or campus security at <strong>317-738-8888</strong>.
    `;
  });
}
