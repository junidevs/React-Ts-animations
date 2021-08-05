import {forwardRef} from 'react';
import Field from './Field'

interface Props{
    //divRef:HTMLDivElement
}
export type Ref = HTMLDivElement | null;

const ModalMenu =forwardRef<Ref, Props>((props, divRef) => {
    console.log('divREFF',divRef);
return(
    <div ref={divRef} className="modal_absolute_unvisible">
           <Field callback={() => alert('You have clicked on this element')} text="Pobierz Sferę" className="item_Menu"  />
           <Field callback={() => alert('You have clicked on this element')} text="Udostępnij" className="item_Menu"  />
           <Field callback={() => alert('You have clicked on this element')} text="Utwórz spacer" className="item_Menu"  />
           <Field callback={() => alert('You have clicked on this element')} text="Zmień nazwę" className="item_Menu"  />
           <Field callback={() => alert('You have clicked on this element')} text="Usuń Sferę" className="item_Menu"  />
    </div>
    );
});

export default ModalMenu;

