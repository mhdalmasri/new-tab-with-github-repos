
class myGithub {
  constructor() {
    this.init()
  }
  init() {
    let u = document.getElementById("user").value
    const key = 'client_id=795b5caa7de1271e1d44&client_secret=038550c6e6d409ff4b24f7bc1d1ac69f6ba4e60e'
    const apiUrl = `https://api.github.com/users/${u}/repos?${key}`
    fetch(apiUrl)
      .then( resp => resp.json()) 
      .then(
          repos => {
          repos.sort(function (a, b) {
            return new Date(b.created_at) - new Date(a.created_at);
          });
          console.log(repos) 
          this.modRepos(repos)
        })
      .catch(
        err => console.log(`panic: ${err}`)
      )
  }
  search(){
    let u = document.getElementById("user").value
    if (u == ""){
    document.getElementById("repos").innerHTML=  `
    <div class="card mb-4 shadow-sm">
      <div class="card-body">
      <h5 class="card-title">This User Not Available. . . </h5>   
      </div>
    </div>
  
  `  }
    else{
    document.getElementById("repos").innerHTML=""
    this.init()
  }
  }
  modRepos(repos) {
    this.repos = repos
    this.repos.forEach(repo => this.template(repo))
  }
  template(x) {
    let git = document.createElement("repos");
    git.innerHTML =
      `
      <div class="card mb-4 shadow-sm" id=${x.name}>
        <div class="card-body">
        <h5 class="card-title">${x.name.substr(0,15)}. . </h5>
          <p class="card-text">${(x.description == null) ? 'Info not available' : x.description.substr(0,15)}. . . . </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <a href="${x.html_url}" type="button" class="btn btn-sm btn-outline-secondary">View</a>
            </div>
            <small class="text-muted">${(x.created_at).substr(0,10)}</small>
          </div>
        </div>
      </div>
    
    `
    document.getElementById("repos").appendChild(git);
  }
  Filter() {
    let f = document.getElementById("filter").value
    console.log(f)
    let resultRepos = this.repos.filter(repo => {
      let ele = document.getElementById(repo.name)
      if (!repo.name.toLowerCase().includes(f.toLowerCase())) {
        ele.style.display="none"
      }else{
        ele.style.display="block"
      }
    })
    this.template(resultRepos)
  }
 
}
const newGitRipo = new myGithub()



setInterval(function () {
  var dt = new Date();
  document.getElementById("time").innerHTML = (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2));
}, 1000);



function slideout() {
  document.getElementById("conf").style.right = "0vw"
  document.getElementById("conf").style.transition = "all .75s ease"
  document.getElementById("conf").style.display = "inline"
}



function one() {
  document.body.style.backgroundImage = "url('assets/img/celebration.png')"
}

function tow() {
  document.body.style.backgroundImage = "url('assets/img/naranjas.png')"
}

function three() {
  document.body.style.backgroundImage = "url('assets/img/science.png')"
}

function four() {
  document.body.style.backgroundImage = "url('assets/img/wild-sea.png')"
}

function five() {
  document.body.style.backgroundImage = "url('assets/img/brijan.gif')"
}

function six() {
  document.body.style.backgroundImage = "url('assets/img/retro-furnish.png')"
}