export function timeFormat(date) {
  const event = new Date(date);
  return event.toLocaleString("ko-Kr", { timeZone: "Asia/seoul" });
}

// export function timeFormat(date) {
//   const event = new Date(date);
//   return event.toLocaleString("ko-KR", { timeZone: "Asia/seoul" });
// }
