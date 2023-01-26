export function HabitForm() {
  return (
    <form className="form">
      <label className="label">Qual seu Comportamento?</label>
      <div className="divinput">
        <input
          className="input"
          type="text"
          id="title"
          placeholder="Ex: Exercícios, dormir, etc..."
          autoFocus
        />
      </div>

      <label className="reference">Qual a recorrência?</label>
      <div className="confirmbtn">
        <buttton className="subbtn" type="submit">
          Confirmar
        </buttton>
      </div>
    </form>
  );
}
