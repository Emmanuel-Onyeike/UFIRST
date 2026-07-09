function showPaymentModal() { document.getElementById('paymentModal').style.display = 'flex'; }

function showAccountModal() {
    document.getElementById('paymentModal').style.display = 'none';
    document.getElementById('accountModal').style.display = 'flex';
    startTimer(300);
}

function startVerification() {
    document.getElementById('accountModal').style.display = 'none';
    document.getElementById('finalModal').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('instructionContent').style.display = 'block';
    }, 6000);
}

function startTimer(duration) {
    let timer = duration;
    const interval = setInterval(() => {
        let mins = parseInt(timer / 60, 10);
        let secs = parseInt(timer % 60, 10);
        document.getElementById('timer').innerText = `CLOSING IN ${mins}:${secs < 10 ? '0'+secs : secs}`;
        if (--timer < 0) { clearInterval(interval); location.reload(); }
    }, 1000);
}

function copyAcc() {
    navigator.clipboard.writeText(document.getElementById('accNum').innerText);
    alert("Account number copied to clipboard.");
}