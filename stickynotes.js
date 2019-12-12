class Stickynotes{

    constructor(color,id,text='Escriba aqui...'){
        this.clicka=false;
        this.id=id;
        var d=new Date();
        this.nota=document.createElement("div");
        this.nota.setAttribute(("id"),this.id);
        this.nota.style.backgroundColor=color;
        this.texto = document.createElement("p");
        this.texto.innerHTML=text;
        this.texto1 = document.createElement("p");
        this.texto1.innerHTML=d.getDay()+"/"+d.getMonth()+"/"+d.getUTCFullYear();
        this.texto2 = document.createElement("p");
        this.texto2.innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
        this.nota.appendChild(this.texto);
        this.nota.appendChild(document.createElement("br"));
        this.nota.appendChild(this.texto1);
        this.nota.appendChild(this.texto2);
        
        document.body.onmousemove= (event)=>{
            if(this.clicka){
                var x = event.clientX;
                var y = event.clientY;
                this.nota.style.top=y-this.posiy+"px";
                this.nota.style.left=x-this.posix+"px";
            }
        };
          this.nota.onclick=(event)=>{  
            this.posix=this.nota.offsetWidth;
            this.posiy=this.nota.offsetHeight;
            if(this.clicka){
                this.clicka=false;
            }else{
                this.clicka=true;
            }
          };
        document.getElementById("container").appendChild(this.nota);
    }
    
    
}

var cont=0;
function creaNota(){
    if(document.getElementById("tex").value==""){
        var nota=new Stickynotes(document.getElementById("sel").value,"nota"+cont);
        cont++;
        document.getElementById("tex").innerHTML==""
        return nota;
    }else{
        var nota=new Stickynotes(document.getElementById("sel").value,"nota"+cont,document.getElementById("tex").value);
        cont++;
        document.getElementById("tex").innerHTML==""
        return nota;
}
}
document.getElementById("boton").onclick=creaNota;