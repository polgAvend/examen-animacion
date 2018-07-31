// configurar extencion de animacion
var frame=window.requestAnimationFrame||
		  window.mozRequedAnimationFrame||
		  window.webkitRequestAnimationFrame||
		  window.msRequesAnimationFrame;

var canvas=document.querySelector("#lienzo");
var ctx=canvas.getContext('2d');



//=======IMAGEN japanes======
var sprite=new Image();
sprite.src="img/img2.jpg";
var numerowidth=0;
var ubicacionx =0;
var ubicacionxx=0;
// Variables de rotacion imagen
var numero1=0;
var ubicacion1=0;

function tiempo(){
	if(numerowidth>=1024) {numerowidth=0}else{numerowidth+=10}
		for (var i = 0; i <= numerowidth; i+=341) {
			if(numerowidth>=i) {ubicacionx=i}
		}
	if(numero1>=1000) {numero1=0}else{numero1+=15}
		for (var a = 0; a <= numero1; a+=10) {
			if(numero1>=a) {ubicacion1=a}
		}
	
	//ctx.draw(imagen, x1,y1,recortex, recortey,x2,xy2);
ctx.clearRect(ubicacion1,100,100,100);

//=================
//		PAISAJE
//=================
//		cielo
var cielo={
		colorfondo0:"blue",
		colorfondo1:"white",
		iniciox:0,inicioy:0,
		iniciox1:1000,inicioy1:400,
		ord:0,ord1:1,
		a:0,b:100,c:0,d:350,
		visualizar:function(){
			var grd=ctx.createLinearGradient(cielo.a,cielo.b,cielo.c,cielo.d);
			grd.addColorStop(cielo.ord,cielo.colorfondo0);
			grd.addColorStop(cielo.ord1,cielo.colorfondo1);
			ctx.fillStyle= grd;
			ctx.fillRect(cielo.iniciox,cielo.inicioy,cielo.iniciox1,cielo.inicioy1);
		}
}
cielo.visualizar();

//		mar
var mar={
	colorfondo0:"cyan",
	colorfondo1:"white",
	iniciox:0,inicioy:400,
	iniciox1:1000,inicioy1:500,
	a:0,b:407,c:0,d:490,  ord:0, ord1:1,
	visualizar:function(){
		var grd=ctx.createLinearGradient(mar.a,mar.b,mar.c,mar.d);
		grd.addColorStop(mar.ord,mar.colorfondo0);//#2191F9");
		grd.addColorStop(mar.ord1,mar.colorfondo1);
		ctx.fillStyle= grd;
		ctx.fillRect(mar.iniciox,mar.inicioy,mar.iniciox1,mar.inicioy1);
	}
}
mar.visualizar();

//		fonfo mar
var fondo={
	colorfondo0:"black",
	colorfondo1:"transparent",
	iniciox:0, inicioy:500,
	iniciox1:1000,inicioy1:-40,
	a:0, b:460, c:0, d:497, ord:1, ord1:0,
	visualizar:function(){
		var grd=ctx.createLinearGradient(fondo.a,fondo.b,fondo.c,fondo.d);
		grd.addColorStop(fondo.ord,fondo.colorfondo0);//#2191F9");
		grd.addColorStop(fondo.ord1,fondo.colorfondo1);
		ctx.fillStyle= grd;
		ctx.fillRect(fondo.iniciox,fondo.inicioy,fondo.iniciox1,fondo.inicioy1);
	}
}
fondo.visualizar();

//		montaña 1
var montaña1={
	colorfondo:"purple",
	iniciox:0,
	inicioy:400,
	lineax:200,
	lineay:100,
	lineax1:400,
	lineay1:400,
	visualizar:function(){
		ctx.beginPath();
		ctx.fillStyle= montaña1.colorfondo;
		ctx.moveTo(montaña1.iniciox,montaña1.inicioy);
		ctx.lineTo(montaña1.lineax,montaña1.lineay);
		ctx.lineTo(montaña1.lineax1,montaña1.lineay1);
		ctx.fill();		
	}
}	
montaña1.visualizar();

//		montaña 2
var montaña2={
	colorfondo:"blue",
	iniciox:200,
	inicioy:400,
	lineax:400,
	lineay:100,
	lineax1:600,
	lineay1:400,
	visualizar:function(){
		ctx.beginPath();
		ctx.fillStyle= montaña2.colorfondo;
		ctx.moveTo(montaña2.iniciox,montaña2.inicioy);
		ctx.lineTo(montaña2.lineax,montaña2.lineay);
		ctx.lineTo(montaña2.lineax1,montaña2.lineay1);
		ctx.fill();		
	}
}
montaña2.visualizar();

//		montaña 3
var montaña3={
	colorfondo:"purple",
	iniciox:400,
	inicioy:400,
	lineax:600,
	lineay:100,
	lineax1:800,
	lineay1:400,
	visualizar:function(){
		ctx.beginPath();
		ctx.fillStyle= montaña3.colorfondo;
		ctx.moveTo(montaña3.iniciox,montaña3.inicioy);
		ctx.lineTo(montaña3.lineax,montaña3.lineay);
		ctx.lineTo(montaña3.lineax1,montaña3.lineay1);
		ctx.fill();	
	}
}
montaña3.visualizar();

//		montaña 4
var montaña4={
	colorfondo:"blue",
	iniciox:600,
	inicioy:400,
	lineax:800,
	lineay:100,
	lineax1:1000,
	lineay1:400,
	visualizar:function(){
		ctx.beginPath();
		ctx.fillStyle= montaña4.colorfondo;
		ctx.moveTo(montaña4.iniciox,montaña4.inicioy);
		ctx.lineTo(montaña4.lineax,montaña4.lineay);
		ctx.lineTo(montaña4.lineax1,montaña4.lineay1);
		ctx.fill();		
	}
}
montaña4.visualizar();

//		nevado 1
var nevadoa1={
	colorfondo:"white",
	iniciox:132,
	inicioy:200,
	lineax:200,
	lineay:100,
	lineax1:200,
	lineay1:300,
	visualizar:function(){
		ctx.beginPath();
		ctx.fillStyle= nevadoa1.colorfondo;
		ctx.moveTo(nevadoa1.iniciox,nevadoa1.inicioy);
		ctx.lineTo(nevadoa1.lineax,nevadoa1.lineay);
		ctx.lineTo(nevadoa1.lineax1,nevadoa1.lineay1);
		ctx.fill();
	}
} 
nevadoa1.visualizar();

var nevadoa2={
	colorfondo: "#D6D7D7",
	iniciox:200,
	inicioy:100,
	lineax:267,
	lineay:200,
	lineax1:200,
	lineay1:300,
	visualizar:function(){
		ctx.beginPath();
		ctx.fillStyle= nevadoa2.colorfondo;
		ctx.moveTo(nevadoa2.iniciox,nevadoa2.inicioy);
		ctx.lineTo(nevadoa2.lineax,nevadoa2.lineay);
		ctx.lineTo(nevadoa2.lineax1,nevadoa2.lineay1);
		ctx.fill();
	}
} 
nevadoa2.visualizar();

//		nevado 2 
var nevadob1={
	colorfondo:"white",
	iniciox:332,
	inicioy:200,
	lineax:400,
	lineay:100,
	lineax1:400,
	lineay1:300,
	visualizar:function(){
		ctx.beginPath();
		ctx.fillStyle= nevadob1.colorfondo;
		ctx.moveTo(nevadob1.iniciox,nevadob1.inicioy);
		ctx.lineTo(nevadob1.lineax,nevadob1.lineay);
		ctx.lineTo(nevadob1.lineax1,nevadob1.lineay1);
		ctx.fill();
	}
} 
nevadob1.visualizar();

var nevadob2={
	colorfondo: "#D6D7D7",
	iniciox:400,
	inicioy:100,
	lineax:467,
	lineay:200,
	lineax1:400,
	lineay1:300,
	visualizar:function(){
		ctx.beginPath();
		ctx.fillStyle= nevadob2.colorfondo;
		ctx.moveTo(nevadob2.iniciox,nevadob2.inicioy);
		ctx.lineTo(nevadob2.lineax,nevadob2.lineay);
		ctx.lineTo(nevadob2.lineax1,nevadob2.lineay1);
		ctx.fill();
	}
} 
nevadob2.visualizar();


//		nevado 3 
var nevadoc1={
	colorfondo:"white",
	iniciox:532,
	inicioy:200,
	lineax:600,
	lineay:100,
	lineax1:600,
	lineay1:300,
	visualizar:function(){
		ctx.beginPath();
		ctx.fillStyle= nevadoc1.colorfondo;
		ctx.moveTo(nevadoc1.iniciox,nevadoc1.inicioy);
		ctx.lineTo(nevadoc1.lineax,nevadoc1.lineay);
		ctx.lineTo(nevadoc1.lineax1,nevadoc1.lineay1);
		ctx.fill();
	}
} 
nevadoc1.visualizar();
var nevadoc2={
	colorfondo: "#D6D7D7",
	iniciox:600,
	inicioy:100,
	lineax:667,
	lineay:200,
	lineax1:600,
	lineay1:300,
	visualizar:function(){
		ctx.beginPath();
		ctx.fillStyle= nevadoc2.colorfondo;
		ctx.moveTo(nevadoc2.iniciox,nevadoc2.inicioy);
		ctx.lineTo(nevadoc2.lineax,nevadoc2.lineay);
		ctx.lineTo(nevadoc2.lineax1,nevadoc2.lineay1);
		ctx.fill();
	}
} 
nevadoc2.visualizar();

//		nevado 4 
var nevadod1={
	colorfondo:"white",
	iniciox:732,
	inicioy:200,
	lineax:800,
	lineay:100,
	lineax1:800,
	lineay1:300,
	visualizar:function(){
		ctx.beginPath();
		ctx.fillStyle= nevadod1.colorfondo;
		ctx.moveTo(nevadod1.iniciox,nevadod1.inicioy);
		ctx.lineTo(nevadod1.lineax,nevadod1.lineay);
		ctx.lineTo(nevadod1.lineax1,nevadod1.lineay1);
		ctx.fill();
	}
} 
nevadod1.visualizar();

var nevadod2={
	colorfondo: "#D6D7D7",
	iniciox:800,
	inicioy:100,
	lineax:867,
	lineay:200,
	lineax1:800,
	lineay1:300,
	visualizar:function(){
		ctx.beginPath();
		ctx.fillStyle= nevadod2.colorfondo;
		ctx.moveTo(nevadod2.iniciox,nevadod2.inicioy);
		ctx.lineTo(nevadod2.lineax,nevadod2.lineay);
		ctx.lineTo(nevadod2.lineax1,nevadod2.lineay1);
		ctx.fill();
	}
} 
nevadod2.visualizar();


//=======sol=======
var sol={
	colorfondoa:"#E9FF33",
	iniciox:25,
	inicioy:25,
	radiox:50,
	radioy:0,
	radioc:2*Math.PI,
	colorfondob:"#ECFD6F",
	bord:10,
	visualizar(){
		ctx.beginPath();
		//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
		ctx.arc(sol.iniciox,sol.inicioy,sol.radiox,sol.radioy,sol.radioc);
		//Relleno
		ctx.fillStyle=sol.colorfondoa;
		ctx.fill();
		ctx.lineWidth=sol.bord;
		ctx.strokeStyle=sol.colorfondob;
		ctx.stroke();
	}
}
sol.visualizar();

//=======tallo de arbol=======
//console.log("Mi mensaje",ctx);
//color a la figura

var tallo1={
	colorfondo:"brown",
	iniciox:12,
	inicioy:200,
	lineax1:10,
	lineay1:130,
	visualizar:function(){
		ctx.fillStyle=tallo1.colorfondo;
		ctx.fillRect(tallo1.iniciox,tallo1.inicioy,tallo1.lineax1,tallo1.lineay1);			
	}
}
tallo1.visualizar();
var tallo2={
	colorfondo:"brown",
	iniciox:100,
	inicioy:245,
	lineax1:20,
	lineay1:130,
	visualizar(){
		ctx.fillStyle=tallo2.colorfondo;
		ctx.fillRect(tallo2.iniciox,tallo2.inicioy,tallo2.lineax1,tallo2.lineay1);		
	}
}
tallo2.visualizar();
var tallo3={
	colorfondo:"brown",
	iniciox:900,
	inicioy:245,
	lineax1:20,
	lineay1:130,
	visualizar:function(){
			ctx.fillStyle=tallo3.colorfondo;
			ctx.fillRect(tallo3.iniciox,tallo3.inicioy,tallo3.lineax1,tallo3.lineay1);		
	}
}
tallo3.visualizar();

//=======arbol 1=======
//=====================
//parte 2 aRBOL 1
var arbol1={
	colorfondo:"green",
	iniciox:27,
	inicioy:195,
	radio:5,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
				ctx.beginPath();
				//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
				ctx.arc(arbol1.iniciox,arbol1.inicioy,arbol1.radio,arbol1.angulox,arbol1.anguloy);
				ctx.fillStyle=arbol1.colorfondo;
				ctx.fill();
	}
}
arbol1.visualizar();
var arbol2={
	colorfondo:"#64dd17",
	iniciox:0,
	inicioy:203,
	radio:12,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
				ctx.beginPath();
				ctx.arc(arbol2.iniciox,arbol2.inicioy,arbol2.radio,arbol2.angulox,arbol2.anguloy);
				ctx.fillStyle=arbol2.colorfondo;
				ctx.fill();
	}
}
arbol2.visualizar();
var arbol3={
	colorfondo:"#689f38",
	iniciox:20,
	inicioy:213,
	radio:20,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
				ctx.beginPath();
				ctx.arc(arbol3.iniciox,arbol3.inicioy,arbol3.radio,arbol3.angulox,arbol3.anguloy);
				ctx.fillStyle=arbol3.colorfondo;
				ctx.fill();
	}
}
arbol3.visualizar();
var arbol4={
	colorfondo:"#64dd17",
	iniciox:20,
	inicioy:225,
	radio:8,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
				ctx.beginPath();
				ctx.arc(arbol4.iniciox,arbol4.inicioy,arbol4.radio,arbol4.angulox,arbol4.anguloy);
				ctx.fillStyle=arbol4.colorfondo;
				ctx.fill();
	}
}
arbol4.visualizar();


