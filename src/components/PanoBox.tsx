import  {FC , Fragment ,ReactNode ,Dispatch, SetStateAction ,lazy  , useEffect ,createRef} from 'react';
import testImage from '../styles/test.png';
import { Toggle } from '../helpers/helpers'
const ModalMenu = lazy(() => import('./ModalMenu'));

interface Props {
    children?: ReactNode;
    setVisible:Dispatch<SetStateAction<boolean>>;
    visible:boolean;
}

const PanoBox:FC<Props> = ({setVisible , visible}) =>{
  const divRef = createRef<HTMLDivElement>();
  let counter:number = 0;
  let timeout:number = 400;

  useEffect(()=>{ 
    //render tylko w przypadku zmiany zmiennej visible
    Toggle({visible, divRef , counter , timeout ,setVisible});
  },[visible])

  return(
    <Fragment>
        <div className="box_Container">
          <img src={testImage} alt="imydż" />
          <h3>KUCHNIA</h3>
          <div className="dot_Menu_Container" onClick={() => setVisible(!visible)}>
            <span className="dot_Menu_Item"></span>
          </div>
             <ModalMenu  ref={divRef}/>
        </div>
    </Fragment>
  );
}
export default PanoBox;