document.addEventListener("DOMContentLoaded", function() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    

    function updateTime() {
        let Day = document.getElementById("day");
        let Time = document.getElementById("time");
        const d = new Date();
        let day = days[d.getDay()];
        let time = d.getTime();
        Time.innerText = time;
        Day.innerText = day;
    }

    updateTime();

    setInterval(updateTime, 1000);
});
