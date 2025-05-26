const sections=document.querySelectorAll('.section');
const sectBtns=document.querySelectorAll('.controlls');
const sectBtn=document.querySelectorAll('.control');
const allSections=document.querySelector('.main-content');

function PageTransition()
{
    //Button click active class

    for(let i=0;i<sectBtn.length; i++)
    {
        sectBtn[i].addEventListener('click',function(){
            let curentBtn=document.querySelectorAll('.active-btn');
            curentBtn[0].className=curentBtn[0].className.replace('active-btn','');
            this.className +=' active-btn';
        })
    }

    //section active

    allSections.addEventListener('click', (e) =>{
        console.log(e.target.dataset.id);
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');

            })
            e.target.classList.add('active');
           
           
            //hide other sections

            sections.forEach((sec) =>{
                sec.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        
        }


    })


}

PageTransition();


