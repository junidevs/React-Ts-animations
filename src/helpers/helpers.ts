import { Dispatch, SetStateAction } from 'react';

export const debounce = ( func:any , delay:number) =>{
    let timeoutId:any;

    return (...params:any)=> {
      if(timeoutId){
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(()=>{
          func(...params)
      },delay)
    }
  }

interface toggleMenu {
    visible:boolean;
    divRef:any ,
    counter:number , 
    timeout:number ,
    setVisible:Dispatch<SetStateAction<boolean>>
}
export const Toggle = ({visible, divRef , counter , timeout ,setVisible}:toggleMenu) =>{
    if(visible){
        //początkowe ustawienie styli przed intervalem
        divRef.current?.classList.remove('modal_absolute_unvisible');
        divRef.current?.classList.add('modal_absolute');
        
        const interval = setInterval(() => {
          divRef.current?.classList.remove('modal_absolute_unvisible');
          divRef.current?.classList.add('modal_absolute');
          counter++
          //reset countera na onClick
          divRef.current?.addEventListener('click',()=>{
            counter = 0
          })
            //reset countera na mousemove z debouncem zeby ulec overload-u
           divRef.current?.addEventListener('mousemove',()=>{
            //debounce(()=>console.log('counter',counter),timeout)
            counter = 0
          })

          //tutaj mozemy zdefiniowac po ilu sekundach bezczynności menu się zamknie  by default 3
          if(counter >= 3){    
            clearInterval(interval);
            divRef.current?.classList.remove('modal_absolute');
            divRef.current?.classList.add('modal_absolute_unvisible');
            //na koniec musimy ustawic na false , a nie na      setVisible(!visible) ponieważ jestesmy w ifie który blokuje ten kontext
            setVisible(false)
          }
      
        }, 1000);
       }}
  