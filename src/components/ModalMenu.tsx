import {forwardRef} from 'react';
import Field from './Field'

interface Props{
    //divRef:HTMLDivElement
}
export type Ref = HTMLDivElement | null;

const ModalMenu =forwardRef<Ref, Props>((props, divRef) => {
    console.log('divREFF',divRef);
return(
    <div ref={divRef} className="modal_absolute">
           <Field text="Pobierz Sferę" className="item_Menu"  />
            <Field text="Udostępnij" className="item_Menu"  />
            <Field text="Utwórz spacer" className="item_Menu"  />
            <Field text="Zmień nazwę" className="item_Menu"  />
            <Field text="Usuń Sferę" className="item_Menu"  />
    </div>
    );
});

export default ModalMenu;

