export const Header = (props) => {
    console.log(props)

    const allDelete = () => {
        alert('click delete all')
    }

    const lastDelete = () => {
        alert('click delete last')
    }


    return (
        <nav className="container navbar navbar-light">
            <form className="d-flex p-2 bd-highlight mb-2 w-100" onSubmit={event => props.handleItem(event)}>
                <button className="btn border-2 border-dark rounded  bg-success me-2 w-25" type="submit" onClick={allDelete}>Delete All</button>
                <button className="btn border-2 border-dark rounded  bg-success me-2 w-25" type="submit" onClick={lastDelete}>Delete Last</button>
                <input
                    className="form-control border-2 border-dark me-2 text-center"
                    placeholder="Enter todo..."
                    aria-label="Search"
                    type="text"
                    name='value'
                    onChange={(event) => props.handleFormData(event)}
                    value={props.formData.value} />
                <button className="btn border-2 border-dark rounded  bg-success" type="submit" onClick={props.onClick}>Add</button>
            </form>
            <form className="d-flex p-2 bd-highlight mb-3 w-100 align-items-center justify-content-around">
                <span className="card-text me-3">All: {props.items.length} </span>
                <span className="card-text me-3">Completed: </span>
                <button className="btn border-2 border-dark rounded  bg-success me-2 w-25" type="submit">Show all</button>
                <button className="btn border-2 border-dark rounded  bg-success me-2 w-25" type="submit">Show Comleted</button>
                <input
                    class="form-control border-2 border-dark w-25 text-center"
                    placeholder="Search"
                    aria-label="Search"
                    type="text"
                    name='src'
                    onChange={(event) => props.handleFormData(event)}
                    value={props.formData.src}/>
            </form>
        </nav>
    )
}