import { FaTimes } from 'react-icons/fa';
function Card({name,check,fchange,bagla}) {
  return (
    <p>
      <input type="checkbox" checked={check}  onChange={fchange} />
      <span>{name}</span>

      
        <button onClick={bagla}>
          <FaTimes   size={20}/>
          </button>
        
    </p>
  );
 
}
export default Card;
