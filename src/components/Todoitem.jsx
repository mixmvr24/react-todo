export const Todoitem = ({ item }) => {

    const oneDelete = () => {
        alert("delete")
    }

    return (
        <div className="card-body d-flex">
            <div className="d-flex align-items-center border border-dark rounded  bg-secondary bg-gradient">
                <div className="m-3">
                    <label className="form-check-label me-2 p-3"><input type="checkbox" className="form-check-input" /></label>
                    <span className="card-text bg-light rounded p-3">{item.value}</span>
                </div>
                <div className="d-flex flex-column p-2">
                    <button type="button" className="btn-close ms-auto border border-dark rounded bg-success p-2 mb-4" aria-label="Close" onClick={oneDelete}></button>
                    <span className="card-text text-black bg-light rounded p-2">{item.date}</span>
                </div>
            </div>
        </div >
    )
}