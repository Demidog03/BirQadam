import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {useEffectOnce} from "usehooks-ts";

const RedirectPage: FC<{path: string}> = ({ path }) => {
  const navigate = useNavigate()
  
  useEffectOnce(() => {
    navigate(path)
  })

  return (
    <></>
  );
};

export default RedirectPage;