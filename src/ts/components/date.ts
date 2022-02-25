//@ts-nocheck

const date = () => {
  const datePicker = document.getElementById("date-picker");

  if (!datePicker) return;

  datePicker.value = new Date().toISOString().substring(0, 10);
};

export default date;
