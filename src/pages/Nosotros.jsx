const secciones = [
  {
    titulo: 'El Tiempo, Nuestro Legado',
    contenido: 'Desde 1924, Talento ha sido sinónimo de elegancia y precisión. Inspirados por la rica historia de la relojería, hemos creado piezas que trascienden modas. La relojería ha evolucionado desde las antiguas clepsidras hasta los sofisticados relojes de hoy. En Talento, honramos esta tradición, fusionando la artesanía con la innovación.',
    icono: '🕰️' 
  },
  {
    titulo: 'De la arena al cuarzo',
    contenido: 'Los primeros relojes medían el tiempo con agua o arena. La invención del resorte espiral revolucionó la relojería, permitiendo relojes más portátiles. Con el cuarzo, la precisión aumentó, pero la pasión por los mecánicos persistió.',
    icono: '⚙️'
  },
  {
    titulo: 'Talento: pasado y futuro',
    contenido: 'En Talento, cada reloj es una obra de arte. Nuestros maestros artesanos utilizan materiales nobles y técnicas avanzadas para crear piezas únicas. Desde clásicos de cuerda hasta modernos automáticos, tenemos el reloj perfecto para ti.',
    icono: '👑'
  },
  {
    titulo: 'Sostenibilidad y ética',
    contenido: 'Creemos en la sostenibilidad. Utilizamos materiales reciclados y trabajamos con proveedores responsables.',
    icono: '🌱'
  },
];

const textoAdicional = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo numquam vel libero voluptatibus quasi perferendis eos atque qui maxime veritatis ut architecto delectus quisquam amet velit, autem enim neque quam. Error doloremque facere voluptates voluptate animi. Cum est, nemo pariatur, totam animi iure sequi earum, sint illo quibusdam quae dolor modi error temporibus ratione quod obcaecati! Consequuntur doloribus reprehenderit dolores? Ipsam autem laudantium necessitatibus adipisci perspiciatis? Id beatae molestias sint odit? Rerum cumque accusantium sint maiores excepturi sit ex deserunt. Quas neque harum, quisquam quo consequatur veritatis voluptatibus debitis necessitatibus! Aliquam temporibus deleniti, nulla, animi explicabo perspiciatis iste sapiente minima aspernatur nemo repudiandae. Volates nostrum quaerat, hic fugit, repudiandae ullam recusandae explicabo aperiam reiciendis facilis doloremque, non natus saepe doloribus. Laborum tenetur eum voluptatibus numquam impedit soluta iure ipsum nam laboriosam aperiam? Corporis unde deleniti mollitia laboriosam voluptates nobis officia in eum eligendi atque! Eos animi tempora sint nostrum ad! Ut laborum inventore deleniti aspernatur recusandae explicabo in facilis praesentium repellat, ipsum, sunt sint? Laudantium tempore a fugiat consectetur repellendus officia deleniti labore dolorum ullam dignissimos unde repellat, vero repudiandae? Minus esse placeat facilis rerum delectus aliquam, natus dolore quidem ullam explicabo laborum illum laudantium dicta recusandae maxime unde aliquid deleniti ea aut necessitatibus, quaerat corrupti quasi. Nesciunt, nihil autem? Dolor molestiae quae numquam nesciunt dolorum consequatur et nihil blanditiis illum ratione quibusdam sapiente optio, magni nobis itaque hic debitis excepturi odio est! Fugiat possimus corrupti architecto, accusamus praesentium autem? Sit pariatur fuga labore eum quia quibusdam reiciendis quisquam placeat qui excepturi iure in, aperiam aspernatur quos est, accusantium consequuntur optio rerum dolor quae. Architecto veritatis quidem aliquam aspernatur odio? Consectetur voluptas delectus, totam architecto enim culpa reprehenderit voluptates debitis deleniti cum molestiae impedit, odio esse accusantium dolores quo repudiandae libero dolorum iusto, quasi sunt ex! Deleniti fuga officia vitae!"


const Nosotros = () => {
  return (
    // Contenedor principal centrado y con margen superior para evitar el navbar fijo
    <div className="container my-5 pt-4">
      

      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-secondary">La Historia de Talento</h1>
        <p className="lead text-muted mt-3">
          Más de un siglo de excelencia, precisión y pasión por la relojería.
        </p>
      </div>

      <div className="card shadow-lg mb-5 border-0">
        <div className="card-body p-4 p-md-5 bg-light rounded-3">
          <h2 className="card-title text-dark mb-4 fs-3">El Tiempo, Nuestro Legado</h2>
          <p className="fs-5 text-dark">
            Desde 1924, Talento ha sido sinónimo de elegancia y precisión. Inspirados por la rica historia de la relojería, hemos creado piezas que trascienden modas. La relojería ha evolucionado desde las antiguas clepsidras hasta los sofisticados relojes de hoy. En Talento, honramos esta tradición, fusionando la artesanía con la innovación.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        {secciones.slice(1).map((seccion, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-primary border-3 shadow-sm p-3">
              <div className="card-body">
                <span className="fs-2 mb-3 d-block">{seccion.icono}</span>
                <h5 className="card-title fw-semibold text-primary">{seccion.titulo}</h5>
                <p className="card-text text-muted">{seccion.contenido}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 border-secondary border-3 shadow-sm p-3">
              <div className="card-body">
                <span className="fs-2 mb-3 d-block">🚀</span>
                <h5 className="card-title fw-semibold text-secondary">El futuro de la relojería</h5>
                <p className="card-text text-muted">Los relojes inteligentes están transformando la industria, pero los mecánicos siempre tendrán un lugar especial. En Talento, continuamos innovando, creando piezas que perduran en el tiempo.</p>
              </div>
            </div>
          </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <h3 className="fs-4 fw-bold text-center mb-4 border-bottom pb-2">Nuestro Compromiso</h3>
          <p className="text-muted text-justify">
            {textoAdicional}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Nosotros;
