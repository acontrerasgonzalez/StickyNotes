class Stickynotes{

    constructor(alt,anc,color,id){
        this.clicka=false;
        this.alt=alt;
        this.anc=anc;
        this.id=id;
        this.nota=document.createElement("div");
        this.nota.setAttribute(("id"),this.id);
        this.nota.style.left="50px";
        this.nota.style.top="50px";
        this.nota.style.backgroundColor=color;
        this.nota.style.width=anc+"px";
        this.nota.style.height=alt+"px";
        var texto = document.createTextNode("Escriba aqui..."); 
        this.nota.appendChild(texto);
        document.body.addEventListener("onmousemove", (event)=>{
            if(this.clicka=true){
                var x = event.clientX;
                var y = event.clientY;
                this.nota.style.left=x+"px";
                this.nota.style.top=y+"px";
            }
        });
        this.nota.addEventListener("onclick", (event)=>{
            if(this.clicka){
                this.clicka=false;
            }else{
                this.clicka=true;
            }
          });
        document.body.appendChild(this.nota);
    }
    
}
var nota=new Stickynotes(300,300,"yellow","nota1");