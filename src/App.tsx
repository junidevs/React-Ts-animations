import {FC , Fragment , useState  , useEffect , lazy ,Suspense ,  } from 'react';
const PanoBox = lazy(() => import('./components/PanoBox'));

const App:FC = () =>{
  const [ visible , setVisible] = useState(false);

  useEffect(()=>{
    console.log("IS visible ? " , visible)
  },[visible]);
  return(
    <Fragment>
      <Suspense fallback={<>Loading...</>}>
        <div className="centerBoxWrapper">
          <PanoBox setVisible={setVisible} visible={visible} />
        </div>
      </Suspense> 
    </Fragment>
  );
}
export default App;