var arbol5={
	colorfondo:"green",
	iniciox:80,
	inicioy:193,
	radio:30,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
				ctx.beginPath();
				//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
				ctx.arc(arbol5.iniciox,arbol5.inicioy,arbol5.radio,arbol5.angulox,arbol5.anguloy);
				ctx.fillStyle=arbol5.colorfondo;
				ctx.fill();
	}
}
arbol5.visualizar();

var arbol6={
	colorfondo:"#64dd17",
	iniciox:142,
	inicioy:180,
	radio:37,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
				ctx.beginPath();
				//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
				ctx.arc(arbol6.iniciox,arbol6.inicioy,arbol6.radio,arbol6.angulox,arbol6.anguloy);
				ctx.fillStyle=arbol6.colorfondo;
				ctx.fill();
	}
}
arbol6.visualizar();

var arbol7={
	colorfondo:"#014601",
	iniciox:110,
	inicioy:203,
	radio:50,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
				ctx.beginPath();
				//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
				ctx.arc(arbol7.iniciox,arbol7.inicioy,arbol7.radio,arbol7.angulox,arbol7.anguloy);
				ctx.fillStyle=arbol7.colorfondo;
				ctx.fill();
	}
}
arbol7.visualizar();

var arbol8={
	colorfondo:"#082C08",
	iniciox:120,
	inicioy:235,
	radio:30,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
				ctx.beginPath();
				//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
				ctx.arc(arbol8.iniciox,arbol8.inicioy,arbol8.radio,arbol8.angulox,arbol8.anguloy);
				ctx.fillStyle=arbol8.colorfondo;
				ctx.fill();
	}
}
arbol8.visualizar();

