// called in handleSubmitAdd and editCard
// delete and add this.state.lists in localStorage
class Storage {
    setLists = lists => localStorage.setItem('lists', JSON.stringify(lists))
    getLists = () => JSON.parse(localStorage.getItem('lists'))
}
export default new Storage();