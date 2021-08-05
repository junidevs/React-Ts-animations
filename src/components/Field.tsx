import { FC } from 'react';

interface Props{
    text:string;
    className:string;
    callback:any;
}
const defaultProps = {
    text: "test",
    className: "test",
  };

const Field:FC<Props> =({text,className,callback}) => {
  return(
    <div onClick={callback} className={className}>{text}</div>
);
}
export default Field;
Field.defaultProps = defaultProps;