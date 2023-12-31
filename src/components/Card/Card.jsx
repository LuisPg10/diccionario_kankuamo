import "./Card.css";

export default function Card({
  data,
  spanish,
  english,
  kankuamo,
  styleInfo,
  onClick,
  soundKankuamo,
  soundEnglish,
}) {
  return (
    <div className="card">
      {/* Imagen de Administrador */}
      <img src={data} className="card-img-top" alt={spanish} />

      <div className="card-body">
        {/* Nombre de la caja*/}
        <div
          className={`d-flex align-items-center justify-content-${styleInfo.align}`}
        >
          <h5 className="card-title">{spanish}</h5>
        </div>

        {/* Botones Idioma*/}
        <div className="d-grid gap-2 mt-2">
          {soundKankuamo && (
            <button
              type="button"
              className="btn btn-language"
              style={{ visibility: styleInfo.visibilityKankuamo }}
              onClick={onClick}
              onMouseDown={() => soundKankuamo.play()}
            >
              {kankuamo}
            </button>
          )}

          {soundEnglish && (
            <button
              type="button"
              className="btn btn-language"
              style={{ visibility: styleInfo.visibilityEnglish }}
              onClick={onClick}
              onMouseDown={() => soundEnglish.play()}
            >
              {english}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
