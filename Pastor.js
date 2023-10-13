
let wrap = document.getElementById('thunder');

let faq1 = document.getElementById('faq1')
let faq2 = document.getElementById('faq2')
let faq3 = document.getElementById('faq3')
let faq4 = document.getElementById('faq4')
let faq5 = document.getElementById('faq5')
let faq6 = document.getElementById('faq6')


let loader = document.getElementById('preloader');

window.addEventListener('load', function preloader() {

   loader.style.display = 'none';
   
})


const people = [

    {
      question: "'What is 'My walk with God?'",
      answer: "'My Walk with God', is a transformative self-help book that offers guidance, wisdom, and insights to help individuals navigate life's challenges, find purpose, and deepen their faith. It provides practical advice and spiritual teachings to enhance personal growth and bring fulfillment.",
      id: "gfhgjkbk"
    },

    {
      question: "Who is the intended audience for this book?",
      answer: "This book is for anyone seeking inspiration, healing, and growth. Whether you're facing emotional wounds, stress, anxiety, career setbacks, or simply seeking a stronger spiritual connection, 'My Walk with God' is designed to resonate with individuals of all ages and backgrounds.",
      id: "rtryuui"
    },

    {
      question: "Is this book religiously affiliated or suitable for a specific faith?",
      answer: "'My Walk with God' draws wisdom from various spiritual and religious principles, making it suitable for individuals of different faiths or those on a spiritual quest. It emphasizes universal values, promoting unity, love, and understanding.",
      id: "ajdoid"
    },

    {
        question: "'Can 'My Walk with God' aid in healing emotional wounds and trauma?'",
        answer:  "Absolutely. The book addresses emotional healing by guiding you to acknowledge and surrender your pain to God. It offers prayers, affirmations, and stories to help you find comfort, peace, and ultimately, healing.",
        id: "tjfmkx"
      },

      {
        question: "How can this book assist in my career and personal growth?",
        answer: "'My Walk with God' encourages aligning your career with your purpose, infusing your work with passion and dedication. It provides insights into overcoming setbacks, setting goals, and thriving in your chosen path by trusting in God's plan.",
        id: "papapaj"
      },

      {
        question: "How can I order 'My Walk with God'?",
        answer: "Ordering 'My Walk with God' is simple. Visit my website, click on 'Buy Now', and proceed to checkout. We offer secure payment options, and once your order is confirmed, we'll ensure prompt delivery to your specified address.",
        id: "oioppa"
      }
  
  
  ]

 
    


   
function FAQ1() {


faq1.innerHTML = `
<div id="faq1"><button id="accordion" onclick="opened1()">


  <div id="big"><p id="follow">What is 'My walk with God?</div>

  <div id="small"><ion-icon name="remove-outline"></ion-icon></div>
</div>

<div id="whole"><p id="sub">My Walk with God', is a transformative self-help book that offers guidance, wisdom, and insights to help individuals navigate life's challenges, find purpose, and deepen their faith. It provides practical advice and spiritual teachings to enhance personal growth and bring fulfillment.</p></div>

</button>`
  
}



