import ListItem from "./ListItem";

const List = ({marins}) => {
    return (
        <section className="member-list">
            {marins.length > 0 && (
                <div className="members">
                {marins.map(marin => (
                    <ListItem marin={marin} />
                ))}
                </div>
            )}
        </section>
    )
}

export default List;