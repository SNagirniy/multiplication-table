import PageWrapper from 'components/PageWrapper/PageWrapper';
import MultiplicationTableTopic from 'components/MultiplicationTableTopic/MultiplicationTableTopic';
import MultipTable from 'components/MultipTable/MultipTable';

import { useState } from 'react';

const LearnPage = () => {
  const [currentNum, setCurrentNum] = useState(1);

  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <PageWrapper>
      <MultiplicationTableTopic
        currentNum={currentNum}
        setCurrNum={setCurrentNum}
        numberArray={numArray}
      />
      <MultipTable number={currentNum} numArray={numArray} />
    </PageWrapper>
  );
};

export default LearnPage;
