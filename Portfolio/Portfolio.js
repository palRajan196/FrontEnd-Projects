var Sidebar = document.getElementById("sidebar-hidden");

var active = document.getElementsByClassName("about-tab-contant");
var selected = document.getElementsByClassName("about-tab-link");

function SideBar(){
   Sidebar.style.right = `${0}px`;
   
}
function SidebarHidden(){
   Sidebar.style.right = `${-200}px`;
}


function About(section){
    //alert(section);
     for(contant of active){
        contant.classList.remove("active");
     }
     for(select of selected){
        select.classList.remove("selected");
     }
     event.currentTarget.classList.add("selected");
     document.getElementById(section).classList.add("active");
}