function FAQ2() {


  faq2.innerHTML = `
  <div id="faq2"><button id="accordion" onclick="opened2()">
  
  
    <div id="big"><p id="follow">Who is the intended audience for this book?</div>
  
    <div id="small"><ion-icon name="remove-outline"></ion-icon></div>
  </div>
  
  <div id="whole"><p id="sub">This book is for anyone seeking inspiration, healing, and growth. Whether you're facing emotional wounds, stress, anxiety, career setbacks, or simply seeking a stronger spiritual connection, 'My Walk with God' is designed to resonate with individuals of all ages and backgrounds.</p></div>
  
  </button>`
    
  }



  function FAQ3() {


    faq3.innerHTML = `
    <div id="faq3"><button id="accordion" onclick="opened3()">
    
    
      <div id="big"><p id="follow">Is this book religiously affiliated or suitable for a specific faith?</div>
    
      <div id="small"><ion-icon name="remove-outline"></ion-icon></div>
    </div>
    
    <div id="whole"><p id="sub">'My Walk with God' draws wisdom from various spiritual and religious principles, making it suitable for individuals of different faiths or those on a spiritual quest. It emphasizes universal values, promoting unity, love, and understanding.</p></div>
    
    </button>`
      
    }



    function FAQ4() {


      faq4.innerHTML = `
      <div id="faq4"><button id="accordion" onclick="opened4()">
      
      
        <div id="big"><p id="follow">Can 'My Walk with God' aid in healing emotional wounds and trauma?</div>
      
        <div id="small"><ion-icon name="remove-outline"></ion-icon></div>
      </div>
      
      <div id="whole"><p id="sub">Absolutely. The book addresses emotional healing by guiding you to acknowledge and surrender your pain to God. It offers prayers, affirmations, and stories to help you find comfort, peace, and ultimately, healing.</p></div>
      
      </button>`
        
      }



      
    function FAQ5() {


      faq5.innerHTML = `
      <div id="faq5"><button id="accordion" onclick="opened5()">
      
      
        <div id="big"><p id="follow">How can this book assist in my career and personal growth?</div>
      
        <div id="small"><ion-icon name="remove-outline"></ion-icon></div>
      </div>
      
      <div id="whole"><p id="sub">'My Walk with God' encourages aligning your career with your purpose, infusing your work with passion and dedication. It provides insights into overcoming setbacks, setting goals, and thriving in your chosen path by trusting in God's plan.</p></div>
      
      </button>`
        
      }


      function FAQ6() {


        faq6.innerHTML = `
        <div id="faq6"><button id="accordion" onclick="opened6()">
        
        
          <div id="big"><p id="follow">How can I order 'My Walk with God'?</div>
        
          <div id="small"><ion-icon name="remove-outline"></ion-icon></div>
        </div>
        
        <div id="whole"><p id="sub">Ordering 'My Walk with God' is simple. Visit my website, click on 'Buy Now', and proceed to checkout. We offer secure payment options, and once your order is confirmed, we'll ensure prompt delivery to your specified address.</p></div>
        
        </button>`
          
        }


        function opened1() {

          faq1.innerHTML = `  <div id="faq1"><button id="accordion" onclick="FAQ1()">
    

          <div id="big"><p id="follow">What is 'My walk with God?</div>
  
          <div id="small"><ion-icon name="add-outline"></ion-icon></div>
  
         
  
      </button></div>`
          
        }


        function opened2() {

          faq2.innerHTML =  `
          <div id="faq2"><button id="accordion" onclick="FAQ2()">
          
          
            <div id="big"><p id="follow">Who is the intended audience for this book?</div>
          
            <div id="small"><ion-icon name="add-outline"></ion-icon></div>
          </div>
          
          
          </button>`
          
        }


        function opened3() {

          faq3.innerHTML =  `
          <div id="faq3"><button id="accordion" onclick="FAQ3()">
          
          
          <div id="big"><p id="follow">Is this book religiously affiliated or suitable for a specific faith?</div>
    
          <div id="small"><ion-icon name="add-outline"></ion-icon></div>
        </div>
        
         
          </button>`
          
        }


        function opened4() {

          faq4.innerHTML =  `
          <div id="faq4"><button id="accordion" onclick="FAQ4()">
          
          <div id="big"><p id="follow">Can 'My Walk with God' aid in healing emotional wounds and trauma?</div>
      
          <div id="small"><ion-icon name="add-outline"></ion-icon></div>
        </div>
        
      
          </button>`
          
        }


        function opened5() {

          faq5.innerHTML =  `
          <div id="faq5"><button id="accordion" onclick="FAQ5()">
          
          <div id="big"><p id="follow">How can this book assist in my career and personal growth?</div>
      
        <div id="small"><ion-icon name="add-outline"></ion-icon></div>
      </div>
      
          </button>`
          
        }


        function opened6() {

          faq6.innerHTML =  `
          <div id="faq6"><button id="accordion" onclick="FAQ6()">
          
          <div id="big"><p id="follow">How can I order 'My Walk with God'?</div>
        
          <div id="small"><ion-icon name="add-outline"></ion-icon></div>
        </div>
        
      
          </button>`
          
        }

  


    

        let menu = document.getElementById('menu');
        let bro = document.getElementById('header');







        function opening() {

          menu.innerHTML = `<div id="ex"><ion-icon name="close-outline" onclick="closing()"></ion-icon></div>
           <div id="burger">
           
           <div id="scroll"><ul>
           <a href="index.html"><li id="sat" onclick="closing()"><p id="sat">Home</p></li></a>
           <a href="about.html"><li id="sat" onclick="closing()"><p id="sat">About</li></a>
           <a href="blog.html"><li id="sat" onclick="closing()"><p id="sat">Blog</li></a>
           <a href="contact.html"><li id="sat" onclick="closing()"><p id="sat">Contact</p></li></a> <br><br>

           <div id="hommie"><a href="checkout.html"><button><p id="follow-el">R260 | Buy Now</p></button></a></div>
           
           </ul></div>

         
           
           </div>
           
           
           
           `
        menu.style.width = "100%"
        
        
        
        
        
        
        
        
        
            
        }
        
        
        function closing() {
        
           menu.innerHTML = `<div id="menu"><ion-icon name="menu-outline" onclick="opening()"></ion-icon></div>`
        
          
        
           
        
           menu.style.width = "50%"
         
        
          
         
         
            
        }





