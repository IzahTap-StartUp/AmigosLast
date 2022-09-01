import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../../components/HelperComponents/LoadingBox";
import MessageBox from "../../components/HelperComponents/MessageBox";
import { detailsExplanation } from "../../common/redux/actions/explanationActions";
import BookLeftDetail from "../../components/ExplanationComponents/ExplanationDetailComponents/BookLeftDetail";
import BookRightDetail from "../../components/ExplanationComponents/ExplanationDetailComponents/BookRightDetail";

const ExplanationDetailPage = (props) => {
  const dispatch = useDispatch();
  const explanationId = props.match.params.id;
  useEffect(() => {
    dispatch(detailsExplanation(explanationId));
  }, [dispatch, explanationId]);

  const explanationDetails = useSelector((state) => state.explanationDetails);
  const { loading, error, explanation } = explanationDetails;
  return (
    <div className="wrapper medium pt-[50px]">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="flex flex-col lg:flex-row">
          <BookLeftDetail explanation={explanation} />
          <BookRightDetail explanation={explanation} />
        </div>
      )}
    </div>
  );
};

export default ExplanationDetailPage;
