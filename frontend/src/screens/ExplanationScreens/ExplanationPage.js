import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MessageBox from "../../components/HelperComponents/MessageBox";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import SecondaryComponent from "../../components/ExplanationComponents/SecoondaryComponent";
import PrimaryComponent from "../../components/ExplanationComponents/PrimaryComponent";
import { listExplanations } from "../../common/redux/actions/explanationActions";
const Explanations = () => {
  const dispatch = useDispatch();
  const explanationList = useSelector((state) => state.explanationList);
  const { loading, error, explanations } = explanationList;

  useEffect(() => {
    dispatch(listExplanations());
  }, [dispatch]);

  console.log(explanations);
  return (
    <React.Fragment>
      <PrimaryComponent />
      <div className="container">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <SecondaryComponent explanations={explanations} />
        )}
      </div>
    </React.Fragment>
  );
};

export default Explanations;
