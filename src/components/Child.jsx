export default function Child({ pro, del }) {
  return (
    <div className="col-md-4">
      <div className="inner p-3 bg-secondary-subtle position-relative">
        <h6>id : {pro.id}</h6>
        <h6>name : {pro.name}</h6>
        <h6>price : {pro.price}</h6>
        <h6>category : {pro.category}</h6>
        <h6>count : {pro.count}</h6>
        {pro.onSale == true ? (
          <div className="bg-danger text-white p-2 position-absolute top-0 end-0">
            sale
          </div>
        ) : (
          ""
        )}
        <button
          className="btn btn-outline-danger w-100 my-2"
          onClick={() => del(pro.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
}
