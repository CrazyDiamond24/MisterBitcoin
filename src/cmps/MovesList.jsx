export function MovesList({ title, movesList }) {
  return (
    <article className="moves-list">
      <h1>{title}</h1>
      <ul className='clean-list'>
        {movesList.map((move,i) =>
          <li className='move-preview flex column' key={i}>
            <h4>To: {move.to}</h4>
            <p>At: {new Date(move.at).toLocaleDateString()}</p>
            <p>Amount: <span>{move.amount}</span></p>
          </li>
        )}

      </ul>
    </article>
  )
}
