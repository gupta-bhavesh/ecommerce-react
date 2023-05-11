import { Button, Modal } from 'antd';
import { useState } from 'react';
import MassSteps from './MassSteps';
import firebaseInstance from '../../services/firebase';
const Mass = () => {
  const hasMass = firebaseInstance.getUser(firebaseInstance.auth.currentUser.uid)
    .then(data=>setMass("mass" in data.data()));
  const [mass, setMass] = useState(true);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
    setMass(1);
  };

  return (
    <>
      <Modal
        open={!mass}
        title="MASS CALCULATOR"
        onOk={handleOk}
        footer={[]}
        width={700}
      >
        <MassSteps modalCallback={() => setMass(true)} />
      </Modal>
    </>
  );
};
export default Mass;