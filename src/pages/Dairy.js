import { useParams } from "react-router-dom";

const Dairy = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Dairy</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Dairy;
