import LectureList from './lectureList.json';

function addClassToFinalDays() {
    const monthStr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let daysStringNeedChange = Array(0);
    for (let i = 0; i < LectureList.length; i++) {
        let len = LectureList[i].time.length;
        daysStringNeedChange.push(monthStr[LectureList[i].time[len - 1].month - 1] + LectureList[i].time[len - 1].day);
    }
    let selectedDays = document.querySelectorAll(".Cal__Day__selection")
    for (let i = 0; i < selectedDays.length; i++) {
        if (daysStringNeedChange.includes(selectedDays[i].innerText)) selectedDays[i].style.backgroundColor = "#ff6699";
    }
}

export default addClassToFinalDays;