var arbol9={
	colorfondo:"red",
	iniciox:140,
	inicioy:285,
	radio:5,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
				ctx.beginPath();
				//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
				ctx.arc(arbol9.iniciox,arbol9.inicioy,arbol9.radio,arbol9.angulox,arbol9.anguloy);
				ctx.fillStyle=arbol9.colorfondo;
				ctx.fill();
	}
}
arbol9.visualizar();

var arbol10={
	colorfondo:"red",
	iniciox:80,
	inicioy:215,
	radio:5,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
				ctx.beginPath();
				//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
				ctx.arc(arbol10.iniciox,arbol10.inicioy,arbol10.radio,arbol10.angulox,arbol10.anguloy);
				ctx.fillStyle=arbol10.colorfondo;
				ctx.fill();
	}
}
arbol10.visualizar();

var arbol11={
	colorfondo:"red",
	iniciox:130,
	inicioy:250,
	radio:5,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
				ctx.beginPath();
				//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
				ctx.arc(arbol11.iniciox,arbol11.inicioy,arbol11.radio,arbol11.angulox,arbol11.anguloy);
				ctx.fillStyle=arbol11.colorfondo;
				ctx.fill();
	}
}
arbol11.visualizar();

//======arbol 2======
////abajo
var arbol16={
	colorfondo:"#082C08",
	iniciox:848,
	inicioy:302,
	lineax:907,
	lineay:200,
	lineax1:971,
	lineay1:302,
	visualizar:function(){
			ctx.beginPath();
			ctx.fillStyle= arbol16.colorfondo;
			ctx.moveTo(arbol16.iniciox,arbol16.inicioy);
			ctx.lineTo(arbol16.lineax,arbol16.lineay);
			ctx.lineTo(arbol16.lineax1,arbol16.lineay1);
			ctx.fill();	
	}
}
arbol16.visualizar();

