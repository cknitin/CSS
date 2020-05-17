# CSS tips and tricks

## 1. Positioning in CSS

#### Html

     <div class="parents">
          <div class="child1">child 1</div>
          <div class="child2">child 2</div>
          <div class="child3">child 3</div>
          <div class="child4">child 4</div>
          <div class="child5">child 5</div>
      </div>
      
      
#### CSS for position 

        ** {
          margin: 0;
          padding: 0;
        }
        .parents {
          width: 100%;
          height: 100vh;
          background-color: red;
          position: relative;
          left: 0;
        }

        .child1 {
          width: 25%;
          height: 25vh;
          background-color: yellow;
          position: absolute;
          right: 0;
        }

        .child2 {
          width: 25%;
          height: 25vh;
          background-color: orange;
          position: absolute;
          bottom: 0;
        }

        .child3 {
          width: 25%;
          height: 25vh;
          background-color: green;
          position: absolute;
          bottom: 0;
          right: 0;
        }

        .child4 {
          width: 25%;
          height: 25vh;
          background-color: blue;
          position: absolute;
        }

        .child5 {
          width: 50%;
          height: 50vh;
          background-color: grey;
          position: absolute;
          top: 50%;
          left: 50%;

          /* margin-left: -50px;
          margin-top: -50px; */

          transform: translate(-50%, -50%);
        }
        
#### Result

![CSS position result](https://github.com/cknitin/CSS/blob/master/Position/images/Position.PNG)     
