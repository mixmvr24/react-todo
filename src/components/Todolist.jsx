import { Todoitem } from "./Todoitem"

export const Todolist = ({ items }) => {
    // { console.log(items) }
    return (
        <div className="d-flex flex-column align-items-center w-auto">
            {items.map(item => <Todoitem item={item} />)}
        </div>
    )
}