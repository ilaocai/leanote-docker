var MSG={"noTag":"No tag","saveSuccess":"Save success","none":"None","like":"Like","unlike":"Unlike","delete":"Delete","cancel":"Cancel","confirm":"Confirm","chooseReason":"Select report reason","reportSuccess":"Reporting success, we will notify the author, thank you for your monitor","error":"Error","reportComment?":"Report this comment?","reportBlog?":"Report this blog?","confirmDeleteComment":"Are you sure?","scanQRCode":"Open weichat and scan the QR code","justNow":"Just now","minutesAgo":"minutes ago","hoursAgo":"hours ago","daysAgo":"days ago","weeksAgo":"weeks ago","monthsAgo":"months ago"};function getMsg(key, data) {var msg = MSG[key];if(msg) {if(data) {if(!isArray(data)) {data = [data];}for(var i = 0; i < data.length; ++i) {msg = msg.replace("%s", data[i]);}}return msg;}return key;}