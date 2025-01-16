import * as React from "react";
import SortingTabs from "./SortingTable";
import BodyButtons from "../layouts/BodyButtons";
import CategoryButton from "./button/CategoryButton";
import SectionButton from "./button/SectionButton";
import QuestionContent from "./QuestionContent";
import Body from "../layouts/Body";

const QuestionBoard= () => {
  return (
    <>
      <Body>
        <BodyButtons>
          <CategoryButton />
          <SectionButton />
        </BodyButtons>
        <section className="flex flex-col pb-24 mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <SortingTabs />
          <QuestionContent />
        </section>
      </Body>
    </>
  );
}

export default QuestionBoard;
