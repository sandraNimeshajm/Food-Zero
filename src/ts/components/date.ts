const date = () => {
  const dateFooter = new Date().getFullYear();
  document.querySelector(".year").innerHTML = dateFooter.toString();
};

export default date;
