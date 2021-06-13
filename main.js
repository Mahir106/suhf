canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=90;
car1_img= "car_1.png";
car1_x=30;
car1_y=130;

car2_width=120;
car2_height=70;
car2_img="car_2.png";
car2_x=10;
car2_y=10;

back_img="canvas_back.jpg";

function add(){
    background_img=new Image();
    background_img.onload=upload_background;
    background_img.src=back_img;

    car1_image=new Image();
    car1_image.onload=upload_car1;
    car1_image.src= car1_img;

    car2_image=new Image();
    car2_image.onload=upload_car2;
    car2_image.src= car2_img;
}

function upload_background(){
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function upload_car1(){
    ctx.drawImage(car1_image, car1_x, car1_y, car1_width, car1_height);
}

function upload_car2(){
    ctx.drawImage(car2_image, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed= e.keycode;
    console.log(keypressed);
    if(keypressed=="38"){
        car1_up();
        console.log("up arrow key");
    }

    if(keypressed=="30"){
        car1_down();
        console.log("down arrow key");
    }

    if(keypressed=="37"){
        car1_left();
        console.log("left arrow key");
    }

    if(keypressed=="39"){
        car1_right();
        console.log("right arrow key");
    }

    if(keypressed=="87"){
        car2_up();
        console.log("key w");
    }

    if(keypressed=="83"){
        car2_down();
        console.log("key s");
    }

    if(keypressed=="65"){
        car2_left();
        console.log("key a");
    }

    if(keypressed=="68"){
        car2_right();
        console.log("key d");
    }
}