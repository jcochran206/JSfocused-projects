/* elements need to display days hours mins */
const dayselm = document.getElementById('days');
const hourselm = document.getElementById('countdown');
const minuteselm = document.getElementById('minutes');

/* set date we are count down to */
const countDownDate = new Date("June 9, 2025 10:00:00").getTime();

/* create function to conduct countdown and conditional for function reaching zero */
function countDownTarget(targetDateString, elementId){
    const targetDate = new Date(targetDateString);

    function updateCountdown(){
        const now = new Date();
        const timeleft = targetDate - now;

        if(timeleft <= 0){
            document.getElementById(countdown).innerText = "countdown finished";
            clearInterval(intervalId);
            return;
        }

        const days = Math.floor(timeleft/ (1000 * 60 * 60 * 24));
        const hours = Math.floor(timeleft/ (1000 * 60 * 60) % 24);
        const minutes = Math.floor(timeleft/ (1000 * 60) % 60);

        document.getElementById(elementId).innerText = `${days}d ${hours}h ${minutes}m`;
    }

    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown();
}

countDownTarget(countDownDate,"countdown");