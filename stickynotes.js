class Stickynotes{

    constructor(color,id,text='Escriba aqui...'){
        this.clicka=false;
        this.id=id;
        this.nota=document.createElement("div");
        this.nota.setAttribute(("id"),this.id);
        this.nota.style.backgroundColor=color;
        this.texto = document.createElement("p");
        this.texto.innerHTML=text;
        this.nota.appendChild(this.texto);
        document.body.onmousemove= (event)=>{
            if(this.clicka){
                var x = event.clientX;
                var y = event.clientY;
                this.nota.style.left=x+"px";
                this.nota.style.top=y+"px";
            }
        };
          this.nota.onclick=(event)=>{
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
        return nota;
    }else{
        var nota=new Stickynotes(document.getElementById("sel").value,"nota"+cont,document.getElementById("tex").value);
        cont++;
        return nota;
}
}
document.getElementById("boton").onclick=creaNota;