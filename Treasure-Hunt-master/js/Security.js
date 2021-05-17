class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1  = createInput("|Code1")
this.access1.position(100,90);
this.access1.style('background', 'white');

this.button1 = createButton('Check') ;
this.button1.position(100,120);
this.button1.style('background','lightgrey');

this.button1.mousePressed(()=> {

     if(system.authenticate(acessCode1,this.access1.value())){
         this.button1.hide();
         this.accessCode.hide();
         score++;
     }
})

this.access2  = createInput("|Code2")
this.access2.position(100,280);
this.access2.style('background', 'white');

this.button2 = createButton('Check') ;
this.button2.position(100,310);
this.button2.style('background','lightgrey');

this.button2.mousePressed(()=> {

     if(system.authenticate(acessCode1,this.access2.value())){
         this.button2.hide();
         this.accessCode.hide();
         score++;
     }
})

this.access3  = createInput("|Code3")
this.access3.position(700,185);
this.access3.style('background', 'white');

this.button3 = createButton('Check') ;
this.button3.position(700,215);
this.button3.style('background','lightgrey');

this.button3.mousePressed(()=> {

     if(system.authenticate(acessCode3,this.access3.value())){
         this.button3.hide();
         this.accessCode.hide();
         score++;
     }
})
}
    display(){

        // Add code to make the buttons function as expected
        this.button1.display();
        this.button2.display();
        this.button3.display();
        


    }
}