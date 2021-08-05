import  {FC , Fragment ,ReactNode ,Dispatch, SetStateAction ,lazy  , useEffect ,createRef} from 'react';
import testImage from '../styles/test.png';
const ModalMenu = lazy(() => import('./ModalMenu'));

interface Props {
    children?: ReactNode;
    setVisible:Dispatch<SetStateAction<boolean>>;
    visible:boolean;
}

const PanoBox:FC<Props> = ({setVisible , visible}) =>{
  const divRef = createRef<HTMLDivElement>();

  useEffect(()=>{
    console.log(divRef.current)
    if(visible){
      console.log('visible')
      divRef.current?.classList.add('modal_absolute');
    }
    else divRef.current?.classList.remove('modal_absolute_unvisible');

  },[visible,divRef])

  return(
    <Fragment>
        <div className="box_Container">
          <img src={testImage} alt="imydż" />
          <h3>KUCHNIA</h3>
          <div className="dot_Menu_Container" onClick={() => setVisible(!visible)}>
            <span className="dot_Menu_Item"></span>
          </div>
          <ModalMenu ref={divRef}/>
        </div>
    </Fragment>
  );
}
export default PanoBox;