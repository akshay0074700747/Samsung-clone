var imgstr=['Camerry Res/kv-galaxy-s23-ultra_m.jpg','Camerry Res/kv-galaxy-s23.jpg','Camerry Res/kv-galaxy-book3.jpg','Camerry Res/kv-galaxy-z-flip4.jpg','Camerry Res/kv-galaxy-z-fold4.jpg'];
var frstsmllslide=['Camerry Res/banner_galaxy-s23-tvc.jpg','Camerry Res/banner_galaxy-z-flip4-launch-film_l.jpg','Camerry Res/banner_galaxy-z-fold4-launch-film_l.jpg'];
var scntsmllslide=['Camerry Res/banner_2023-1h-unpacked-highlights.jpg','Camerry Res/banner_2022-2h-unpacked-highlights.jpg'];
var displaytxt=["Galaxy S23 Ultra","Galaxy S23 | S23+","Galaxy Book3 Series","Galaxy Z Flip4","Galaxy Z Fold4"];

var count=0;
var coun1=0;
var count2=0;
var prevcount=0;
var firstprevcount=0;
var secondprevcount=0;
var largimgfirstbttn=document.getElementById("0");
var largimgsecondbttn=document.getElementById("1");
var largimgthirdbttn=document.getElementById("2");
var largimgfourthbttn=document.getElementById("3");
var largimgfifthbttn=document.getElementById("4");
var firstamallimgfirstbttn=document.getElementById("21");
var firstamallimgsecondbttn=document.getElementById("22");
var firstamallimgthirdbttn=document.getElementById("23");
var secondsmallimgfirstbttn=document.getElementById("31");
var secondsmallimgsecondbttn=document.getElementById("32");
var leftslidebtn=document.getElementById("leftbtn");
var rightslidebtn=document.getElementById("rightbtn");
var largbackground=document.getElementById("largbackground");
var largtxt=document.getElementById("largtxt");
var rotatebttn=document.getElementById("circular");
var lrgimgbttnsclssname=document.querySelectorAll('.lrgimgbttns')
var firstimgbttn=document.querySelectorAll('.firstimgbttn');
var scendimagbttn=document.querySelectorAll('.scndimagebttn');

var firstleftslidebtn=document.getElementById("frstleftbtn");
var firstrightslidebtn=document.getElementById("frstrightbtn");
var secondleftslidebtn=document.getElementById("scntleftbtn");
var secondrightslidebtn=document.getElementById("scntrightbtn");
var firstsmallimg=document.getElementById("firstone");
var secondsmllimg=document.getElementById("secondone");

var lrgbtnarray=[largimgfirstbttn,largimgsecondbttn,largimgthirdbttn,largimgfourthbttn,largimgfifthbttn];
var frstbtnarray=[firstamallimgfirstbttn,firstamallimgsecondbttn,firstamallimgthirdbttn];
var scntbtnarray=[secondsmallimgfirstbttn,secondsmallimgsecondbttn];
var movetotop=document.getElementById("Mvtotop");
var videooo=document.getElementById("videooo");

firstleftslidebtn.addEventListener("click",()=>{
    coun1--;
    if(coun1<0){
        coun1=2; 
    }
    frstbtnarray[coun1].className="active";
    coun1==2 ? frstbtnarray[0].className="" : frstbtnarray[coun1+1].className="";
    var str=frstsmllslide[coun1];
    firstsmallimg.style.backgroundImage="url('" + str + "')";
    firstprevcount=coun1;
});
firstrightslidebtn.addEventListener("click",()=>{
    coun1++;
    if(coun1>2){
        coun1=0;
    }
    frstbtnarray[coun1].className="active";
    coun1==0 ? frstbtnarray[2].className="" : frstbtnarray[coun1-1].className="";
    var str=frstsmllslide[coun1];
    firstsmallimg.style.backgroundImage="url('" + str + "')"; 
    firstprevcount=coun1;
});
firstimgbttn.forEach(function(element){
    element.addEventListener("click",()=>{
        coun1=parseInt(element.id)-21;
        frstbtnarray[firstprevcount].className="";
            frstbtnarray[coun1].className="active";
        var str=frstsmllslide[coun1];
        firstsmallimg.style.backgroundImage="url('" + str + "')"; 
        firstprevcount=coun1;
    });
});
secondleftslidebtn.addEventListener("click",()=>{
    count2--;
    if(count2<0){
        count2=1; 
    }
    scntbtnarray[count2].className="active";
    count2==1 ? scntbtnarray[0].className="" : scntbtnarray[count2+1].className="";
    var str=scntsmllslide[count2];
    secondsmllimg.style.backgroundImage="url('" + str + "')";
    secondprevcount=count2;
});
secondrightslidebtn.addEventListener("click",()=>{
    count2++;
    if(count2>1){
        count2=0; 
    }
    scntbtnarray[count2].className="active";
    count2==0 ? scntbtnarray[1].className="" : scntbtnarray[count2-1].className="";
    var str=scntsmllslide[count2];
    secondsmllimg.style.backgroundImage="url('" + str + "')";
    secondprevcount=count2;
});
scendimagbttn.forEach(function(element){
    element.addEventListener("click",()=>{
        count2=parseInt(element.id)-31;
        scntbtnarray[secondprevcount].className="";
            scntbtnarray[count2].className="active";
        var str=scntsmllslide[count2];
        secondsmllimg.style.backgroundImage="url('" + str + "')"; 
        secondprevcount=count2;
    });
});

lrgimgbttnsclssname.forEach(function(element){
    element.addEventListener("click",()=>{
        count=parseInt(element.id);
        lrgbtnarray[prevcount].className="";
            lrgbtnarray[count].className="active";
        var str=imgstr[count];
        largtxt.textContent=displaytxt[count];
        largbackground.style.backgroundImage="url('" + str + "')"; 
        prevcount=count;
    });
});

rightslidebtn.addEventListener("click",function () {
    
    count++;
    if (count>4) {
        count=0;
    }
    largtxt.textContent=displaytxt[count];
    lrgbtnarray[count].className="active";
    count==0 ? lrgbtnarray[4].className="" : lrgbtnarray[count-1].className="";
    var str=imgstr[count];
    largbackground.style.backgroundImage="url('" + str + "')";  
    prevcount=count;
});

leftslidebtn.addEventListener("click",function () {
    count--;
    if (count<0) {
        count=4;
    }
    largtxt.textContent=displaytxt[count];
    lrgbtnarray[count].className="active";
    count==4 ? lrgbtnarray[0].className="" : lrgbtnarray[count+1].className="";
    var str=imgstr[count];
    largbackground.style.backgroundImage="url('" + str + "')";
    prevcount=count;
});


window.addEventListener("scroll",()=>{
    rotatebttn.id="circularoppo";
});

rotatebttn.addEventListener("click",()=>{
    if(rotatebttn.id=="circular"){
        rotatebttn.id="circularoppo";
        window.scrollTo(0,document.body.scrollHeight);
    }else{
        window.scrollTo(0,0);
        setTimeout(function() {
            rotatebttn.id="circular";
          }, 700); 
    }
});

movetotop.addEventListener("click",()=>{
    window.scrollTo(0,0);
});

videooo.addEventListener("click",()=>{
    window.location.href="https://youtu.be/iLwsPnywFc0";
});



