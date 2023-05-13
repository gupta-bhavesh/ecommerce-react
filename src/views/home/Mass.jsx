import { Button, Modal } from 'antd';
import { useEffect, useState } from 'react';
import MassSteps from './MassSteps';
import { useSelector } from 'react-redux';
const Mass = () => {

  const [mass, setMass] = useState(useSelector((state) => ({
    mass: state.profile.mass,
  })).mass);
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
        open={mass==0}
        title="MASS CALCULATOR"
        onOk={handleOk}
        footer={[]}
        width={700}
      >
        <MassSteps modalCallback={(val) => setMass(val)} />
      </Modal>
    </>
  );
};
export default Mass;