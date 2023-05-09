import { Button, Modal } from 'antd';
import { useState } from 'react';
import MassSteps from './MassSteps';
const Mass = () => {
  const [loading, setLoading] = useState(false);
  const [mass, setMass] = useState(null);

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
        open={mass == null}
        title="MASS CALCULATOR"
        onOk={handleOk}
        footer={[]}
        width={800}
      >
        <MassSteps modalCallback={()=>setMass(1)}/>
      </Modal>
    </>
  );
};
export default Mass;