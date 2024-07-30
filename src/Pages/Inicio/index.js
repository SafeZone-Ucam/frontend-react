import { useState } from 'react';

import './inicio.css';
import Menu from './components/Menu';
import LinkItem from '../../components/LinkItem';

export default function Inicio() {
  const [showmModal, setShowmodal] = useState(false);

  return (
    <div className='container-home'>
      <Menu />

      {showmModal && <LinkItem closeModal={(e) => setShowmodal(false)} />}
    </div>
  );
}
