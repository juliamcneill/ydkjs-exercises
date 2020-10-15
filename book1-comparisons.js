const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  startTime.split(":").map(Number);
  dayStart.split(":").map(Number);
  dayEnd.split(":").map(Number);

  endTime = startTime;

  while (durationMinutes > 60) {
    endTime[0]++;
    durationMinutes - 60;
  }
  endTime[1] += endTime[1];

  if (startTime[0] < dayStart[0] || endTime[0] > dayEnd[0]) {
    return false;
  } else if (startTime[0] == dayStart[0] && startTime[1] < dayStart[1]) {
    return false;
  } else if (endTime[0] == dayEnd[0] && endTime[1] > dayEnd[1]) {
    return false;
  }

  return true;
}

scheduleMeeting("7:00", 15); // false
scheduleMeeting("07:15", 30); // false
scheduleMeeting("7:30", 30); // true
scheduleMeeting("11:30", 60); // true
scheduleMeeting("17:00", 45); // true
scheduleMeeting("17:30", 30); // false
scheduleMeeting("18:00", 15); // false
