       // ++++++++++++++++++++ input var +++++++++++++++++++++++++

       const searching = ()=>{
        const searchBox = document.getElementById('inpt').value.toUpperCase();
        const store = document.querySelector('.shop');
      const products = document.querySelectorAll('.box')
      const pname = document.getElementsByTagName('h3')
    
      console.log(searchBox);
      
      products.forEach((e)=>{
          let naeme = e.getElementsByTagName('h3')[0]
          let naeme2 = e.getElementsByTagName('p')[0]
          if(naeme || naeme2){
              let textvalue = naeme.textContent || naeme.innerHTML
              let textvalue2 = naeme2.textContent || naeme2.innerHTML
              
              if(textvalue.toLocaleUpperCase().indexOf(searchBox) > -1 || textvalue2.toLocaleUpperCase().indexOf(searchBox) > -1){
    
                console.log(e);
                
                  e.style.display = "block"
                //   e.style.display = "flex"
                //   e.parentElement.style.display = ''
              }else{
                   e.style.display = "none"
                //    e.parentElement.style.display = 'none'
              }
          }
          
          })
    }
    
    const searchkey = document.getElementById('inpt');
    searchkey.addEventListener("keyup",()=>{
        searching()
    })
    
    
    
    
    document.querySelector('#srch').addEventListener('click',()=>{
        
       searching()
    })
    
    searchkey.addEventListener("keyup",(e)=>{
        if(e.keyCode === 13){
                    searching();
                }
    })
    
    const filter = (match)=>{
        console.log(match);
        
        const products = document.querySelectorAll('.box');
        
        products.forEach((e)=>{
          
            let select = e.querySelector('h5');
            // console.log(select);
            if(select.textContent == match){
              e.style.display = 'block'
            }else{
              e.style.display = 'none'
              
            }
            
            
        })
        
    }
    
    const drop = document.querySelector('.dropdown');
    
    const open = document.getElementById('open');
    
    const close = document.getElementById('close');
    
    open.addEventListener('click',()=>{
      close.style.display = 'block'
      drop.style.display = 'block';
      open.style.display = 'none'
    })
    close.addEventListener('click',()=>{
      close.style.display = 'none'
      drop.style.display = 'none';
      open.style.display = 'block'
    })
    
    const headList = ['Hacking Courses','Coding Courses','Programming','Coding Books','Hacking Books','Other Tools','Paid Plugins','Paid Templates'];
    
    let head = document.getElementById("head");
    let conut = 0;
    
    setInterval(()=>{
        if(headList.length > conut){
            console.log(headList[conut]);
            head.innerHTML = 'Get Free ' + headList[conut];
            conut = conut + 1;
        }else{
            conut = 0;
        }
    },3000)
    
    
