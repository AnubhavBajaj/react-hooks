import { useNavigate } from "react-router-dom";

export function Home () {
    const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>Go to Home</button>
      <button onClick={() => navigate('/useState')}>useState</button>
      <button onClick={() => navigate('/useMemo')}>useMemo</button>
      <button onClick={() => navigate('/useEffect')}>useEffect</button>
      <button onClick={() => navigate('/useCallback')}>useCallback</button>
      <button onClick={() => navigate('/useContext')}>useContext</button>
    </div>
  );
}