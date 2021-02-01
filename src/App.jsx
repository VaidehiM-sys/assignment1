const contentNode = document.getElementById('contents');
const component = (<section id="hero_section" className="top_cont_outer">
	                    <div>  
		                    <div className="card hovercard">
			                    <div className="cardheader"></div>
			                    <div className="avatar">
				                    <img alt="" src="img/profile-pic.png"/>
			                    </div>
			                    <div className="info">	
				                    <div className="title">
					                    <a target="_blank" href="https://www.linkedin.com/in/vaidehi-mungekar/">Vaidehi Mungekar</a>
				                    </div>
				                    <div className="desc"><b>M.S. in Computer Science student at San Diego State University</b></div>
				                    <div className="desc">
					                    <h6>I am an enthusiastic tech professional with complete understanding of software development lifecycle 
					                    <br />from design, implementation to the deployment of the product using Agile methodology.</h6>
				                    </div>
			                    </div>
			                    <div className="bottom">         
				                    <div id="filters">
					                    <ul className="clearfix">
						                    <li><a className="" href="https://github.com/VaidehiM-sys" target="_blank">
						                    <h5>VIEW MY GITHUB REPO</h5>
						                    </a></li>
					                    </ul>
				                    </div> 
			                    </div>
		                    </div>
	                    </div>
</section>);
ReactDOM.render(component, contentNode);