//medio
var arbol17={
	colorfondo:"#014601",
	iniciox:850,
	inicioy:252,
	lineax:907,
	lineay:150,
	lineax1:969,
	lineay1:252,
	visualizar:function(){
			ctx.beginPath();
			ctx.fillStyle= arbol17.colorfondo;
			ctx.moveTo(arbol17.iniciox,arbol17.inicioy);
			ctx.lineTo(arbol17.lineax,arbol17.lineay);
			ctx.lineTo(arbol17.lineax1,arbol17.lineay1);
			ctx.fill();	
	}
}
arbol17.visualizar();

//arriba
var arbol18={
	colorfondo:"green",
	iniciox:853,
	inicioy:202,
	lineax:907,
	lineay:100,
	lineax1:966,
	lineay1:202,
	visualizar:function(){
			ctx.beginPath();
			ctx.fillStyle= arbol18.colorfondo;
			ctx.moveTo(arbol18.iniciox,arbol18.inicioy);
			ctx.lineTo(arbol18.lineax,arbol18.lineay);
			ctx.lineTo(arbol18.lineax1,arbol18.lineay1);
			ctx.fill();	
	}
}
arbol18.visualizar();

//=======loma 1=======
var loma1={
	colorfondo:"#1D9E00",
	iniciox:0,
	inicioy:500,
	radio:248,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
		ctx.beginPath();
		//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
		ctx.arc(loma1.iniciox,loma1.inicioy,loma1.radio,loma1.angulox,loma1.anguloy);
		//Relleno
		ctx.fillStyle=loma1.colorfondo;
		ctx.fill();
	}
}
loma1.visualizar();

