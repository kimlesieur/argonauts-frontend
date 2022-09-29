
const ListItem = ({marin}) => {
    return (
            <div className="member-item" key={marin.id}>
                {marin.name}
            </div>
    )
}

export default ListItem;