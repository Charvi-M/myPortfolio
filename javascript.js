    /** -----------------------Scroll-------------------- */
    var typingEffect= new Typed(".mult", 
    {strings:["I am Charvi,<br>welcome here!<br>This is a place<br>where I put my<br>random creative<br>works on show.","I hope you enjoy<br>my art! Grateful<br>for your support.<br>I'm happy to<br>have you here<br>♥ ♥ ♥ ♥ ♥ ♥"],
    loop: true,
    typeSpeed : 160,
    backSpeed : 20,
    backDelay : 1500,
    })
    /** ---------------------------tabs------------------- */
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    var layers = document.getElementsByClassName("layer");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(layer of layers){
            layer.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
       
        //document.getElementById(tabname).classList.toggle("tab-click");
        // for(layer of layers){
        //  if(document.getElementById(tabname).classList.contains("active-tab")&& layer.id==tabname){
        //     console.log('yes');
        //     document.getElementById(tabname).classList.toggle("tab-click");
        //  }
        // else if(layer.id != tabname){
        //    console.log('no');
        //    document.getElementById(tabname).classList.toggle("layer2");
        // }
        // }
    }