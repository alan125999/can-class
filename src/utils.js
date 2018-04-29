export var paddingLeft = function (str, length) {
  str = str.toString();
  if (str.length >= length) return str;
  else return paddingLeft("0" + str, length);
};

export var lessonColor = function (isFinal) {
  return (isFinal === true) ? "#ff6699" : "#33cc33";
};

export var myDateString = function (date) {
  return date.getFullYear() + "年"
    + paddingLeft((date.getMonth() + 1).toString(), 2) + "月"
    + paddingLeft(date.getDate().toString(), 2) + "日"
    + ' 星期' + '日一二三四五六'.charAt(date.getDay()) + " "
    + date.toTimeString().slice(0, 5);
}