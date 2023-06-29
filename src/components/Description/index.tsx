import React from 'react';

import * as S from './styles';

interface DescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({children,style}) => {
    return <S.Description style={style}>{children}</S.Description>;
}

export default Description;