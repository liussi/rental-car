import { NoResultText, NoResultWrapper } from "./notResult.styled";
import React from 'react';



const NotResult = () => {
  return (
    <NoResultWrapper>
      <NoResultText>
        Sorry, no results found. Please check back later or explore other items
        on the catalog page.
      </NoResultText>
    </NoResultWrapper>
  );
};
export default NotResult;
