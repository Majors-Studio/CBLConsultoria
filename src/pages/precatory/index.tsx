import React from 'react';
import * as C from '@/styles/precatory';
import Image from 'next/image';

const Precatory: React.FC = () => {
  return  (
    <>  
      <C.ContainerImg>
      <Image
         src="https://source.unsplash.com/featured"
         width={0}
         height={0}
         sizes="100vw"
         style={{ width: '100%', height: '100%', objectFit:'cover' }} // optional
         alt="bg"
         />
      </C.ContainerImg>  
     <C.Container>
      <p>teste</p>
     </C.Container>  

    </>
  );
};

export default Precatory;