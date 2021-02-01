var contentNode = document.getElementById('contents');
var component = <div className="grid-container">
    <div className="item1">
      <h1> Vaidehi Mungekar </h1>
    </div>
    <div className="item2">
      <img src= "./img/profile-pic.png" alt="Profile Picture" width="200" height="200"></img>
    </div>
    <div className="item3"> 
    I am an enthusiastic tech professional currently pursuing M.S. in Computer Science student at San Diego State University.
    I have complete understanding of software development lifecycle 
    from design, implementation to the deployment of the product using Agile methodology.
    </div>
    <div className="item4">
      <a href="https://github.com/VaidehiM-sys" target = "_blank" className="git-repo">VIEW MY GITHUB REPO</a>
    </div>
  </div>;
ReactDOM.render(component, contentNode);

