import { TasksList } from "./TasksList"

export const SectionTasks = () => {
    return (
        <section>
            <form action="">
                <input type="text" className="insertTask" placeholder="Insira a sua task aqui..."/>
                <button type="submit">Inserir</button>
            </form>
            <div>
                <TasksList/>
            </div>
        </section>
    )
}