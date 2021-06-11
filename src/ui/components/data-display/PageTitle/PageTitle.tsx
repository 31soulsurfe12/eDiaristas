import React from 'react';
import { PageTitleContainer, PageTitleStyle, SubtitleStyle} from "./PageTitle.style";

interface PageTitleProps{
    title: string;
    subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleStyle>{props.title}</PageTitleStyle>
            <SubtitleStyle>{props.subtitle}</SubtitleStyle>
             
        </PageTitleContainer>
    );
}

export default PageTitle;