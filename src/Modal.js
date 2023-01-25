import { HabitForm } from "./HabitForm";

export function Modal({ onClose = () => {}, children }) {
  return (
    <div className="modal">
      <div className="container">
        <div className="habitform">
          {" "}
          <h3 className="h3">CRIAR HÁBITO</h3>
        </div>
        <HabitForm />
        <div className="divclose">
          <button className="close" onClick={onClose}>
            Fechar
          </button>
        </div>

        <div className="content">{children}</div>
      </div>
    </div>
  );
}
