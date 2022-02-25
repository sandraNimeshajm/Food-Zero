//@ts-nocheck

const date = () => {
  document.getElementById("date-picker").value = new Date()
    .toISOString()
    .substring(0, 10);
};

export default date;
