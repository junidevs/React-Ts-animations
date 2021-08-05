import { FC } from 'react';

interface Props{
    text:string;
    className:string;
}
const defaultProps = {
    text: "test",
    className: "test"
  };

const Field:FC<Props> =({text,className}) => {
  return(
    <div className={className}>{text}</div>
);
}
export default Field;
Field.defaultProps = defaultProps;