import { Router } from "./router.js"

const router = new Router()
router.add('/', "./pages/home.html")
router.add('/universe', "./pages/universe.html")
router.add('/explorer', "./pages/explorer.html")
router.add(404, './pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () =>  router.route()

const buttonMenu = document.querySelector('.buttonMenu');
const buttonHome = document.querySelector('.buttonHome');
const buttonUniverse = document.querySelector('.buttonUniverse');
const buttonExplorer = document.querySelector('.buttonExplorer');

if(buttonMenu){
    buttonMenu.addEventListener('click', function(){
      buttonMenuClick()
    })
  }
  buttonHome.addEventListener('click', function(){
    buttonHomeClick()
  })
  buttonUniverse.addEventListener('click', function(){
    buttonUniverseClick()
  
  })
  buttonExplorer.addEventListener('click', function(){
    buttonExplorerClick()
    
  })

  function buttonHomeClick(){
    buttonUniverse.classList.remove('active');
    buttonExplorer.classList.remove('active');
    buttonHome.classList.add('active');
    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Maxtherox/SPA---UNIVERSE/master/src/img/mountains-universe.png')"
  }
  
  function buttonUniverseClick(){
    buttonUniverse.classList.add('active');
    buttonExplorer.classList.remove('active');
    buttonHome.classList.remove('active');
    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Maxtherox/SPA---UNIVERSE/master/src/img/mountains-universe-3.png')"
  
  }
  
  function buttonExplorerClick(){
    buttonUniverse.classList.remove('active');
    buttonExplorer.classList.add('active');
    buttonHome.classList.remove('active');
    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Maxtherox/SPA---UNIVERSE/master/src/img/mountains-universe-2.png')"
}