// ==borde==
var borde1={
	colorfondo:"#034A05",
	iniciox:224,
	inicioy:503,
	radio:25,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
		ctx.beginPath();
		//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
		ctx.arc(borde1.iniciox,borde1.inicioy,borde1.radio,borde1.angulox,borde1.anguloy);
		//Relleno
		ctx.fillStyle=borde1.colorfondo;
		ctx.fill();
	}
}
borde1.visualizar();

var borde2={
	colorfondo:"#074F00",
	iniciox:174,
	inicioy:503,
	radio:25,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
		ctx.beginPath();
		//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
		ctx.arc(borde2.iniciox,borde2.inicioy,borde2.radio,borde2.angulox,borde2.anguloy);
		//Relleno
		ctx.fillStyle=borde2.colorfondo;
		ctx.fill();
	}
}
borde2.visualizar();

var borde3={
	colorfondo:"#074F00",
	iniciox:124,
	inicioy:503,
	radio:25,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
		ctx.beginPath();
		//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
		ctx.arc(borde3.iniciox,borde3.inicioy,borde3.radio,borde3.angulox,borde3.anguloy);
		//Relleno
		ctx.fillStyle=borde3.colorfondo;
		ctx.fill();
	}
}
borde3.visualizar();

var borde4={
	colorfondo:"#114412",
	iniciox:74,
	inicioy:503,
	radio:25,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
		ctx.beginPath();
		//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
		ctx.arc(borde4.iniciox,borde4.inicioy,borde4.radio,borde4.angulox,borde4.anguloy);
		//Relleno
		ctx.fillStyle=borde4.colorfondo;
		ctx.fill();
	}
}
borde4.visualizar();

var borde5={
	colorfondo:"#0B430C",
	iniciox:24,
	inicioy:503,
	radio:25,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
		ctx.beginPath();
		//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
		ctx.arc(borde5.iniciox,borde5.inicioy,borde5.radio,borde5.angulox,borde5.anguloy);
		//Relleno
		ctx.fillStyle=borde5.colorfondo;
		ctx.fill();
	}
}
borde5.visualizar();


//=======loma 2=======
var loma2={
	colorfondo:"green",
	iniciox:900,
	inicioy:596,
	radio:244,
	angulox:0,
	anguloy:2*Math.PI,
	visualizar:function(){
		ctx.beginPath();
		//ctx.arc(x1,y1,radio,inicio del angulo,fin del angulo);
		ctx.arc(loma2.iniciox,loma2.inicioy,loma2.radio,loma2.angulox,loma2.anguloy);
		//Relleno
		ctx.fillStyle=loma2.colorfondo;
		ctx.fill();
	}
}
loma2.visualizar();

ctx.drawImage(sprite,ubicacionx,0,341,515,ubicacion1,350,100,150);
frame(tiempo);
}
	// declaramos la funcion para que se ejecute
tiempo();