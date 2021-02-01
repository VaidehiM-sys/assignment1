var contentNode = document.getElementById('contents');
var component = /*#__PURE__*/React.createElement("div", {
  className: "grid-container"
}, /*#__PURE__*/React.createElement("div", {
  className: "item1"
}, /*#__PURE__*/React.createElement("h1", null, " Vaidehi Mungekar ")), /*#__PURE__*/React.createElement("div", {
  className: "item2"
}, /*#__PURE__*/React.createElement("img", {
  src: "./img/profile-pic.png",
  alt: "Profile Picture",
  width: "200",
  height: "200"
})), /*#__PURE__*/React.createElement("div", {
  className: "item3"
}, "I am an enthusiastic tech professional currently pursuing M.S. in Computer Science student at San Diego State University. I have complete understanding of software development lifecycle from design, implementation to the deployment of the product using Agile methodology."), /*#__PURE__*/React.createElement("div", {
  className: "item4"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/VaidehiM-sys",
  target: "_blank",
  className: "git-repo"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(component, contentNode);